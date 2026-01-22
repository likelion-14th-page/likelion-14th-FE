import lion from '../assets/home/logo-lion.svg';
import hongik from '../assets/home/logo-hongik.svg';
import Navbar from '../layout/Navbar';
import ButtonApply from '../layout/ButtonApply';
import Introduction from '../components/home/Introduction';
import KeyComp from '../components/home/KeyComp';
import Track from '../components/home/Track';

const Home = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-bg-dark">
        <Navbar />
      </div>
      <div className="relative w-full h-screen overflow-hidden bg-bg-dark">
        <div
          alt="텍스트"
          className="relative ml-[150px] mb-[176px] mt-[239px] z-10"
        >
          <div
            alt="홍익대학교"
            className="gap-[12px] flex items-center mb-[24px]"
          >
            <img src={hongik} alt="logo" className="w-[43px]" />
            <div className="hongik">홍익대학교</div>
          </div>
          <div className="likelion">멋쟁이 사자처럼</div>
          <div className="flex justify-start explanation mt-[16px] mb-[96px]">
            국내 최대 규모의 IT 창업 연합 동아리
          </div>
          <ButtonApply type="long" />
        </div>
        <img
          src={lion}
          alt="logo"
          className="absolute top-[12px] right-[2px] z-0"
        />
      </div>
      <div
        alt="기타 설명"
        className="flex flex-col gap-[144px] mx-[150px] mb-[144px]"
      >
        <Introduction />
        <KeyComp />
        <Track />
      </div>
      <div alt="바로가기">
        <div>모집 안내사항 바로가기</div>
        <div>지난 기수 프로젝트 보러가기</div>
      </div>
    </>
  );
};

export default Home;
