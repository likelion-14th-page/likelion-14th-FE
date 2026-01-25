import more from '../../assets/icon/right.svg';

const PartCard = ({ track }) => {
  return (
    <div
      className={`
        group p-[32px] rounded-[16px] cursor-pointer transition-all duration-200
        ${track.bgColor} 
        ${track.hoverBgColor} 
        ${track.pressedBgColor}
      `}
    >
      <div className="flex flex-col gap-[24px]">
        <div className="flex justify-between">
          <img alt="트랙 아이콘" src={track.imgSrc} className="w-[160px]" />
          <img
            alt="화살표"
            src={more}
            className={`
              w-[46px] h-[46px] pr-[18px] pl-[20px] py-[10px] rounded-full transition-all duration-200
              ${track.iconBgColor}
              ${track.hoverIconBgColor}
              ${track.pressedIconBgColor}
            `}
          />
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="title-20-bold text-[#080300]">{track.title}</div>
          <div className="body-16-medium text-gray-07 break-keep">
            {track.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartCard;
