import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 5,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex w-full flex-col items-center justify-center mt-6 py-2.5 max-md:max-w-full">
      <div className="flex items-center">
        <div
          className="self-stretch flex w-6 my-auto p-1.5 rounded-sm cursor-pointer"
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/6990e26bf1b525d9c2f7e9c0a2f54b5d503fe171982ada1d7ebb7a471e4fd820?placeholderIfAbsent=true"
            alt="Previous page"
            className="aspect-[1] object-contain w-3"
          />
        </div>

        {pages.map((page) => (
          <div
            key={page}
            className={`self-stretch overflow-hidden text-sm ${
              currentPage === page
                ? "border border-[#1890FF] text-[#1890FF] font-medium text-center leading-loose w-6 h-6 px-2 rounded-sm border-solid"
                : "text-black font-normal text-center leading-6 px-2 py-px rounded-sm"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </div>
        ))}

        <div
          className="self-stretch flex w-6 my-auto p-1.5 rounded-sm cursor-pointer"
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/755c430c06f4ff3914692fe640bb1afaa76d927161e5df758d7039ff333a5cbf?placeholderIfAbsent=true"
            alt="Next page"
            className="aspect-[1] object-contain w-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
