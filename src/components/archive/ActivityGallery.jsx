import { useState, useRef, useCallback, useEffect } from 'react';

// 활동 사진 import
import img1 from '../../assets/archive/activityimg/1.jpg';
import img2 from '../../assets/archive/activityimg/2.jpg';
import img3 from '../../assets/archive/activityimg/3.jpg';
import img4 from '../../assets/archive/activityimg/4.jpg';
import img5 from '../../assets/archive/activityimg/5.jpg';
import img6 from '../../assets/archive/activityimg/6.jpg';
import img7 from '../../assets/archive/activityimg/7.jpg';
import img8 from '../../assets/archive/activityimg/8.jpg';
import img9 from '../../assets/archive/activityimg/9.jpg';
import img10 from '../../assets/archive/activityimg/10.jpg';
import img11 from '../../assets/archive/activityimg/11.jpg';
import img12 from '../../assets/archive/activityimg/12.jpg';
import img13 from '../../assets/archive/activityimg/13.jpg';
import img14 from '../../assets/archive/activityimg/14.jpg';
import img15 from '../../assets/archive/activityimg/15.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

const ActivityGallery = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const containerRef = useRef(null);

    const totalImages = images.length;
    const imageWidth = 560;
    const gap = 20;
    const totalWidth = (imageWidth + gap) * totalImages - gap;

    // 슬라이더 위치 계산
    const handleSliderInteraction = useCallback((clientX) => {
        if (!sliderRef.current || !containerRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, x / rect.width));

        const containerWidth = containerRef.current.offsetWidth;
        const maxScroll = totalWidth - containerWidth;
        const newScroll = percentage * maxScroll;

        setScrollPosition(newScroll);
        containerRef.current.scrollLeft = newScroll;
    }, [totalWidth]);

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        if (containerRef.current && !isDragging) {
            setScrollPosition(containerRef.current.scrollLeft);
        }
    };

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

    // 전역 마우스 이벤트
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

    // 슬라이더 손잡이 위치 계산
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const maxScroll = Math.max(totalWidth - containerWidth, 1);
    const handlePosition = (scrollPosition / maxScroll) * 100;

    return (
        <div className="w-full">
            {/* 이미지 컨테이너 */}
            <div
                ref={containerRef}
                className="flex gap-[20px] overflow-x-auto scrollbar-hide"
                onScroll={handleScroll}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`활동사진 ${index + 1}`}
                        className="flex-shrink-0 rounded-2xl object-cover"
                        style={{ width: '500px', height: '360px' }}
                        draggable={false}
                    />
                ))}
                {/* 마지막 사진이 다 보이도록 여백 추가 */}
                <div className="flex-shrink-0 w-[180px]" />
            </div>

            {/* 슬라이더 바 */}
            <div className="mt-[50px]">
                <div
                    ref={sliderRef}
                    className="relative h-2 bg-[#2D2D2D] rounded-full cursor-pointer"
                    style={{ width: '1100px' }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* 채워진 부분 */}
                    <div
                        className="absolute top-0 left-0 h-full bg-[#DABE5A] rounded-full transition-all duration-75"
                        style={{ width: `${Math.min(handlePosition, 100)}%` }}
                    />

                    {/* 손잡이 */}
                    <div
                        className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#DABE5A] rounded-full shadow-lg transition-transform duration-75 ${
                            isDragging ? 'scale-125' : 'hover:scale-110'
                        }`}
                        style={{ left: `calc(${Math.min(handlePosition, 100)}% - 10px)` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ActivityGallery;
