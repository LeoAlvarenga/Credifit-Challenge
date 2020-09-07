import React, { useState, useCallback, HTMLAttributes, useEffect } from "react";

import { Container, PageItem, PageNumbersList } from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useJsonData } from "../../hooks/useJsonData";

interface IPaginationProps extends HTMLAttributes<HTMLDivElement> {}

const PaginationControl: React.FC = () => {
  const [pages, setPages] = useState<number[]>([]);
  // const numberOfPages = movieList.total_results / 5;
  const [initialIndex, setInitialIndex] = useState<number>(0);
  const [lastIndex, setLastIndex] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { users, setRenderUsers } = useJsonData();

  useEffect(() => {
    const numberOfPages = users.length / 10;
    const arr = [];
    for (let i = 0; i < numberOfPages; i++) {
      arr.push(i + 1);
    }
    setPages(arr);
    console.log(pages.length);
    if (users) {
      const newArr = users.slice(initialIndex, lastIndex);
      setRenderUsers(newArr);
    }
  }, [users]);

  useEffect(() => {
    console.log("page", currentPage);
    setInitialIndex(0 + (currentPage - 1) * 10);
    setLastIndex(10 + (currentPage - 1) * 10);

    console.log(initialIndex, lastIndex);
  }, [currentPage]);

  useEffect(() => {
    if (users) {
      const newArr = users.slice(initialIndex, lastIndex);

      setRenderUsers(newArr);
    }
  }, [lastIndex]);

  return (
    <Container>
      <PageItem>
        <FaChevronLeft size={13} />
      </PageItem>
      <PageNumbersList>
        {pages &&
          pages.map((page) => (
            <PageItem key={page} onClick={() => setCurrentPage(page)}>
              {page.toString()}
            </PageItem>
          ))}
      </PageNumbersList>
      <PageItem>
        <FaChevronRight size={13} />
      </PageItem>
    </Container>
  );
};

export default PaginationControl;
