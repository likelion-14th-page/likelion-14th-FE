import ApplicantItem from './ApplicantItem'; 

const HeaderFilter = ({ label, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-center justify-center gap-2 cursor-pointer group hover:text-white transition-colors"
  >
    <span>{label}</span>
    <div className={`w-4 h-4 rounded-[2px] border flex items-center justify-center transition-all
      ${isActive 
        ? 'bg-orange-04 border-orange-04' 
        : 'border-gray-05 group-hover:border-white'
      }`}
    >
      {isActive && (
        <svg width="10" height="8" viewBox="0 0 14 10" fill="none">
          <path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  </div>
);

const ApplicantList = ({ applicants, onToggle, filters, onFilterToggle }) => {
  
  // 데이터가 없을 때도 헤더는 보여줘야 함
  const isEmpty = !applicants || applicants.length === 0;

  return (
    <div className="w-full pb-20">
      
      {/* 1. 리스트 헤더 (기준점) */}
      <div className="w-full px-6 py-3 mb-2 flex items-center border-b border-gray-07">
        <div className="w-[10%] min-w-[60px] detail-12-semibold text-gray-05">파트</div>
        <div className="w-[15%] min-w-[80px] detail-12-semibold text-gray-05">이름</div>
        <div className="w-[15%] min-w-[100px] detail-12-semibold text-gray-05">학번</div>
        <div className="w-[20%] min-w-[140px] detail-12-semibold text-gray-05">전화번호</div>
        <div className="w-[15%] min-w-[80px] detail-12-semibold text-gray-05">서류</div>
        
        {/* 서류 합격 필터 */}
        <div className="w-[12%] text-center detail-12-semibold text-gray-05">
          <HeaderFilter 
            label="서류 합격" 
            isActive={filters?.doc} 
            onClick={() => onFilterToggle('doc')} 
          />
        </div>

        {/* 최종 합격 필터 */}
        <div className="w-[13%] text-center detail-12-semibold text-gray-05">
          <HeaderFilter 
            label="최종 합격" 
            isActive={filters?.final} 
            onClick={() => onFilterToggle('final')} 
          />
        </div>
      </div>

      {/* 2. 리스트 내용 */}
      {isEmpty ? (
        <div className="w-full py-20 flex flex-col items-center justify-center text-gray-05">
          <p className="body-18-medium">해당하는 지원자가 없습니다.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {applicants.map((item) => (
            <ApplicantItem 
              key={item.id} 
              applicant={item} 
              onToggle={onToggle} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplicantList;