import { useLocation, useNavigate } from 'react-router-dom';
import ButtonApply from './ButtonApply';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 정보를 가져옵니다.

  const NavItem = ({ label, path }) => {
    // 현재 페이지 경로와 메뉴의 경로가 일치하는지 확인합니다.
    const isActive = location.pathname === path;

    return (
      <div
        onClick={() => navigate(path)}
        className="relative px-[24px] py-[16px] cursor-pointer group flex items-center justify-center"
      >
        {/* 1. 배경 그라데이션: 현재 페이지(isActive)면 opacity-100, 아니면 호버 시에만 나타남 */}
        <div
          className={`
            absolute inset-0 transition-opacity duration-300 
            bg-[radial-gradient(50%_50%_at_50%_50%,#BA4E23_0%,#080300_100%)]
            ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
          `}
        />

        {/* 2. 텍스트 레이어: 현재 페이지면 흰색과 굵은 글씨로 강조 */}
        <span
          className={`
            relative z-10 navbar_explanation transition-colors duration-300
          `}
        >
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className=" max-w-[1140px] mx-auto h-[58px] bg-bg-dark flex items-center justify-between my-[8px] py-[8px]">
      <div
        onClick={() => navigate('/')}
        className="px-[32px] py-[16px] cursor-pointer navbar_title transition-colors duration-300 hover:text-gray-02"
      >
        LIKELION HONGIK
      </div>

      <div className="flex justify-between items-center">
        <div className="flex">
          <NavItem label="모집 안내" path="/recruiting" />
          <NavItem label="지난 활동" path="/archaive" />
          <NavItem label="행사 일정" path="/events" />
          <NavItem label="FAQ" path="/faq" />
        </div>
        <ButtonApply type="short" className="mx-[28px]" />
      </div>
    </div>
  );
};

export default Navbar;
