const ProjectCard = ({ image, category, title, subtitle }) => {
    return (
        <div className="flex w-[367px] p-4 flex-col items-start gap-[10px] rounded-2xl border border-[#2D2D2D] bg-[#1C1C1C]">
            {/* 이미지 */}
            <div
                className="h-[188.438px] self-stretch rounded-2xl bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${image})`,
                    aspectRatio: '335.00/188.44'
                }}
            />

            {/* 카테고리 */}
            <p className="detail-12-regular text-gray-02 text-right w-full">
                {category}
            </p>

            {/* 제목 */}
            <h3 className="body-18-semibold text-white">
                {title}
            </h3>

            {/* 서브타이틀 */}
            <p className="body-14-regular text-gray-02">
                {subtitle}
            </p>
        </div>
    );
};

export default ProjectCard;
