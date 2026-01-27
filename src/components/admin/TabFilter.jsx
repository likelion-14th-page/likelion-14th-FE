const TabFilter = ({ currentTab, onTabChange }) => {
  // 탭 목록 정의
  const tabs = [
    { id: 'all', label: '전체 보기' },
    { id: 'plan_design', label: '기획 / 디자인' },
    { id: 'frontend', label: '프론트엔드' },
    { id: 'backend', label: '백엔드' },
  ];

  return (
    <div className="flex gap-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-3 rounded-[100px] transition-all duration-200 body-16-semibold
            ${currentTab === tab.id 
              ? 'bg-orange-01 text-white border border-orange-04'  // 활성 상태
              : 'bg-gray-01 text-gray-04 border border-transparent hover:bg-gray-02' // 비활성 상태
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabFilter;