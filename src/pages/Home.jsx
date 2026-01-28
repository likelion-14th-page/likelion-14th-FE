import lion from '../assets/home/logo-lion.png';
import hongik from '../assets/home/logo-hongik.svg';
import Navbar from '../layout/Navbar';
import ButtonApply from '../layout/ButtonApply';
import Introduction from '../components/home/Introduction';
import KeyComp from '../components/home/KeyComp';
import Track from '../components/home/Track';
import SeeMore from '../components/home/SeeMore';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-bg-dark">
      {/* 1. 전체 배경색만 담당 */}
      {/* 2. 네브바 (화면 상단 고정) */}
      <div className="absolute top-0 left-0 w-full z-50 bg-bg-dark">
        <Navbar />
      </div>
      {/* 3. 메인 히어로 섹션 */}
      {/* h-screen을 주어 한 화면을 꽉 채우고, overflow-hidden으로 사자 이미지가 삐져나오지 않게 합니다. */}
      <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        {/* ✅ 실제 내용물만 responsive-layout으로 감싸 중앙 정렬 */}
        <div className="responsive-layout relative w-full flex flex-col items-center md:items-start">
          <div className="relative z-10 flex flex-col items-center md:items-start">
            <div className="gap-[12px] flex items-center mb-[24px] justify-center md:justify-start w-full">
              <img src={hongik} alt="logo" className="w-[43px]" />
              <div className="title-32-semibold text-white">홍익대학교</div>
            </div>
            <div className="title-80-semibold text-white text-center md:text-left">
              멋쟁이 사자처럼
            </div>
            <div className="title-28-semibold text-gray-02 mt-[16px] mb-[96px] text-center md:text-left break-keep">
              국내 최대 규모의 IT 창업 연합 동아리
            </div>
            <ButtonApply type="long_title" />
          </div>

          {/* 사자 로고 (md 이상에서 절대 위치로 배치) */}
          <img
            src={lion}
            alt="logo"
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 lg:w-[649px] md:w-[479px] h-auto z-0"
          />
        </div>
      </section>
      {/* 4. 하단 콘텐츠 섹션들 */}
      {/* 히어로 섹션과 분리되어 있어 더 이상 겹치지 않습니다. */}
      <section className="w-full py-[144px]">
        <div className="responsive-layout flex flex-col gap-[144px]">
          <Introduction />
          <KeyComp />
          <Track />

          <div className="flex flex-col sm:flex-row gap-[20px] justify-center items-center mb-[80px]">
            <SeeMore text="모집 안내 사항 바로가기" navi={'/recruiting'} />
            <SeeMore text="지난 기수 프로젝트 바로가기" />
          </div>
        </div>
      </section>
      {/* 5. 하단 지원 버튼 및 푸터 */}
      <div className="responsive-layout flex justify-center items-center mb-[164px]">
        <ButtonApply type="long_footer" />
      </div>
      <Footer home={true} />
    </div>
  );
};

export default Home;
