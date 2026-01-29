import { useState } from 'react';
import ProjectCard from '../components/archive/ProjectCard';
import PaginationButton from '../components/archive/PaginationButton';
import ProjectModal from '../components/archive/ProjectModal';
import ActivityGallery from '../components/archive/ActivityGallery';

// 해커톤 이미지
import hackathon_a1 from '../assets/archive/hackathon/a1.png';
import hackathon_a2 from '../assets/archive/hackathon/a2.png';
import hackathon_a3 from '../assets/archive/hackathon/a3.png';
import hackathon_a4 from '../assets/archive/hackathon/a4.png';
import hackathon_a5 from '../assets/archive/hackathon/a5.png';

import hackathon_b1 from '../assets/archive/hackathon/b1.png';
import hackathon_b2 from '../assets/archive/hackathon/b2.png';
import hackathon_b3 from '../assets/archive/hackathon/b3.png';
import hackathon_b4 from '../assets/archive/hackathon/b4.png';
import hackathon_b5 from '../assets/archive/hackathon/b5.png';
import hackathon_b6 from '../assets/archive/hackathon/b6.png';

import hackathon_c1 from '../assets/archive/hackathon/c1.png';
import hackathon_c2 from '../assets/archive/hackathon/c2.png';
import hackathon_c3 from '../assets/archive/hackathon/c3.png';
import hackathon_c4 from '../assets/archive/hackathon/c4.png';
import hackathon_c5 from '../assets/archive/hackathon/c5.png';
import hackathon_c6 from '../assets/archive/hackathon/c6.png';
import hackathon_c7 from '../assets/archive/hackathon/c7.png';
import hackathon_c8 from '../assets/archive/hackathon/c8.png';
import hackathon_c9 from '../assets/archive/hackathon/c9.png';
import hackathon_c10 from '../assets/archive/hackathon/c10.png';

import hackathon_d1 from '../assets/archive/hackathon/d1.jpg';
import hackathon_d2 from '../assets/archive/hackathon/d2.jpg';
import hackathon_d3 from '../assets/archive/hackathon/d3.jpg';
import hackathon_d4 from '../assets/archive/hackathon/d4.jpg';
import hackathon_d5 from '../assets/archive/hackathon/d5.jpg';
import hackathon_d6 from '../assets/archive/hackathon/d6.jpg';

import hackathon_e1 from '../assets/archive/hackathon/e1.png';
import hackathon_e2 from '../assets/archive/hackathon/e2.png';
import hackathon_e3 from '../assets/archive/hackathon/e3.png';
import hackathon_e4 from '../assets/archive/hackathon/e4.png';
import hackathon_e5 from '../assets/archive/hackathon/e5.png';
import hackathon_e6 from '../assets/archive/hackathon/e6.png';

// 데모데이 이미지
import demoday_a1 from '../assets/archive/demoday/a1.png';
import demoday_a2 from '../assets/archive/demoday/a2.png';
import demoday_a3 from '../assets/archive/demoday/a3.png';
import demoday_a4 from '../assets/archive/demoday/a4.png';
import demoday_a5 from '../assets/archive/demoday/a5.png';
import demoday_a6 from '../assets/archive/demoday/a6.png';
import demoday_a7 from '../assets/archive/demoday/a7.png';
import demoday_a8 from '../assets/archive/demoday/a8.png';

import demoday_b1 from '../assets/archive/demoday/b1.png';
import demoday_b2 from '../assets/archive/demoday/b2.png';
import demoday_b3 from '../assets/archive/demoday/b3.png';
import demoday_b4 from '../assets/archive/demoday/b4.png';
import demoday_b5 from '../assets/archive/demoday/b5.png';
import demoday_b6 from '../assets/archive/demoday/b6.png';
import demoday_b7 from '../assets/archive/demoday/b7.png';
import demoday_b8 from '../assets/archive/demoday/b8.png';
import demoday_b9 from '../assets/archive/demoday/b9.png';

