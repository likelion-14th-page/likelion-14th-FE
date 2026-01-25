import lion from '../assets/home/logo-lion.svg';
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
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="fixed top-0 left-0 w-full z-50 bg-bg-dark">
          <Navbar />
        </div>
        <div className="relative  h-screen overflow-hidden bg-bg-dark">
          <div alt="텍스트" className="relative mb-[176px] mt-[239px] z-10">
            <div
              alt="홍익대학교"
              className="gap-[12px] flex items-center mb-[24px]"
            >
              <img src={hongik} alt="logo" className="w-[43px]" />
              <div className="title-32-semibold">홍익대학교</div>
            </div>
            <div className="title-80-semibold">멋쟁이 사자처럼</div>
            <div className="flex justify-start title-28-semibold text-gray-02 mt-[16px] mb-[96px]">
              국내 최대 규모의 IT 창업 연합 동아리
            </div>
            <ButtonApply type="long_title" />
          </div>
          <img
            src={lion}
            alt="logo"
            className="absolute top-[12px] right-[2px] z-0"
          />
        </div>
        <div alt="기타 설명" className="flex flex-col gap-[144px] mb-[144px]">
          <Introduction />
          <KeyComp />
          <Track />
          <div
            alt="바로가기"
            className="flex flex-row gap-[20px] justify-center items-center mb-[80px]"
          >
            <SeeMore text="모집 안내 사항 바로가기" navi={'/recruiting'} />
            <SeeMore text="지난 기수 프로젝트 바로가기" />
          </div>
        </div>
        <div className="flex justify-center items-center mb-[164px]">
          <ButtonApply type="long_footer" />
        </div>
      </div>
      <Footer home={true} />
    </>
  );
};

export default Home;
