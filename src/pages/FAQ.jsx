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

            {/* FAQ */}
            <div className="mt-15">
                <FAQItem
                    question="Q. 면접은 어떻게 진행되나요?"
                    answer="A. 멋쟁이사자처럼은 열정을 더 많이 봅니다 어쩌고"
                />
                <FAQItem
                    question="Q. 세션은 어떻게 진행되나요?"
                    answer="A. 매주 목요일 대면 / 공통세션 → 파트별 세션"
                />
                <FAQItem
                    question="Q. 휴학생도 지원 가능한가요?"
                    answer="A. 네! 멋쟁이사자처럼은 재학생, 휴학생, 졸업유예생 모두 학과에 상관없이 지원가능합니다"
                />
            </div>
            <div className="mt-[100px] flex justify-center">
                <div className="flex justify-center items-center gap-[10px] px-4 py-[10px] rounded-[1000px] bg-white body-18-semibold text-center text-black">
                기획/디자인
                </div>
            </div>
            <div className="mt-15">
                <FAQItem
                    question="Q. UX/UI 경험이 없는데 괜찮을까요?"
                    answer="A. 멋쟁이사자처럼은 열정을 더 많이 봅니다 어쩌고"
                />
                <FAQItem
                    question="Q. 기획과 디자인을 기디 혼자서 진행하는 건가요?"
                    answer="A. 기획 파트가 있지만 다같이 우리의 서비스를 만들어가는 것을 목적으로 하고 있어요. 개인의 기획을 진행할수도 있고 팀원들과 합쳐서 낼 수도 있어요"
                />
                <FAQItem
                    question="Q. 기획에 더 관심이 있는 사람은 하기 어려울까요?"
                    answer="A. 한 파트에서 진행하는 만큼, 디자인의 영역도 중요하기에 어느정도 디자인에 대한 열정을 필요로 하고 있어요"
                />
            </div>

            <div className="mt-[100px] flex justify-center">
                <div className="flex justify-center items-center gap-[10px] px-4 py-[10px] rounded-[1000px] bg-white body-18-semibold text-center text-black">
                개발 (프론트엔드&백엔드)
                </div>
            </div>
            <div className="mt-15">
                <FAQItem
                    question="Q. 지원을 하려면 어느 정도의 개발 관련 지식이 필요한가요?"
                    answer="A. 답변"
                />
            </div>
        </div>
    )
};

export default FAQ;