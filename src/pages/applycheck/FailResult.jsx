// src/pages/ApplyCheck/FailResult.jsx

const FailResult = ({ name, onRetry }) => {
  return (
    <div className="text-center px-4">
      <div className="bg-[#1C1C1C] p-8 rounded-2xl border border-[#515154] max-w-[500px] mx-auto">
        <h2 className="text-2xl text-white font-bold mb-4">
          {name}님, 지원해주셔서 감사합니다.
        </h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          아쉽게도 이번 멋쟁이사자처럼 14기 모집에는<br/>
          함께하지 못하게 되었습니다.<br/>
          <br/>
          뛰어난 역량을 가지셨음에도 불구하고<br/>
          제한된 인원으로 인해 모시지 못한 점 양해 부탁드립니다.
        </p>
        
        <button 
          onClick={onRetry}
          className="w-full py-4 rounded-full bg-[#515154] text-white font-bold hover:bg-[#3F3F42] transition-colors"
        >
          다시 조회하기
        </button>
      </div>
    </div>
  );
};

export default FailResult;