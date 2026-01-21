import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import PageHeader from '../components/common/PageHeader';

const Layout = () => {
  const location = useLocation();

  // 페이지별 헤더 내용 (URL 경로 : 내용)
  const headerConfig = {
    '/events': {
      subtitle: '행사 일정',
      title: 'Program',
      description: '2024년 멋쟁이사자처럼 14기에서 진행할\n1년 로드맵을 소개합니다',
    },

    '/archaive': {
      subtitle: '지난 활동',
      title: 'Archaive',
      description: '2025년 멋쟁이 사자처럼 13기에서 진행한\n프로젝트와 활동을 소개합니다.',
    },

    '/recruiting': {
      subtitle: '모집 안내',
      title: 'Recruiting',
      description: '2026년 멋쟁이사자처럼을 함깨할 14기 멤버를 모집합니다.\n일정 및 소개를 반드시 읽고 지원폼을 제출해주세요.',
    },
  };

  // 현재 주소에 맞는 정보 가져오기
  const currentHeader = headerConfig[location.pathname];

  return (
    <div className="w-full min-h-screen bg-bg-dark">
      <Navbar />
      {currentHeader && (
        <PageHeader 
          subtitle={currentHeader.subtitle}
          title={currentHeader.title}
          description={currentHeader.description}
        />
      )}
      
      {/* 본문 영역: 헤더와 라인을 맞추기 위해 px-[120px] 적용 */}
      <main className="w-full px-[120px] py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;