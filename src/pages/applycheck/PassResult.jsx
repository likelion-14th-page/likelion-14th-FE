import { useNavigate } from 'react-router-dom';

const PassResult = ({ name }) => {
  const navigate = useNavigate();
  const firstName = name.length >= 3 ? name.slice(1) : name;

  return (
    <div className="w-full flex flex-col items-start px-8">
      
      {/* Part 1. 상단 타이틀 */}
      <div className="mb-[48px]">
        <div className="flex items-end mb-2">
          {/* 이름 */}
          <span className="title-32-semibold text-white mr-1 pr-2">
            {name}
          </span>
          {/* 님 */}
          <span className="title-20-bold text-white">
             님
          </span>
        </div>
        <h1 className="title-32-semibold text-white">
          1차 서류 전형 합격입니다
        </h1>
      </div>

      {/* Part 2. 합격 메시지 */}
      <div className="body-16-regular text-gray-03 mb-8 leading-relaxed whitespace-pre-wrap">
        먼저 귀한 시간 할애하여 멋쟁이 사자처럼 14기 선발에 지원해주셔서 매우 감사드립니다.<br/><br/>
        홍익대 멋사 14기 1차 서류 합격을 진심으로 축하드리며<br/>
        <span >{firstName}</span> 님의 빛나는 가능성을 직접 마주할 시간을 설레는 마음으로 기다리겠습니다.<br/>
        <br/>
        원활한 진행을 위해 
        <span className='body-16-semibold text-[#DABE5A]'> 면접 날짜, 시간, 그리고 장소를 꼼꼼하게 확인 및 숙지</span>
         부탁드리며<br/>
        소중한 시간 내어 주시는 만큼 저희도 최선을 다해 준비하겠습니다.
      </div>

      {/* Part 3. 면접 정보 카드 */}
      <div className="w-full max-w-[280px] bg-bg-secondary rounded-[8px] p-4 flex flex-col gap-4 mb-[60px]">
        
        {/* 첫 번째 줄: 면접 장소 */}
        <div className="flex items-start gap-[24px]">
          {/* 라벨 너비 고정 (min-w)을 줘서 세로줄을 맞춤 */}
          <span className="body-16-semibold text-gray-03">
            면접 장소 
          </span>
          <span className="body-18-semibold text-white">
            Q111
          </span>
        </div>

        {/* 두 번째 줄: 면접 일자 */}
        <div className="flex items-start gap-[24px]">
          {/* 라벨 너비 고정 (min-w)을 줘서 세로줄을 맞춤 */}
          <span className="body-16-semibold text-gray-03">
            면접 일자 
          </span>
          <span className="body-18-semibold text-white">
            2월 nn일 (뭔요일)
          </span>
        </div>

        {/* 세 번째 줄: 면접 시간 */}
        <div className="flex items-start gap-[24px]">
          <span className="body-16-semibold text-gray-03">
            면접 시간
          </span>
          <span className="body-18-semibold text-white">
            00시 00분
          </span>
        </div>
      </div>

      {/* 하단 (추가 문의 & 홈 버튼) */}
      <div className="w-full flex justify-between items-end">
        
        {/* 왼쪽: 추가 문의 영역 */}
        <div className="flex flex-col gap-2">
          <span className="body-16-semibold text-gray-02 ml-1">추가 문의</span>
          
          <div className="flex gap-2">
            {/* 전화번호 칩 */}
            <div className="flex px-[24px] py-[8px] justify-center items-center gap-[10px] rounded-[100px]  bg-gray-07 text-gray-01 body-14-semibold">
              010-3120-2936
            </div>
            
            {/* 이메일 칩 */}
            <div className="flex px-[24px] py-[8px] justify-center items-center gap-[10px] rounded-[100px]  bg-gray-07 text-gray-01 body-14-semibold">
              hongik.likelion@gmail.com
            </div>
          </div>
        </div>

        {/* 오른쪽: 홈으로 이동 버튼 (ApplyClosed와 동일 스타일) */}
        <button
          onClick={() => navigate('/')}
          className="flex justify-center items-center gap-[10px] px-[24px] py-[16px] rounded-[100px] border border-[#BA4E23] bg-[#6C2D14] text-white font-semibold hover:brightness-110 transition-all"
        >
          홈으로 이동
        </button>
      </div>
    </div>
  );
};

export default PassResult;