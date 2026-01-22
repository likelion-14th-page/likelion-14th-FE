import ButtonApply from './ButtonApply';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // 메뉴 아이템 구조를 함수로 빼면 코드가 훨씬 깔끔해집니다
  const NavItem = ({ label, path }) => (
    <div
      onClick={() => navigate(path)}
      className="relative px-[24px] py-[16px] cursor-pointer group flex items-center justify-center"
    >
      {/* 1. 배경 그라데이션 레이어: 평소엔 투명도 0, 호버 시 100 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(50%_50%_at_50%_50%,#BA4E23_0%,#080300_100%)]" />

      {/* 2. 텍스트 레이어: 배경보다 위에 보이도록 relative와 z-index 설정 */}
      <span className="relative z-10 navbar_explanation">{label}</span>
    </div>
  );

  return (
    <div className="w-full h-[58px] bg-bg-dark flex items-center justify-between px-[120px] my-[8px] py-[8px]">
      <div
        onClick={() => navigate('/')}
        className="px-[32px] py-[16px] cursor-pointer navbar_title transition-colors duration-300 hover:text-gray-02"
      >
        LIKE LION HONGIK
      </div>

      <div className="flex justify-between items-center">
        <div className="flex">
          <NavItem label="모집 안내" path="/recruiting" />
          <NavItem label="지난 활동" path="/archive" />{' '}
          {/* archive 오타 수정 */}
          <NavItem label="행사 일정" path="/events" />
          <NavItem label="FAQ" path="/faq" />
        </div>
        <ButtonApply type="short" className="mx-[28px]" />
      </div>
    </div>
  );
};

export default Navbar;
