import lion from '../assets/home/logo-lion.svg';
import hongik from '../assets/home/logo-hongik.svg';
import Navbar from '../layout/NavBar';

const Home = () => {
  return (
    <>
      <Navbar />
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
          <div className="flex justify-start experience mt-[16px] mb-[96px]">
            국내 최대 규모의 IT 창업 연합 동아리
          </div>
          <button>지원하기</button>
        </div>
        <img
          src={lion}
          alt="logo"
          className="absolute top-[12px] right-[2px] z-0"
        />
      </div>
    </>
  );
};

export default Home;
