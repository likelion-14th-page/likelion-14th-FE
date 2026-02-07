import { MANAGER_DATA } from '../../data/ManagerData';

const MemberCard = ({ member }) => (
  <div className="flex flex-col md:flex-row md:items-start lg:items-center gap-[12px] md:gap-[24px]">
    {/* 1. 모바일 전용 헤더 */}
    <div className="md:hidden flex flex-col gap-[8px]">
      <div className="flex flex-row items-center gap-[8px] mb-[8px]">
        <div className="w-[24px] h-[24px] rounded-full bg-[#D9D9D9] overflow-hidden shrink-0">
          <img
            src={member.imgSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="title-20-semibold text-gray-01">{member.name}</div>
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="text-[14px] text-gray-04 leading-tight">
          {member.major}
        </div>
        {member.phone && (
          <div className="text-[14px] text-gray-04">{member.phone}</div>
        )}
      </div>
    </div>

    {/* 2. MD 구간 (태블릿): 사진과 텍스트가 가로로 배치되며 중앙 정렬 */}
    <div className="hidden md:block lg:hidden w-full">
      <div className="flex flex-row items-center gap-x-[16px]">
        {/* 이미지 박스: shrink-0을 주어 찌그러짐 방지 */}
        <div className="w-[100px] h-[100px] rounded-full bg-[#D9D9D9] overflow-hidden shrink-0">
          <img
            src={member.imgSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* 텍스트 영역: start 정렬 유지 */}
        <div className="flex flex-col justify-center">
          <div className="title-20-semibold text-gray-01 mb-1">
            {member.name}
          </div>
          <div className="body-16-regular text-gray-04 leading-tight">
            {member.major}
          </div>
          {member.phone && (
            <div className="body-16-regular text-gray-04 mt-1">
              {member.phone}
            </div>
          )}
        </div>
      </div>
    </div>

    {/* 3. LG 구간 (데스크탑): 수직 배치 및 완전 중앙 정렬 */}
    <div className="hidden lg:flex flex-col items-center gap-y-[16px] w-full">
      <div className="w-[114px] h-[114px] rounded-full bg-[#D9D9D9] overflow-hidden shrink-0">
        <img
          src={member.imgSrc}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-y-[8px] text-center">
        <div className="title-20-semibold text-gray-01">{member.name}</div>
        <div className="body-16-regular text-gray-04 leading-tight whitespace-nowrap">
          {member.major}
        </div>
      </div>
    </div>
  </div>
);

// 2. 메인 섹션 컴포넌트
const Manager = () => {
  const parts = ['회장', '기획/디자인', '프론트엔드', '백엔드'];

  return (
    <div className="flex flex-col bg-bg-secondary w-full">
      <div className="title-20-bold text-white mb-[30px]">운영진</div>

      {/* ✅ 전체 스크롤 컨테이너 */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        {/* ✅ 350px 미만에서 텍스트가 밀리지 않도록 최소 너비(min-w) 설정 */}
        <div className="min-w-[320px] md:min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[64px] gap-x-[40px] lg:gap-x-[80px]">
            {parts.map((part) => (
              <div key={part} className="flex flex-col gap-[24px]">
                {/* 파트 태그 */}
                <div className="body-16-semibold lg:bg-gray-02 bg-transparent border-[1.5px] border-gray-02 text-gray-02 rounded-full w-fit lg:text-gray-07 px-[20px] py-[8px] shrink-0">
                  {part}
                </div>

                {/* 멤버 카드 리스트 */}
                <div className="flex flex-row gap-[12px] md:gap-[32px]">
                  {MANAGER_DATA.filter((m) => m.part === part).map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