import demoday_c1 from '../assets/archive/demoday/c1.png';
import demoday_c2 from '../assets/archive/demoday/c2.png';
import demoday_c3 from '../assets/archive/demoday/c3.png';
import demoday_c4 from '../assets/archive/demoday/c4.png';
import demoday_c5 from '../assets/archive/demoday/c5.png';
import demoday_c6 from '../assets/archive/demoday/c6.png';
import demoday_c7 from '../assets/archive/demoday/c7.png';
import demoday_c8 from '../assets/archive/demoday/c8.png';

import demoday_d1 from '../assets/archive/demoday/d1.png';
import demoday_d2 from '../assets/archive/demoday/d2.png';
import demoday_d3 from '../assets/archive/demoday/d3.png';
import demoday_d4 from '../assets/archive/demoday/d4.png';
import demoday_d5 from '../assets/archive/demoday/d5.png';
import demoday_d6 from '../assets/archive/demoday/d6.png';
import demoday_d7 from '../assets/archive/demoday/d7.png';
import demoday_d8 from '../assets/archive/demoday/d8.png';
import demoday_d9 from '../assets/archive/demoday/d9.png';
import demoday_d10 from '../assets/archive/demoday/d10.png';
import demoday_d11 from '../assets/archive/demoday/d11.png';
import demoday_d12 from '../assets/archive/demoday/d12.png';

import demoday_e1 from '../assets/archive/demoday/e1.jpg';
import demoday_e2 from '../assets/archive/demoday/e2.jpg';
import demoday_e3 from '../assets/archive/demoday/e3.jpg';
import demoday_e4 from '../assets/archive/demoday/e4.jpg';
import demoday_e5 from '../assets/archive/demoday/e5.jpg';
import demoday_e6 from '../assets/archive/demoday/e6.jpg';

// 아이디어톤 이미지
import ideathon_a1 from '../assets/archive/ideathon/a1.jpg';
import ideathon_a2 from '../assets/archive/ideathon/a2.jpg';
import ideathon_a3 from '../assets/archive/ideathon/a3.jpg';
import ideathon_a4 from '../assets/archive/ideathon/a4.jpg';
import ideathon_a5 from '../assets/archive/ideathon/a5.jpg';
import ideathon_a6 from '../assets/archive/ideathon/a6.jpg';
import ideathon_a7 from '../assets/archive/ideathon/a7.jpg';
import ideathon_a8 from '../assets/archive/ideathon/a8.jpg';
import ideathon_a9 from '../assets/archive/ideathon/a9.jpg';

import ideathon_b1 from '../assets/archive/ideathon/b1.jpg';
import ideathon_b2 from '../assets/archive/ideathon/b2.jpg';
import ideathon_b3 from '../assets/archive/ideathon/b3.jpg';
import ideathon_b4 from '../assets/archive/ideathon/b4.jpg';
import ideathon_b5 from '../assets/archive/ideathon/b5.jpg';
import ideathon_b6 from '../assets/archive/ideathon/b6.jpg';
import ideathon_b7 from '../assets/archive/ideathon/b7.jpg';
import ideathon_b8 from '../assets/archive/ideathon/b8.jpg';

import ideathon_c1 from '../assets/archive/ideathon/c1.jpg';
import ideathon_c2 from '../assets/archive/ideathon/c2.jpg';
import ideathon_c3 from '../assets/archive/ideathon/c3.jpg';
import ideathon_c4 from '../assets/archive/ideathon/c4.jpg';
import ideathon_c5 from '../assets/archive/ideathon/c5.jpg';
import ideathon_c6 from '../assets/archive/ideathon/c6.jpg';

