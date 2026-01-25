import { useState } from 'react';
import ProjectCard from '../components/archive/ProjectCard';
import a1 from '../assets/archive/hackathon/a1.png';
import b1 from '../assets/archive/hackathon/b1.png';
import c1 from '../assets/archive/hackathon/c1.png';
import d1 from '../assets/archive/hackathon/d1.jpg';
import e1 from '../assets/archive/hackathon/e1.png';

const Archive = () => {
    const [selectedFilter, setSelectedFilter] = useState('전체');
    const filters = ['전체', '아이디어톤', '해커톤', '데모데이'];

    // 프로젝트 데이터
    const projects = [
        {
            image: a1,
            category: '해커톤',
            title: '프로젝트 A',
            subtitle: '서비스'
        },
        {
            image: b1,
            category: '해커톤',
            title: '프로젝트 B',
            subtitle: '서비스'
        },
        {
            image: c1,
            category: '해커톤',
            title: '프로젝트 C',
            subtitle: '서비스'
        },
        {
            image: d1,
            category: '해커톤',
            title: '프로젝트 D',
            subtitle: '서비스'
        },
        {
            image: e1,
            category: '해커톤',
            title: '프로젝트 E',
            subtitle: '서비스'
        }
    ];

    // 필터링된 프로젝트
    const filteredProjects = selectedFilter === '전체'
        ? projects
        : projects.filter(project => project.category === selectedFilter);

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

            {/* 프로젝트 카드 목록 */}
            <div className="mt-8 flex flex-wrap justify-start gap-x-[20px] gap-y-[24px]">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        category={project.category}
                        title={project.title}
                        subtitle={project.subtitle}
                    />
                ))}
            </div>
        </div>
    )
};

export default Archive;