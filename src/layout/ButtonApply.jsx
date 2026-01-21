import arrow from '../assets/icon/arrow.svg';

const ButtonApply = ({ type, className }) => {
  const long =
    ' pl-[32px] pr-[24px] py-[8px] text-[24px] font-gray-01 whitespace-nowrap';
  const short = 'w-[95px] px-[16px] py-[8px] text-[18px] whitespace-nowrap';

  const long_text = '홍익대학교 멋사 14기 지원하기';
  const short_text = '지원하기';

  return (
    <button
      className={
        'button_layout button_text flex justify-center items-center ' +
        (type === 'long' ? long : short) +
        ' ' +
        (className || '')
      }
    >
      {type === 'long' && (
        <div className="flex justify-center items-center">
          <span>{long_text}</span>
          <img
            src={arrow}
            alt="arrow"
            className="ml-[10px] w-[31px] flex-shrink-0"
          />
        </div>
      )}
      {type === 'short' && short_text}
    </button>
  );
};

export default ButtonApply;
