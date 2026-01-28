const ApplicantItem = ({ applicant, onToggle }) => {
  const formatPart = (part) => {
    switch(part) {
      case 'PM':
      case 'Design': return '기/디';
      case 'Frontend': return '프론트';
      case 'Backend': return '백';
      default: return part;
    }
  };

  const CheckBox = ({ checked, onClick }) => (
    <div 
      onClick={onClick}
      className={`w-6 h-6 rounded-[4px] border flex items-center justify-center cursor-pointer transition-all
        ${checked 
          ? 'bg-orange-01 border-orange-04' 
          : 'bg-transparent border-gray-06 hover:border-gray-04'
        }`}
    >
      {checked && (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );

  return (
    <div className="w-full h-[60px] bg-bg-secondary rounded-[8px] border border-gray-07 mb-2 px-6 flex items-center hover:border-orange-04 transition-all">
      <div className="w-[10%] min-w-[60px] text-gray-03 body-14-medium">
        {formatPart(applicant.part)}
      </div>

      <div className="w-[15%] min-w-[80px] text-white body-16-semibold">
        {applicant.name}
      </div>

      <div className="w-[15%] min-w-[100px] text-gray-04 body-14-regular">
        {applicant.studentId}
      </div>

      <div className="w-[20%] min-w-[140px] text-gray-04 body-14-regular">
        {applicant.phone}
      </div>

      <div className="w-[15%] min-w-[80px]">
        {applicant.docLink ? (
          <a 
            href={applicant.docLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="detail-12-medium text-gray-04 underline hover:text-orange-04"
          >
            보기
          </a>
        ) : (
          <span className="detail-12-medium text-gray-06">없음</span>
        )}
      </div>

      <div className="w-[12%] flex justify-center">
        <CheckBox 
          checked={applicant.isDocPass} 
          onClick={() => onToggle(applicant.id, 'doc')}
        />
      </div>

      <div className="w-[13%] flex justify-center">
        <CheckBox 
          checked={applicant.isFinalPass} 
          onClick={() => onToggle(applicant.id, 'final')}
        />
      </div>
    </div>
  );
};

export default ApplicantItem;