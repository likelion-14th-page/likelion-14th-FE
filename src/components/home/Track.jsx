import PartCard from './PartCard';
import { TRACK_DATA } from '../../data/TrackData';

const Track = () => {
  return (
    <div>
      <div className="flex flex-col gap-[24px] bg-black ">
        <div className="flex flex-row justify-between">
          <div className="title-20-bold text-white">모집 트랙</div>
          <div className="group flex flex-row gap-[12px] body-18-semibold transition-colors text-gray-02 hover:text-gray-03 justify-center items-center cursor-pointer">
            모집 정보 확인하기{' '}
            <svg
              className="w-[9px] h-[16px] transition-colors text-gray-02 group-hover:text-gray-03"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 0.5L8.5 8L0.5 15.5"
                stroke="currentColor" // 이 부분이 핵심!
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[20px]">
          {TRACK_DATA.map((track) => (
            // track 객체 통째로 넘겨주기
            <PartCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Track;
