export default function EventCard({ title, date, isDisabled = false }) {
  // 날짜에 숫자가 포함되어 있는지 확인 (예: '3월 10일' -> true, '추후 공지' -> false)
  const hasDateNumber = /\d/.test(date);

  // 보더를 보여줄 조건: 비활성화 상태가 아니고(AND) 날짜 형식(숫자 포함)일 때
  const showBorder = !isDisabled && hasDateNumber;

  return (
    <div className="flex flex-col gap-2">
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
        <div className={hasDateNumber ? "body-18-bold" : "body-18-regular text-gray-04 opacity-60"}>
          {date}
        </div>
      </div>
    </div>
  );
}