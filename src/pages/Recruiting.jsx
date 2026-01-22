import EventCard from '../components/events/EventCard';
import Track from '../components/home/Track';
import ButtonApply from '../layout/ButtonApply';

const Recruiting = () => {
  return (
    <div className="">
      <div alt="모집 대상" className="mb-[96px] flex flex-col gap-y-[24px]">
        <div className="title-20-bold text-white">모집 대상</div>
        <div className="body-18-regular text-gray-02">
          홍익대학교 재학생, 휴학생, 졸업유예생 (단, 반드시 1년간 활동이
          가능해야합니다.)
        </div>
      </div>
      <div
        alt="서류 제출 기간"
        className="mb-[96px] flex flex-col gap-y-[24px]"
      >
        <div className="title-20-bold text-white">서류 제출 기간</div>
        <div className="body-18-regular text-gray-02">
          2026년 2월 16일 - 2월 26일 23:59
        </div>
      </div>
      <div alt="모집 일정" className="mb-[104px] flex flex-col gap-y-[24px]">
        <div className="title-20-bold text-white">모집 일정</div>
        <div className="grid grid-cols-4 gap-[20px]">
          <EventCard title="서류 접수" date="2월 16일 - 2월 26일" />
          <EventCard title="서류 합격 발표" date="3월 1일" />
          <EventCard
            title="면접 진행"
            date="3월 3일 - 3월 5일"
            description="*면접은 대면으로 진행됩니다"
          />
          <EventCard
            title="최종 발표"
            date="3월 7일"
            description="*특이사항 추가"
          />
        </div>
      </div>
      <div alt="모집 트랙" className="mb-[104px]">
        <Track />
      </div>
      <div alt="필참 행사" className="mb-[144px] flex flex-col gap-y-[24px]">
        <div className="title-20-bold text-white">필참 행사</div>
        <div className="grid grid-cols-6 gap-[20px]">
          <EventCard title="OT" date="3월 10일" />
          <EventCard title="MT" date="3월 13일 - 14일" />
          <EventCard
            title="아이디어톤"
            isDisabled={true}
            date="추후 공지"
            isMandatory={true}
          />
          <EventCard
            title="애거돈"
            isDisabled={true}
            date="추후 공지"
            isMandatory={true}
          />
          <EventCard
            title="해커톤"
            isDisabled={true}
            date="추후 공지"
            isMandatory={true}
          />
          <EventCard
            title="데모데이"
            isDisabled={true}
            date="추후 공지"
            isMandatory={true}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ButtonApply type="long_footer" />
      </div>
    </div>
  );
};

export default Recruiting;
