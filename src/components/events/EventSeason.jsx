import EventCard from './EventCard';

export default function EventSeason({ season, monthsData, seasonColor, description }) {
  const filteredMonths = monthsData.filter(monthData => monthData.events.length > 0);

  return (
    <div className="flex gap-6 mb-16">
      
      {/* 1. 왼쪽: 계절 제목 */}
      <div className="flex-shrink-0 text-right pt-1">
        <h2 
          className="title-24-semibold break-keep"
          style={{ color: seasonColor }}
        >
          {season}
        </h2>
      </div>

      {/* 2. 중앙: 세로 줄 */}
      <div className="flex flex-col items-center relative">
        <div 
          className="w-1 flex-1 -mt-2"
          style={{ backgroundColor: seasonColor }}
        ></div>
        <div 
          className="w-4 h-4 rounded-full flex-shrink-0 z-10"
          style={{ backgroundColor: seasonColor }}
        ></div>
      </div>

      {/* 3. 오른쪽: 컨텐츠 영역 */}
      <div className="flex-1 pb-8"> 
        {description && (
          <div className="mb-8">
            {description}
          </div>
        )}

        <div className="space-y-12">
          {filteredMonths.map((monthData) => (
            <div key={monthData.month}>
              <h3 className="title-28-semibold text-white mb-4">{monthData.month}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {monthData.events.map((event, index) => (
                  <EventCard
                    key={index}
                    title={event.title}
                    date={event.date}
                    isDisabled={event.isDisabled}
                    colSpan={event.colSpan}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}