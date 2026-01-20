export default function EventCard({ title, date, isDisabled = false, colSpan = 1 }) {
  const hasDateNumber = /\d/.test(date);
  const showBorder = !isDisabled && hasDateNumber;

  // colSpan 값에 따른 Tailwind 클래스 매핑
  const getColSpanClass = (span) => {
    switch (span) {
      case 4:
        // 모바일(1) -> 태블릿(2) -> 작은PC(3) -> 큰PC(4) 순으로 그리드가 커지므로
        // 각 브레이크포인트에서 최대 너비를 차지하도록 설정
        return 'col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4';
      case 3:
        // 4열 그리드일 때 3칸 차지
        return 'lg:col-span-3';
      case 2:
        return 'sm:col-span-2';
      default:
        return 'col-span-1';
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${getColSpanClass(colSpan)}`}>
      {/* 제목 부분 */}
      <div
        className={`
          px-6 py-4 text-center flex items-center justify-center h-20 rounded-lg transition-all duration-200
          ${
            isDisabled
              ? 'bg-gray-04 text-black opacity-60'
              : 'bg-bright-orange-02 text-bg-dark hover:shadow-lg'
          }
        `}
      >
        <div className="body-18-bold">{title}</div>
      </div>

      {/* 날짜 부분 */}
      <div
        className={`
          px-6 py-4 text-center flex items-center justify-center h-20 rounded-lg transition-all duration-200
          ${
            isDisabled
              ? 'text-gray-04 opacity-60'
              : 'text-gray-01 hover:shadow-lg'
          }
          ${
            showBorder ? 'border-2 border-gray-01' : ''
          }
        `}
      >
        <div className={hasDateNumber ? "body-18-bold" : "body-18-regular"}>
          {date}
        </div>
      </div>
    </div>
  );
}