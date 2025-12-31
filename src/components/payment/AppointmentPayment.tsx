/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MapPin, Calendar, Check, Loader2 } from "lucide-react";
import { apple, paypal } from "@/assets";
import { cn } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

/**
 * STRIPE CONFIGURATION
 * Initialize Stripe with publishable key.
 */
const stripePromise = loadStripe(
  "pk_test_51Sf2UbENsGltZOQogLhBuNIfmI9WZ6mJkiQ1vKf3kwZCI51l0yq1hXSwJp0FHjX6aj9mNHv6wKmPHe8NXz3ZBXeL00wIzNcJ8k"
);

const PAYMENT_METHODS = [
  { id: "credit_card", label: "Credit Card", enabled: true },
  { id: "paypal", label: "PayPal", enabled: false },
  { id: "apple_pay", label: "Apple Pay", enabled: false },
];

function PaymentContent() {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();

  /**
   * DATA NORMALIZATION
   * Extracts booking details from the navigation state.
   * Handle both direct and nested object structures.
   */
  const rawState = location.state?.booking || {};
  const bookingData = rawState.booking || rawState;

  // States
  const [selectedMethod, setSelectedMethod] = useState<string>("credit_card");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  /**
   * STRIPE TRANSACTION HANDLER
   * This confirms the payment intent created in the previous step.
   * It prevents "Double Booking" by NOT calling the backend creation API again.
   */
  const handlePaymentSubmit = async () => {
    if (!stripe || !elements) return;
    setIsLoading(true);

    try {
      /**
       * FETCHING CLIENT SECRET
       * Path confirmed from API: payment -> response -> client_secret
       */
      const clientSecret = bookingData.payment?.response?.client_secret ||
        rawState.payment?.response?.client_secret;

      if (!clientSecret) {
        throw new Error("Payment session expired. Please restart the booking process.");
      }

      // Execute Stripe Confirmation
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message || "Payment Declined");
        setIsErrorOpen(true);
      } else if (result.paymentIntent?.status === "succeeded") {
        navigate("/appointments");
      }
    } catch (error: any) {
      setErrorMessage(error.message || "An unexpected error occurred during payment.");
      setIsErrorOpen(true);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        doctorName={bookingData.doctor?.user?.name || "Doctor"}
        date={bookingData.booking_date}
        time={bookingData.booking_time}
      />

      <ErrorModal
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        errorMessage={errorMessage}
      />

      <div className="w-full max-w-105 mx-auto bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 font-sans m-10">
        {/* DOCTOR INFO SECTION */}
        <section className="flex items-center gap-5 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-100 shadow-sm">
              <img
                src={bookingData.doctor?.user?.profile_photo || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200"}
                alt="doctor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 right-0 bg-blue-600 text-white p-0.5 rounded-full border-2 border-white">
              <Check size={12} strokeWidth={4} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              {bookingData.doctor?.user?.name || "Doctor Name"}
            </h1>
            <p className="text-gray-400 font-medium text-sm">Medical Specialist</p>
            <div className="flex items-center gap-1 text-gray-400 mt-1">
              <MapPin size={14} className="text-blue-500" />
              <span className="text-xs font-light">
                {bookingData.doctor?.clinic_location?.address || "Cairo, Egypt"}
              </span>
            </div>
          </div>
        </section>

        {/* APPOINTMENT SCHEDULE */}
        <div className="flex items-center gap-3 mb-10 bg-slate-50 p-4 rounded-2xl">
          <Calendar size={20} className="text-blue-600" />
          <span className="text-slate-800 font-semibold text-sm">
            {bookingData.booking_date} at {bookingData.booking_time}
          </span>
        </div>

        {/* PAYMENT METHODS SELECTOR */}
        <h2 className="text-xl font-bold text-slate-900 mb-5">Payment Method</h2>
        <div className="space-y-4">
          {PAYMENT_METHODS.map((method) => {
            const isActive = selectedMethod === method.id;
            return (
              <div
                key={method.id}
                onClick={() => method.enabled && setSelectedMethod(method.id)}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl transition-all border",
                  isActive ? "bg-[#F3F9F3] border-transparent" : "bg-white border-transparent hover:bg-gray-50",
                  !method.enabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-6 h-6 rounded-full flex items-center justify-center border-2", isActive ? "bg-green-500 border-green-500" : "bg-white border-gray-200")}>
                    {isActive && <Check size={14} className="text-white" strokeWidth={3} />}
                  </div>
                  <span className={cn("font-semibold text-[15px]", isActive ? "text-green-600" : "text-gray-700")}>
                    {method.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {method.id === "credit_card" && <div className="bg-[#1A1F71] px-2 py-1 rounded text-[10px] text-white font-bold italic">VISA</div>}
                  {method.id === "paypal" && <img src={paypal} alt="PayPal" className="h-5" />}
                  {method.id === "apple_pay" && <img src={apple} alt="Apple Pay" className="h-6" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* STRIPE CARD ELEMENT */}
        {selectedMethod === "credit_card" && (
          <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-100">
            <label className="block text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-widest">Card Details</label>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <CardElement options={{ style: { base: { fontSize: "16px", color: "#1e293b" } } }} />
            </div>
          </div>
        )}

        {/* CHECKOUT FOOTER */}
        <div className="mt-12">
          <div className="flex items-end justify-between mb-6">
            <span className="text-3xl font-bold text-slate-900">Total</span>
            <span className="text-red-500 text-2xl font-bold">{bookingData.price || 0}$</span>
          </div>
          <button
            onClick={handlePaymentSubmit}
            disabled={isLoading}
            className={cn(
              "w-full py-4 rounded-2xl text-white text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-100",
              isLoading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
            )}
          >
            {isLoading ? <><Loader2 className="animate-spin" size={20} /> Processing...</> : "Pay Now"}
          </button>
        </div>
      </div>
    </>
  );
}

export default function AppointmentPayment() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentContent />
    </Elements>
  );
}