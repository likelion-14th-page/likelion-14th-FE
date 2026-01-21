const PageHeader = ({ title, subtitle, description }) => {
  return (
    // 상하 패딩(py-16)과 하단 테두리(border-b)만 유지했습니다.
    <section className="py-16 w-full border-b border-gray-07 px-[150px]">
      
      {/* 소제목 (예: 행사 일정) */}
      <p className="body-16-semibold text-orange-04 mb-4">
        {subtitle}
      </p>

      {/* 대제목과 설명글을 가로로 배치하고 아래쪽 라인을 맞춤 */}
      <div className="flex items-end gap-4">
        
        {/* 대제목 (예: Program) */}
        <h1 className="title-120-bold">
          {title}
        </h1>

        {/* 설명글 */}
        <div className="h-full flex items-end pb-4"> {/* 폰트 베이스라인 미세 조정을 위해 pb 추가 */}
          <p className="body-16-semibold text-gray-05 leading-relaxed whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;