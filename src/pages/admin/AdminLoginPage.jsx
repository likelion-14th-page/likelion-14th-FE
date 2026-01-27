import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/admin/LoginForm';

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (id, pw) => {
    // 🔐 임시 로그인 로직
    const ADMIN_ID = 'admin';
    const ADMIN_PW = '1234';

    if (id === ADMIN_ID && pw === ADMIN_PW) {
      // ✅ 로그인 성공 시 토큰 저장 (이게 "출입증" 역할)
      localStorage.setItem('adminToken', 'secret-token-1234');
      
      alert(`환영합니다, 운영진님! 🦁`);
      navigate('/admin/dashboard'); 
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-bg-dark">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default AdminLoginPage;