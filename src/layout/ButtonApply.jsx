import arrow from '../assets/icon/arrow.svg';

const ButtonApply = ({ type, className, onClick }) => {
  const long_title =
    ' w-fit pl-[32px] pr-[24px] py-[16px] title-20-bold text-gray-01 border-orange-04';
  const short = 'w-fit px-[16px] py-[8px] body-18-semibold border-orange-02';
  const long_footer =
    'pl-[32px] pr-[24px] py-[16px] title-20-bold text-gray-01 border-orange-04';

  return (
    <button
      onClick={onClick}
      className={`
        flex justify-center items-center whitespace-nowrap rounded-full border-[1.5px] 
        bg-orange-01 hover:bg-orange-01-hover transition-colors duration-300 cursor-pointer
        ${type === 'long_title' && long_title}
        ${type === 'short' && short}
        ${type === 'long_footer' && long_footer}
        ${className || ''}
      `}
    >
      {type === 'long_title' || type === 'long_footer' ? (
        <div className="flex justify-center items-center">
          <span>홍익대학교 멋사 14기 지원하기</span>
          <img
            src={arrow}
            alt="arrow"
            className="ml-[10px] w-[31px] flex-shrink-0"
          />
        </div>
      ) : (
        '지원하기'
      )}
    </button>
  );
};

export default ButtonApply;
