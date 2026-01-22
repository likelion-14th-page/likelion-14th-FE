import Manager from '../components/home/Manager';

const Footer = () => {
  return (
    <div className="bg-bg-secondary px-[140px] pt-[92px] pb-[141px]">
      <div className="flex flex-row gap-[120px] justify-start items-start">
        <div className="flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[32px]">
            <div className="title-20-semibold text-white">인스타그램</div>
            <div className="py-[8px] px-[24px] body-18-semibold text-white bg-gray-07 rounded-full w-fit">
              @likelion_hongik
            </div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="title-20-semibold text-white">이메일</div>
            <div className="py-[8px] px-[24px] body-18-semibold text-white bg-gray-07 rounded-full w-fit">
              hongik.likelion@gmail.com
            </div>
          </div>
        </div>
        <Manager />
      </div>
    </div>
  );
};

export default Footer;
