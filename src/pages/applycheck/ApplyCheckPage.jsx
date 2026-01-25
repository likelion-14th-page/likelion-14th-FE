import { useState } from 'react';
import Navbar from '../../layout/Navbar';
import CheckForm from './CheckForm';
import PassResult from './PassResult';
import FailResult from './FailResult';
import bgCircle from '../../assets/apply/bg-circle.svg'; 

const ApplyCheckPage = () => {
  const [step, setStep] = useState('input');
  const [isError, setIsError] = useState(false);
  const [applicantName, setApplicantName] = useState('');

  const [passInfo, setPassInfo] = useState({
    place: '',
    date: '',
    time: ''
  });

  const handleCheck = (name, code) => {
    setIsError(false); 
    setApplicantName(name);
    setStep('loading');

    setTimeout(() => {
      if (name === '김멋사' && code === '1234') {
        setPassInfo({
          place: 'T701',
          date: '3월 2일 (토)',
          time: '15시 30분'
        });
        setStep('pass');
      } else if (name === '이멋사') {
        setStep('fail');
      } else {
        setIsError(true); 
        setStep('input');
      }
    }, 1500);
  };

  const handleReset = () => {
    setStep('input');
    setIsError(false);
    setApplicantName('');
  };

  return (
    // 1. 배경색(bg-bg-dark) 직접 지정 (Layout이 없으므로)
    <div className="relative w-full min-h-screen bg-bg-dark overflow-x-hidden">
      
      {/* 2. 네브바 직접 추가 (상단 고정) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* 3. 배경 이미지 (입력 단계일 때만 표시) */}
      {step === 'input' && (
        <img 
          src={bgCircle} 
          alt="" 
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 
                     w-[100vw] aspect-[1440/1024] 
                     max-w-none pointer-events-none opacity-50"
        />
      )}

      {/* 4. 메인 컨텐츠 영역 */}
      <div className={`relative z-10 w-full min-h-screen flex flex-col 
        ${(step === 'input' || step === 'loading') 
          ? 'justify-center items-center'   // 입력 화면: 중앙 정렬
          : 'pt-[120px] px-[120px]'         // 결과 화면: 네브바 아래로 띄우고 좌우 패딩
        }`}
      >
        
        {step === 'input' && (
          <CheckForm 
            onCheck={handleCheck} 
            isError={isError} 
            setIsError={setIsError}
          />
        )}
        
        {step === 'loading' && (
          // 로딩 화면도 중앙에 오도록 유지
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-gray-07 border-t-orange-04 rounded-full animate-spin"></div>
            <div className="text-white text-xl body-18-medium">두근두근 결과를 조회중입니다...🦁</div>
          </div>
        )}

        {/* 합격/불합격 컴포넌트는 이제 px-[150px] 안에서 렌더링됨 */}
        {step === 'pass' && <PassResult name={applicantName} info={passInfo} />}

        {step === 'fail' && <FailResult name={applicantName} onRetry={handleReset} />}
        
      </div>
    </div>
  );
};

export default ApplyCheckPage;