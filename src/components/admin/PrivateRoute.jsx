import { Navigate } from 'react-router-dom';

// isAuthenticated: 로그인 여부 (true/false)
const PrivateRoute = ({ children }) => {
  // 실제로는 여기서 localStorage나 Context, Redux 등에 저장된 토큰을 확인합니다.
  // 예시: localStorage에 'adminToken'이 있는지 확인
  const isAuthenticated = localStorage.getItem('adminToken');

  // 토큰이 없으면(로그인 안했으면) 로그인 페이지로 리다이렉트
  if (!isAuthenticated) {
    alert("로그인이 필요한 페이지입니다.");
    return <Navigate to="/admin/login" replace />;
  }

  // 로그인 했으면 자식 컴포넌트(대시보드)로 리다이렉트
  return children;
};

export default PrivateRoute;