import ideathon_d1 from '../assets/archive/ideathon/d1.jpg';
import ideathon_d2 from '../assets/archive/ideathon/d2.jpg';
import ideathon_d3 from '../assets/archive/ideathon/d3.jpg';
import ideathon_d4 from '../assets/archive/ideathon/d4.jpg';
import ideathon_d5 from '../assets/archive/ideathon/d5.jpg';
import ideathon_d6 from '../assets/archive/ideathon/d6.jpg';
import ideathon_d7 from '../assets/archive/ideathon/d7.jpg';
import ideathon_d8 from '../assets/archive/ideathon/d8.jpg';
import ideathon_d9 from '../assets/archive/ideathon/d9.jpg';

import ideathon_e1 from '../assets/archive/ideathon/e1.jpg';
import ideathon_e2 from '../assets/archive/ideathon/e2.jpg';
import ideathon_e3 from '../assets/archive/ideathon/e3.jpg';
import ideathon_e4 from '../assets/archive/ideathon/e4.jpg';
import ideathon_e5 from '../assets/archive/ideathon/e5.jpg';
import ideathon_e6 from '../assets/archive/ideathon/e6.jpg';
import ideathon_e7 from '../assets/archive/ideathon/e7.jpg';
import ideathon_e8 from '../assets/archive/ideathon/e8.jpg';
import ideathon_e9 from '../assets/archive/ideathon/e9.jpg';

import ideathon_f1 from '../assets/archive/ideathon/f1.jpg';
import ideathon_f2 from '../assets/archive/ideathon/f2.jpg';
import ideathon_f3 from '../assets/archive/ideathon/f3.jpg';
import ideathon_f4 from '../assets/archive/ideathon/f4.jpg';
import ideathon_f5 from '../assets/archive/ideathon/f5.jpg';
import ideathon_f6 from '../assets/archive/ideathon/f6.jpg';
import ideathon_f7 from '../assets/archive/ideathon/f7.jpg';
import ideathon_f8 from '../assets/archive/ideathon/f8.jpg';
import ideathon_f9 from '../assets/archive/ideathon/f9.jpg';

