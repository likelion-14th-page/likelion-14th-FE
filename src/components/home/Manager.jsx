import { MANAGER_DATA } from '../../data/ManagerData';

const MemberCard = ({ member }) => (
  <div className="flex flex-col items-center gap-[16px]">
    <div className="w-[100px] h-[100px] rounded-full bg-[#D9D9D9] overflow-hidden">
      <img
        src={member.imgSrc}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="text-center gap-[8px] flex flex-col">
      <div className="title-20-semibold text-gray-01">{member.name}</div>
      <div className="body-16-regular text-gray-04">{member.major}</div>
      {member.phone && (
        <div className="body-16-regular text-gray-04">{member.phone}</div>
      )}
    </div>
  </div>
);

// 2. 메인 섹션 컴포넌트
const Manager = () => {
  // 시안처럼 행 단위로 파트를 묶어줍니다.
  const rows = [
    ['회장', '프론트엔드'], // 첫 번째 줄 (1명 + 3명)
    ['기획/디자인', '백엔드'], // 두 번째 줄 (2명 + 3명)
  ];

  return (
    <div className="flex flex-col bg-bg-secondary">
      <div className="title-20-semibold text-white mb-[30px]">운영진</div>

      {/* 행(Row) 단위로 렌더링 */}
      {rows.map((row, idx) => (
        <div
          key={idx}
          className="grid grid-cols-[max-content_max-content] justify-between gap-x-[112px] mb-[64px]"
        >
          {row.map((part) => (
            <div key={part} className="flex flex-col gap-[24px]">
              {/* 파트 이름 표기 */}
              <div className="body-16-semibold bg-gray-02 rounded-full w-fit text-gray-07 px-[20px] py-[8px]">
                {part}
              </div>

              {/* 멤버 리스트: min-w-max를 추가하여 3명인 파트가 찌그러지지 않게 합니다. */}
              <div className="flex flex-row gap-[32px] min-w-max">
                {MANAGER_DATA.filter((m) => m.part === part).map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Manager;
