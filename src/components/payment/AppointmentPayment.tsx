import { useState } from "react";
import axios from "axios";
import { MapPin, Calendar, Plus, Check, Loader2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// class name
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types & Interfaces ---
interface PaymentPayload {
  doctorId: string;
  amount: number;
  paymentMethod: string;
  appointmentDate: string;
}

const PAYMENT_METHODS = [
  { id: "credit_card", label: "Credit Card", icon: "VISA" },
  { id: "paypal", label: "PayPal", icon: "Paypal" },
  { id: "apple_pay", label: "Apple Pay", icon: "ApplePay" },
];

export default function AppointmentPayment() {
  
  // 1.States
  const [selectedMethod, setSelectedMethod] = useState<string>("credit_card");
  const [isLoading, setIsLoading] = useState(false);

  // 2.Mock Data
  const appointmentData = {
    doctorId: "DOC-9921",
    doctorName: "Dr. Jessica Turner",
    specialty: "Pulmonologist",
    address: "129, El-Nasr Street, Cairo",
    date: "Friday, July 17 - 4:00pm",
    price: 350,
  };

  // 3.API
  const handlePaymentSubmit = async () => {
    setIsLoading(true);

    const payload: PaymentPayload = {
      doctorId: appointmentData.doctorId,
      amount: appointmentData.price,
      paymentMethod: selectedMethod,
      appointmentDate: appointmentData.date,
    };

    // 4.Error Handel
    try {
      const response = await axios.post("API URL", payload);

      if (response.status === 200) {
        console.log("Payment Successful", response.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data || error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[420px] mx-auto bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 font-sans">
      {/* Profile Section */}
      <section className="flex items-center gap-5 mb-8">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200"
              alt={appointmentData.doctorName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-0 bg-blue-600 text-white p-0.5 rounded-full border-2 border-white">
            <Check size={12} strokeWidth={4} />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            {appointmentData.doctorName}
          </h1>
          <p className="text-gray-400 font-medium text-sm">
            {appointmentData.specialty}
          </p>
          <div className="flex items-center gap-1 text-gray-400 mt-1">
            <MapPin size={14} className="text-blue-500" />
            <span className="text-xs font-light">
              {appointmentData.address}
            </span>
          </div>
        </div>
      </section>

      {/* Appointment Info */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-2.5 rounded-xl">
            <Calendar size={20} className="text-blue-600" />
          </div>
          <span className="text-slate-800 font-semibold text-sm">
            {appointmentData.date}
          </span>
        </div>
        <button
          // onClick={}
          className="text-blue-500 text-sm font-bold hover:underline"
        >
          Reschedule
        </button>
      </div>

      <h2 className="text-xl font-bold text-slate-900 mb-5">Payment Method</h2>

      {/* Payment List */}
      <div className="space-y-4">
        {PAYMENT_METHODS.map((method) => {
          const isActive = selectedMethod === method.id;
          return (
            <div
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={cn(
                "flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border",
                isActive
                  ? "bg-[#F3F9F3] border-transparent"
                  : "bg-white border-transparent hover:bg-gray-50"
              )}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors",
                    isActive
                      ? "bg-green-500 border-green-500"
                      : "bg-white border-gray-200"
                  )}
                >
                  {isActive && (
                    <Check size={14} className="text-white" strokeWidth={3} />
                  )}
                </div>
                <span
                  className={cn(
                    "font-semibold text-[15px]",
                    isActive ? "text-green-600" : "text-gray-400"
                  )}
                >
                  {method.label}
                </span>
              </div>

              {/* Conditional Logo Rendering */}
              {method.id === "credit_card" && (
                <div className="bg-[#1A1F71] px-2 py-1 rounded text-[10px] text-white font-bold italic">
                  VISA
                </div>
              )}
              {method.id === "paypal" && (
                <div className="text-[#003087] font-bold italic text-sm">
                  PayPal
                </div>
              )}
              {method.id === "apple_pay" && (
                <div className="text-black font-bold text-sm"> Pay</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Add Card Section */}
      <button
        // onClick={}
        className="w-full mt-6 border-2 border-dashed border-blue-100 rounded-2xl py-4 flex items-center justify-center gap-2 group hover:bg-blue-50 hover:border-blue-200 transition-all"
      >
        <Plus size={20} className="text-blue-600" />
        <span className="text-blue-600 font-bold">Add new card</span>
      </button>

      {/* Footer / Total */}
      <div className="mt-12">
        <div className="flex items-end justify-between mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-slate-900">Price</span>
            <span className="text-gray-300 text-sm font-medium">/hour</span>
          </div>
          <span className="text-red-500 text-2xl font-bold">
            {appointmentData.price}$
          </span>
        </div>

        <button
          onClick={handlePaymentSubmit}
          disabled={isLoading}
          className={cn(
            "w-full py-4 rounded-2xl text-white text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-100",
            isLoading
              ? "bg-blue-300"
              : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Processing...
            </>
          ) : (
            "Pay"
          )}
        </button>
      </div>
    </div>
  );
}
