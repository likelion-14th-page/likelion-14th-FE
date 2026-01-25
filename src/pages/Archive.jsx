import { useState } from 'react';
import ProjectCard from '../components/archive/ProjectCard';

const Archive = () => {
    const [selectedFilter, setSelectedFilter] = useState('전체');
    const filters = ['전체', '아이디어톤', '해커톤', '데모데이'];

    return (
        <div className="mt-[5px]">
            {/* 필터바 */}
            <div className="flex justify-start items-center gap-[10px] mb-8">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`
                            cursor-pointer
                            flex justify-center items-center
                            px-4 py-3
                            body-18-regular
                            transition-all
                            ${selectedFilter === filter
                                ? 'text-white rounded-[8px] border-b border-[#DABE5A]'
                                : 'text-gray-02'
                            }
                        `}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* 프로젝트 제목 */}
            <h2 className="mt-[64px] title-20-bold text-white">
                프로젝트
            </h2>

            {/* 프로젝트 카드 예시 */}
            <div className="mt-8">
                <ProjectCard
                    image="https://via.placeholder.com/335x188"
                    category="데모데이"
                    title="또박이"
                    subtitle="서비스"
                />
            </div>
        </div>
    )
};

export default Archive;