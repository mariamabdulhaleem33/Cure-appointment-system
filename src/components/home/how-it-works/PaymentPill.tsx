import { BsPaypal } from "react-icons/bs";
import { FaApplePay, FaCcVisa } from "react-icons/fa6";

type PaymentVariant = "paypal" | "apple" | "visa";

export default function PaymentPill({ variant }: { variant: PaymentVariant }) {
  const paymentConfig = {
    apple: {
      title: "Quick checkout with Apple Pay",
      icon: <FaApplePay />,
    },
    visa: {
      title: "Secure and fast card payments",
      icon: <FaCcVisa className="text-[#1A1F71] text-lg" />,
    },
    paypal: {
      title: "Easy and safe with your PayPal account",
      icon: <BsPaypal className="text-[#003087]" />,
    },
  };

  const { title, icon } = paymentConfig[variant];

  return (
    <div className="bg-white w-fit shadow-[0_0_12px_0_#2020201A] absolute top-[10px] flex items-center rounded-[4px] gap-1 pl-[8.5px] pr-[12px] py-[10.5px] border border-gray-50">
      <span className="flex items-center justify-center">{icon}</span>

      <span className="text-[12px] font-medium text-[#05162C]">{title}</span>
    </div>
  );
}
