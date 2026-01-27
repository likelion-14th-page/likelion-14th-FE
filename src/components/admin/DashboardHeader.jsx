import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      // ✅ 로그아웃 시 토큰 삭제 (출입증 폐기)
      localStorage.removeItem('adminToken');
      
      navigate('/admin/login');
    }
  };

  return (
    <header className="w-full h-[80px] px-10 flex justify-between items-center bg-bg-secondary border-b border-gray-07 fixed top-0 left-0 z-50">
      <div className="flex items-center gap-3">
        <h1 className="title-24-bold text-white">Likelion 14th Admin</h1>
        <span className="px-3 py-1 rounded-full bg-orange-01 text-white detail-12-semibold border border-orange-04">
          14기 운영진
        </span>
      </div>
      
      <button 
        onClick={handleLogout}
        className="body-14-medium text-gray-04 hover:text-white transition-colors"
      >
        로그아웃
      </button>
    </header>
  );
};

export default DashboardHeader;