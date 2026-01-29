import { useState, useEffect, useRef, useCallback } from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const images = project?.images || [];
    const totalImages = images.length;

    // 슬라이더 위치 계산
    const handleSliderInteraction = useCallback((clientX) => {
        if (!sliderRef.current || totalImages <= 1) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, x / rect.width));
        const newIndex = Math.round(percentage * (totalImages - 1));
        setCurrentIndex(newIndex);
    }, [totalImages]);

    // 모달 열릴 때 초기화
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // ESC 키로 닫기
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // 전역 마우스 이벤트 (드래그 중 슬라이더 밖으로 나가도 동작)
    useEffect(() => {
        if (!isDragging) return;

        const handleGlobalMouseMove = (e) => handleSliderInteraction(e.clientX);
        const handleGlobalMouseUp = () => setIsDragging(false);

        window.addEventListener('mousemove', handleGlobalMouseMove);
        window.addEventListener('mouseup', handleGlobalMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove);
            window.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, [isDragging, handleSliderInteraction]);

    // 렌더링 조건 체크 (hooks 이후에!)
    if (!isOpen || !project) return null;

    // 마우스 이벤트
    const handleMouseDown = (e) => {
        setIsDragging(true);
        handleSliderInteraction(e.clientX);
    };

    // 터치 이벤트
    const handleTouchStart = (e) => {
        setIsDragging(true);
        handleSliderInteraction(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        handleSliderInteraction(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    // 손잡이 위치 계산 (%)
    const handlePosition = totalImages > 1 ? (currentIndex / (totalImages - 1)) * 100 : 0;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-[900px] mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors cursor-pointer"
                >
                    ✕
                </button>

                {/* 이미지 영역 */}
                <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1C]">
                    <div className="relative aspect-video">
                        <img
                            src={images[currentIndex]}
                            alt={`${project.title} - ${currentIndex + 1}`}
                            className="w-full h-full object-contain"
                            draggable={false}
                        />
                    </div>
                </div>

                {/* 프로젝트 정보 */}
                <div className="mt-4 text-center">
                    <p className="text-gray-400 text-sm mb-1">{project.category}</p>
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                </div>

                {/* 슬라이더 바 */}
                {totalImages > 1 && (
                    <div className="mt-6 px-4">
                        {/* 이미지 번호 표시 */}
                        <p className="text-center text-gray-400 text-sm mb-3">
                            {currentIndex + 1} / {totalImages}
                        </p>

                        {/* 슬라이더 트랙 */}
                        <div
                            ref={sliderRef}
                            className="relative h-2 bg-[#2D2D2D] rounded-full cursor-pointer"
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {/* 채워진 부분 */}
                            <div
                                className="absolute top-0 left-0 h-full bg-[#DABE5A] rounded-full transition-all duration-75"
                                style={{ width: `${handlePosition}%` }}
                            />

                            {/* 손잡이 */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#DABE5A] rounded-full shadow-lg transition-transform duration-75 ${
                                    isDragging ? 'scale-125' : 'hover:scale-110'
                                }`}
                                style={{ left: `calc(${handlePosition}% - 10px)` }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;
