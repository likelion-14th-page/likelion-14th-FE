import FAQItem from '../components/faq/FAQItem';

const FAQ = () => {
    return (
        <div>
            <h1 className="mt-[100px] title-64-bold text-center text-[#F3EAE5]">
                자주 묻는 질문
            </h1>
            <p className="mt-[24px] body-16-semibold text-center text-gray-02" style={{ letterSpacing: '-0.003px' }}>
                궁금하신 점은 이곳을 확인해주세요
            </p>

            <div className="mt-[150px] flex justify-center">
                <div className="flex justify-center items-center gap-[10px] px-4 py-[10px] rounded-[1000px] bg-white body-18-semibold text-center text-black">
                    공통질문
                </div>
            </div>

            {/* FAQ 아이템 예시 */}
            <div className="mt-15">
                <FAQItem
                    question="Q. 면접은 어떻게 진행되나요?"
                    answer="A. 멋쟁이사자처럼은 열정을 더 많이 봅니다 어쩌고"
                />
                <FAQItem
                    question="Q. 면접은 어떻게 진행되나요?"
                    answer="A. 멋쟁이사자처럼은 열정을 더 많이 봅니다 어쩌고"
                />
            </div>
        </div>
    )
};

export default FAQ;