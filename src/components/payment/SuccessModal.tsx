import { ShieldCheck } from "lucide-react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    doctorName: string;
    date: string;
    time: string;
}

export default function SuccessModal({
    isOpen,
    onClose,
    doctorName,
    date,
    time
}: SuccessModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-sm text-center shadow-2xl scale-100 animate-in zoom-in-95 duration-300 mx-4">

                <div className="w-24 h-24 bg-[#5B8DCE] rounded-full flex items-center justify-center mx-auto mb-6 shadow-blue-100 shadow-xl">
                    <div className="relative">
                        <ShieldCheck size={48} className="text-white fill-white" />
                        <div className="absolute inset-0 flex items-center justify-center pt-1">
                            <span className="text-[#5B8DCE] text-xl font-bold">✔</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
                    Congratulations!
                </h2>

                <p className="text-gray-500 text-[15px] leading-relaxed mb-8 px-2">
                    Your appointment with <span className="text-gray-700 font-semibold">{doctorName}</span> is confirmed for {date}, at {time}.
                </p>

                <button
                    onClick={onClose}
                    className="w-full bg-[#0F172A] text-white font-semibold text-lg py-4 rounded-full mb-4 hover:bg-slate-800 transition-transform active:scale-95 shadow-lg"
                >
                    Done
                </button>

                <button className="text-gray-400 text-sm hover:text-gray-600 transition-colors">
                    Edit your appointment
                </button>
            </div>
        </div>
    );
}