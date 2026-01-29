import { useState } from 'react';
import ProjectCard from '../components/archive/ProjectCard';
import PaginationButton from '../components/archive/PaginationButton';
// 해커톤
import hackathon_a1 from '../assets/archive/hackathon/a1.png';
import hackathon_b1 from '../assets/archive/hackathon/b1.png';
import hackathon_c1 from '../assets/archive/hackathon/c1.png';
import hackathon_d1 from '../assets/archive/hackathon/d1.jpg';
import hackathon_e1 from '../assets/archive/hackathon/e1.png';

// 데모데이
import demoday_a1 from '../assets/archive/demoday/a1.png';
import demoday_b1 from '../assets/archive/demoday/b1.png';
import demoday_c1 from '../assets/archive/demoday/c1.png';
import demoday_d1 from '../assets/archive/demoday/d1.png';
import demoday_e1 from '../assets/archive/demoday/e1.jpg';

// 아이디어톤
import ideathon_a1 from '../assets/archive/ideathon/a1.jpg';
import ideathon_b1 from '../assets/archive/ideathon/b1.jpg';
import ideathon_c1 from '../assets/archive/ideathon/c1.jpg';
import ideathon_d1 from '../assets/archive/ideathon/d1.jpg';
import ideathon_e1 from '../assets/archive/ideathon/e1.jpg';
import ideathon_f1 from '../assets/archive/ideathon/f1.jpg';

const Archive = () => {
    const [selectedFilter, setSelectedFilter] = useState('전체');
    const [currentPage, setCurrentPage] = useState(1);
    const filters = ['전체', '아이디어톤', '해커톤', '데모데이'];
    const ITEMS_PER_PAGE = 6;

    // 프로젝트 데이터
    const projects = [
        // 해커톤
        {
            image: hackathon_a1,
            category: '해커톤',
            title: '프로젝트 A',
            subtitle: '서비스'
        },
        {
            image: hackathon_b1,
            category: '해커톤',
            title: '프로젝트 B',
            subtitle: '서비스'
        },
        {
            image: hackathon_c1,
            category: '해커톤',
            title: '프로젝트 C',
            subtitle: '서비스'
        },
        {
            image: hackathon_d1,
            category: '해커톤',
            title: '프로젝트 D',
            subtitle: '서비스'
        },
        {
            image: hackathon_e1,
            category: '해커톤',
            title: '프로젝트 E',
            subtitle: '서비스'
        },
        // 데모데이
        {
            image: demoday_a1,
            category: '데모데이',
            title: '프로젝트 A',
            subtitle: '서비스'
        },
        {
            image: demoday_b1,
            category: '데모데이',
            title: '프로젝트 B',
            subtitle: '서비스'
        },
        {
            image: demoday_c1,
            category: '데모데이',
            title: '프로젝트 C',
            subtitle: '서비스'
        },
        {
            image: demoday_d1,
            category: '데모데이',
            title: '프로젝트 D',
            subtitle: '서비스'
        },
        {
            image: demoday_e1,
            category: '데모데이',
            title: '프로젝트 E',
            subtitle: '서비스'
        },
        // 아이디어톤
        {
            image: ideathon_a1,
            category: '아이디어톤',
            title: '프로젝트 A',
            subtitle: '서비스'
        },
        {
            image: ideathon_b1,
            category: '아이디어톤',
            title: '프로젝트 B',
            subtitle: '서비스'
        },
        {
            image: ideathon_c1,
            category: '아이디어톤',
            title: '프로젝트 C',
            subtitle: '서비스'
        },
        {
            image: ideathon_d1,
            category: '아이디어톤',
            title: '프로젝트 D',
            subtitle: '서비스'
        },
        {
            image: ideathon_e1,
            category: '아이디어톤',
            title: '프로젝트 E',
            subtitle: '서비스'
        },
        {
            image: ideathon_f1,
            category: '아이디어톤',
            title: '프로젝트 F',
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