// src/pages/ApplyCheck/ApplyCheckPage.jsx
import { useState } from 'react';
import CheckForm from './CheckForm';
import PassResult from './PassResult';
import FailResult from './FailResult';

const ApplyCheckPage = () => {
  // 상태: 'input'(입력중), 'loading'(로딩), 'pass'(합격), 'fail'(불합격)
  const [step, setStep] = useState('input');
  const [isError, setIsError] = useState(false);
  const [applicantName, setApplicantName] = useState('');

  // 조회 로직 (CheckForm에서 호출)
  const handleCheck = (name, code) => {
    setIsError(false); 
    setApplicantName(name);
    setStep('loading');

    // ⏳ API 연동 시뮬레이션
    setTimeout(() => {
      // TODO: 실제 서버 통신 로직으로 교체 필요
      if (name === '김멋사' && code === '1234') {
        setStep('pass');
      } else if (name === '이멋사') {
        setStep('fail');
      } else {
        setIsError(true); 
        setStep('input');
      }
    }, 1500);
  };

  // 다시 조회하기 (결과 화면에서 호출)
  const handleReset = () => {
    setStep('input');
    setIsError(false);
    setApplicantName('');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      {step === 'input' && (
        <CheckForm 
          onCheck={handleCheck} 
          isError={isError} 
          setIsError={setIsError}
        />
      )}
      
      {/* 2. 로딩 화면 */}
      {step === 'loading' && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-gray-07 border-t-orange-04 rounded-full animate-spin"></div>
          <div className="text-white text-xl body-18-medium">두근두근 결과를 조회중입니다...🦁</div>
        </div>
      )}

      {/* 3. 합격 화면 */}
      {step === 'pass' && <PassResult name={applicantName} />}

      {/* 4. 불합격 화면 */}
      {step === 'fail' && <FailResult name={applicantName} onRetry={handleReset} />}
    </div>
  );
};

export default ApplyCheckPage;