const Archive = () => {
    const [selectedFilter, setSelectedFilter] = useState('전체');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const filters = ['전체', '아이디어톤', '해커톤', '데모데이'];
    const ITEMS_PER_PAGE = 6;

    // 프로젝트 데이터
    const projects = [
        // 해커톤
        {
            image: hackathon_a1,
            images: [hackathon_a1, hackathon_a2, hackathon_a3, hackathon_a4, hackathon_a5],
            category: '해커톤',
            title: '프로젝트 A',
            subtitle: '서비스'
        },
        {
            image: hackathon_b1,
            images: [hackathon_b1, hackathon_b2, hackathon_b3, hackathon_b4, hackathon_b5, hackathon_b6],
            category: '해커톤',
            title: '프로젝트 B',
            subtitle: '서비스'
        },
        {
            image: hackathon_c1,
            images: [hackathon_c1, hackathon_c2, hackathon_c3, hackathon_c4, hackathon_c5, hackathon_c6, hackathon_c7, hackathon_c8, hackathon_c9, hackathon_c10],
            category: '해커톤',
            title: '프로젝트 C',
            subtitle: '서비스'
        },
        {
            image: hackathon_d1,
            images: [hackathon_d1, hackathon_d2, hackathon_d3, hackathon_d4, hackathon_d5, hackathon_d6],
            category: '해커톤',
            title: '프로젝트 D',
            subtitle: '서비스'
        },
        {
            image: hackathon_e1,
            images: [hackathon_e1, hackathon_e2, hackathon_e3, hackathon_e4, hackathon_e5, hackathon_e6],
            category: '해커톤',
            title: '프로젝트 E',
            subtitle: '서비스'
        },
        // 데모데이
        {
            image: demoday_a1,
            images: [demoday_a1, demoday_a2, demoday_a3, demoday_a4, demoday_a5, demoday_a6, demoday_a7, demoday_a8],
            category: '데모데이',
            title: '프로젝트 A',
            subtitle: '서비스'
        },
        {
            image: demoday_b1,
            images: [demoday_b1, demoday_b2, demoday_b3, demoday_b4, demoday_b5, demoday_b6, demoday_b7, demoday_b8, demoday_b9],
            category: '데모데이',
            title: '프로젝트 B',
            subtitle: '서비스'
        },
        {
            image: demoday_c1,
            images: [demoday_c1, demoday_c2, demoday_c3, demoday_c4, demoday_c5, demoday_c6, demoday_c7, demoday_c8],
            category: '데모데이',
            title: '프로젝트 C',
            subtitle: '서비스'
        },
        {
            image: demoday_d1,
            images: [demoday_d1, demoday_d2, demoday_d3, demoday_d4, demoday_d5, demoday_d6, demoday_d7, demoday_d8, demoday_d9, demoday_d10, demoday_d11, demoday_d12],
            category: '데모데이',
            title: '프로젝트 D',
            subtitle: '서비스'
        },
        {
            image: demoday_e1,
            images: [demoday_e1, demoday_e2, demoday_e3, demoday_e4, demoday_e5, demoday_e6],
            category: '데모데이',
            title: '프로젝트 E',
            subtitle: '서비스'
        },
        // 아이디어톤
        {
            image: ideathon_a1,
            images: [ideathon_a1, ideathon_a2, ideathon_a3, ideathon_a4, ideathon_a5, ideathon_a6, ideathon_a7, ideathon_a8, ideathon_a9],
            category: '아이디어톤',
            title: '프로젝트 A',
            subtitle: '서비스'
        },
        {
            image: ideathon_b1,
            images: [ideathon_b1, ideathon_b2, ideathon_b3, ideathon_b4, ideathon_b5, ideathon_b6, ideathon_b7, ideathon_b8],
            category: '아이디어톤',
            title: '프로젝트 B',
            subtitle: '서비스'
        },
        {
            image: ideathon_c1,
            images: [ideathon_c1, ideathon_c2, ideathon_c3, ideathon_c4, ideathon_c5, ideathon_c6],
            category: '아이디어톤',
            title: '프로젝트 C',
            subtitle: '서비스'
        },
        {
            image: ideathon_d1,
            images: [ideathon_d1, ideathon_d2, ideathon_d3, ideathon_d4, ideathon_d5, ideathon_d6, ideathon_d7, ideathon_d8, ideathon_d9],
            category: '아이디어톤',
            title: '프로젝트 D',
            subtitle: '서비스'
        },
        {
            image: ideathon_e1,
            images: [ideathon_e1, ideathon_e2, ideathon_e3, ideathon_e4, ideathon_e5, ideathon_e6, ideathon_e7, ideathon_e8, ideathon_e9],
            category: '아이디어톤',
            title: '프로젝트 E',
            subtitle: '서비스'
        },
        {
            image: ideathon_f1,
            images: [ideathon_f1, ideathon_f2, ideathon_f3, ideathon_f4, ideathon_f5, ideathon_f6, ideathon_f7, ideathon_f8, ideathon_f9],
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

    // 프로젝트 카드 클릭
    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    // 모달 닫기
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
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

            {/* 프로젝트 카드 목록 */}
            <div className="mt-8 flex flex-wrap justify-start gap-x-[20px] gap-y-[24px] mx-auto">
                {currentProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        category={project.category}
                        title={project.title}
                        subtitle={project.subtitle}
                        onClick={() => handleProjectClick(project)}
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

            {/* 프로젝트 모달 */}
            <ProjectModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                project={selectedProject}
            />

            <h2 className="mt-[150px] title-20-bold text-white">
                활동사진
            </h2>

            {/* 활동사진 갤러리 - 오른쪽 끝까지 */}
            <div className="mt-8 overflow-visible" style={{ marginRight: 'calc(-1 * (100vw - 100%))' }}>
                <ActivityGallery />
            </div>
        </div>
    )
};

export default Archive;
