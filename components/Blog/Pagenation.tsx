"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; 

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }: PaginationProps) => {
  const pageNumbers: number[] = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex items-center space-x-2">
      
        <li>
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400' : 'text-theme-dark'}`}
            disabled={currentPage === 1}
          >
            <FiChevronLeft size={20} />
          </button>
        </li>
     
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`p-2 w-8 h-8 rounded-sm border-2 flex items-center justify-center ${currentPage === number ? 'bg-theme-dark text-white border-theme-dark' : 'text-theme-dark border-gray-200'}`}
            >
              {number}
            </button>
          </li>
        ))}
      
        <li>
          <button
            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
            className={`p-2 rounded-md  ${currentPage === totalPages ? 'text-gray-400' : 'text-theme-dark'}`}
            disabled={currentPage === totalPages}
          >
            <FiChevronRight size={20} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;