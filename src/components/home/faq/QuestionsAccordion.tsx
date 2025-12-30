import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is this app used for?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nemo laboriosam quae assumenda dignissimos!",
  },
  {
    id: 2,
    question: "Is the app free to use?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nemo laboriosam quae assumenda dignissimos!",
  },
  {
    id: 3,
    question: "How can I find a doctor?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nemo laboriosam quae assumenda dignissimos!",
  },
  {
    id: 4,
    question: "Can I cancel my appointment?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nemo laboriosam quae assumenda dignissimos!",
  },
  {
    id: 5,
    question: "What payment are supported",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nemo laboriosam quae assumenda dignissimos!",
  },
  {
    id: 6,
    question: "How do I edit my profile?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nemo laboriosam quae assumenda dignissimos!",
  },
];

export default function QuestionsAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="bg-white-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="w-[230px] h-[33px] flex items-center justify-center gap-2 rounded-[23px] bg-white text-[rgba(20,93,184,1)] text-sm font-normal opacity-100 py-2 px-4">
          Frequently Asked Questions
        </div>

        {/* العنوان */}
        <h2 className="text-[32px] sm:text-[40px] font-normal font-[Georgia] leading-[100%] text-center">
          Got Questions ? We’ve got Answers!
        </h2>

        {/* قائمة الأسئلة */}
        <div className="flex flex-col items-center gap-4 w-full">
          {questions.map((q) => (
            <div key={q.id} className="flex flex-col w-full max-w-[800px]">
              <div
                className="w-full h-14.75 flex justify-between items-center p-4 rounded-xl bg-gray shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setOpenId(openId === q.id ? null : q.id)}
              >
                <span className="font-medium text-lg">{q.question}</span>
                <span className="text-2xl font-bold">
                  {openId === q.id ? "−" : "+"}
                </span>
              </div>

              {openId === q.id && (
                <div className="w-full bg-white px-4 pb-4 text-gray-600 border-t border-white">
                  {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
