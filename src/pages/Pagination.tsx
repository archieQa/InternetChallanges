// Pagination.tsx
import React, { useState, useEffect } from 'react';
import mockApi, { Item } from './apis/mockApi';

const PAGE_SIZE = 13;

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await mockApi(currentPage, PAGE_SIZE);
      setData(result);
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const calculateTotalPages = async () => {
      const totalCount = 50;
      const pages = Math.ceil(totalCount / PAGE_SIZE);
      setTotalPages(pages);
    };

    calculateTotalPages();
  }, []);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pagination Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-2 px-3 py-1 border ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
