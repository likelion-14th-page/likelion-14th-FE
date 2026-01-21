import lion from '../assets/home/logo-lion.svg';
import hongik from '../assets/home/logo-hongik.svg';

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div alt="텍스트" className="ml-[150px] mb-[176px] mt-[239px]">
          <div className="gap-[12px] flex  items-center">
            <img src={hongik} alt="logo" className="w-[43px]" />
            <div className="bg-bg-dark text-white">멋쟁이 사자처럼</div>
          </div>
          <div>멋쟁이 사자처럼</div>
          <div className="text-gray-02">
            국내 최대 규모의 IT 창업 연합 동아리
          </div>
          <button>지원하기</button>
        </div>
        <img
          src={lion}
          alt="logo"
          className="absolute top-[12px] right-[2px] "
        />
      </div>
    </>
  );
};

export default Home;
