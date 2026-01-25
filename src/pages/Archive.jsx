import { useState } from 'react';
import ProjectCard from '../components/archive/ProjectCard';
import PaginationButton from '../components/archive/PaginationButton';
import a1 from '../assets/archive/hackathon/a1.png';
import b1 from '../assets/archive/hackathon/b1.png';
import c1 from '../assets/archive/hackathon/c1.png';
import d1 from '../assets/archive/hackathon/d1.jpg';
import e1 from '../assets/archive/hackathon/e1.png';

const Archive = () => {
    const [selectedFilter, setSelectedFilter] = useState('전체');
    const [currentPage, setCurrentPage] = useState(1);
    const filters = ['전체', '아이디어톤', '해커톤', '데모데이'];
    const ITEMS_PER_PAGE = 6;

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
        },
        {
            image: e1,
            category: '해커톤',
            title: '프로젝트 E',
            subtitle: '서비스'
        },
        {
            image: e1,
            category: 'ㄴ',
            title: '프로젝트 E',
            subtitle: '서비스'
        }
    ];

    // 필터링된 프로젝트
    const filteredProjects = selectedFilter === '전체'
        ? projects
        : projects.filter(project => project.category === selectedFilter);

    // 페이지네이션 계산
    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    // 필터 변경 시 페이지 초기화
    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        setCurrentPage(1);
    };

    // 페이지 변경
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="mt-[5px]">
            {/* 필터바 */}
            <div className="flex justify-start items-center gap-[10px] mb-8">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => handleFilterChange(filter)}
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

            <h2 className="mt-[64px] title-20-bold text-white">
                프로젝트
            </h2>

            {/* 프로젝트 카드 목록 - 컨테이너는 가운데 정렬, 카드는 왼쪽부터 */}
            <div className="mt-8 flex flex-wrap justify-start gap-x-[20px] gap-y-[24px] mx-auto">
                {currentProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        category={project.category}
                        title={project.title}
                        subtitle={project.subtitle}
                    />
                ))}
            </div>

            {/* 페이지네이션 */}
            {totalPages > 1 && (
                <div className="mt-[24px] flex justify-between">
                    <PaginationButton
                        direction="prev"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    />
                    <PaginationButton
                        direction="next"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    />
                </div>
            )}
        </div>
    )
};

export default Archive;