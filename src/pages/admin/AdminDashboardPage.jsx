import { useState } from 'react';
import DashboardHeader from '../../components/admin/DashboardHeader';
import TabFilter from '../../components/admin/TabFilter';
import ApplicantList from '../../components/admin/ApplicantList';

const INITIAL_DATA = [
  { id: 1, name: '김멋사', studentId: 'B912345', part: 'Frontend', phone: '010-1234-5678', docLink: 'https://google.com', isDocPass: true, isFinalPass: false },
  { id: 2, name: '이디자', studentId: 'C112345', part: 'Design', phone: '010-1111-2222', docLink: 'https://google.com', isDocPass: false, isFinalPass: false },
  { id: 3, name: '박백엔', studentId: 'B812345', part: 'Backend', phone: '010-3333-4444', docLink: '', isDocPass: true, isFinalPass: true },
  { id: 4, name: '최기획', studentId: 'C212345', part: 'PM', phone: '010-5555-6666', docLink: 'https://google.com', isDocPass: false, isFinalPass: false },
  { id: 5, name: '정프론', studentId: 'B712345', part: 'Frontend', phone: '010-7777-8888', docLink: 'https://google.com', isDocPass: true, isFinalPass: false },
];

const AdminDashboardPage = () => {
  const [currentTab, setCurrentTab] = useState('all');
  const [applicants, setApplicants] = useState(INITIAL_DATA);
  
  // 필터 상태
  const [filters, setFilters] = useState({
    doc: false, 
    final: false, 
  });

  // 개별 토글
  const handleToggle = (id, type) => {
    setApplicants(prev => prev.map(app => {
      if (app.id === id) {
        if (type === 'doc') return { ...app, isDocPass: !app.isDocPass };
        if (type === 'final') return { ...app, isFinalPass: !app.isFinalPass };
      }
      return app;
    }));
  };

  // 필터 토글
  const toggleFilter = (type) => {
    setFilters(prev => ({
      ...prev,
      [type]: !prev[type] 
    }));
  };

  // 필터링 로직
  const getFilteredData = () => {
    let data = applicants;

    // 탭 필터
    if (currentTab === 'plan_design') {
      data = data.filter(item => item.part === 'PM' || item.part === 'Design');
    } else if (currentTab === 'frontend') {
      data = data.filter(item => item.part === 'Frontend');
    } else if (currentTab === 'backend') {
      data = data.filter(item => item.part === 'Backend');
    }

    // 체크박스 필터
    if (filters.doc) data = data.filter(item => item.isDocPass);
    if (filters.final) data = data.filter(item => item.isFinalPass);

    return data;
  };

  const filteredApplicants = getFilteredData();

  return (
    <div className="w-full min-h-screen bg-bg-dark">
      <DashboardHeader />

      <main className="pt-[120px] px-[60px] w-full max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="title-32-bold text-white mb-2">지원자 관리</h2>
            <p className="body-16-regular text-gray-04">
              총 <span className="text-orange-04 font-bold">{filteredApplicants.length}</span>명의 지원자가 있습니다.
            </p>
          </div>
        </div>

        <TabFilter currentTab={currentTab} onTabChange={setCurrentTab} />

        <ApplicantList 
          applicants={filteredApplicants} 
          onToggle={handleToggle} 
          filters={filters}         
          onFilterToggle={toggleFilter} 
        />
        
      </main>
    </div>
  );
};

export default AdminDashboardPage;