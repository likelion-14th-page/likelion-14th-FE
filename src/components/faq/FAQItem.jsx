const FAQItem = ({ question, answer }) => {
    return (
        <div className="flex flex-col gap-4">
            {/* 질문 */}
            <div className="flex justify-center items-center gap-[10px] py-8 self-stretch rounded-2xl bg-[#FFE4D3] mb-3">
                <p className="title-20-semibold text-center text-black">
                    {question}
                </p>
            </div>

            {/* 답변 */}
            <div className="flex justify-center items-center gap-[10px] py-8 self-stretch rounded-2xl bg-[#1C1C1C] mb-12">
                <p className="title-20-semibold text-center text-[#EDEDED]">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default FAQItem;
