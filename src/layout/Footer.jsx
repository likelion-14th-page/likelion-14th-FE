import Manager from '../components/home/Manager';

const Footer = ({ home = false }) => {
  return home === true ? (
    /* 1. 배경을 담당하는 바깥쪽 Div (w-full) */
    <footer className="w-full bg-bg-secondary pt-[92px] pb-[141px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-row gap-[120px] justify-start items-start">
          {/* 인스타그램 & 이메일 섹션 */}
          <div className="flex flex-col gap-[64px]">
            <div className="flex flex-col gap-[32px]">
              <div className="title-20-semibold text-white">인스타그램</div>
              <div className="py-[8px] px-[24px] body-18-semibold text-white bg-gray-07 rounded-full w-fit">
                @likelion_hongik
              </div>
            </div>
            <div className="flex flex-col gap-[32px]">
              <div className="title-20-semibold text-white">이메일</div>
              <div className="py-[8px] px-[24px] body-18-semibold text-white bg-gray-07 rounded-full w-fit">
                hongik.likelion@gmail.com
              </div>
            </div>
          </div>

          {/* 운영진 정보 섹션 */}
          <Manager />
        </div>
      </div>
    </footer>
  ) : (
    /* Home이 아닐 때의 푸터 (여기도 중앙 정렬이 필요하다면 내부 div를 추가할 수 있습니다) */
    <footer className="h-[464px] w-full bg-[radial-gradient(59.61%_59.61%_at_50%_100%,#6E2900_0%,#080300_100%)]">
      {/* 필요 시 여기에 <div className="max-w-[1200px] mx-auto px-6"> ... </div> 추가 */}
    </footer>
  );
};

export default Footer;
