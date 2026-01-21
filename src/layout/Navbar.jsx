import ButtonApply from './ButtonApply';

const Navbar = () => {
  return (
    <>
      <div
        alt="navbar"
        className="w-full h-[58px] bg-bg-dark flex items-center justify-between px-[120px] my-[8px] py-[8px]"
      >
        <div className="px-[32px] py-[16px] cursor-pointer navbar_title hover:text-gray-02">
          LIKE LION HONGIK
        </div>
        <div
          alt="nav bar explanation "
          className="flex justify-between items-center "
        >
          <div className="navbar_explanation justify-center items-center flex">
            <div className="px-[24px] py-[16px] cursor-pointer hover:bg-[radial-gradient(50%_50%_at_50%_50%,#BA4E23_0%,#080300_100%)]">
              모집 안내
            </div>
            <div className="px-[24px] py-[16px] cursor-pointer hover:bg-[radial-gradient(50%_50%_at_50%_50%,#BA4E23_0%,#080300_100%)]">
              지난 활동
            </div>
            <div className="px-[24px] py-[16px] cursor-pointer hover:bg-[radial-gradient(50%_50%_at_50%_50%,#BA4E23_0%,#080300_100%)]">
              행사 일정
            </div>
            <div className="px-[24px] py-[16px] cursor-pointer hover:bg-[radial-gradient(50%_50%_at_50%_50%,#BA4E23_0%,#080300_100%)]">
              FAQ
            </div>
          </div>
          <ButtonApply type="short" className={'mx-[28px]'} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
