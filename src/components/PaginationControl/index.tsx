import React, { useState, useCallback, HTMLAttributes, useEffect } from "react";

import { Container, PageItem, PageNumbersList } from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


interface IPaginationProps extends HTMLAttributes<HTMLDivElement> {
}

const PaginationControl: React.FC = () => {

  // const [pages, setPages] = useState<number[]>([]);
  // const numberOfPages = movieList.total_results / 5;
  // const [initialIndex, setInitialIndex] = useState<number>(0);
  // const [lastIndex, setLastIndex] = useState<number>(5);

  // useEffect(() => {
  //   const arr = [];
  //   for (let i = 0; i < numberOfPages && i < 30; i++) {
  //     arr.push(i + 1);
  //   }
  //   setPages(arr);
  //   console.log(pages.length);
  //   if (movieList) {
  //     if (movieList.results) {
  //       const newArr = movieList.results.slice(initialIndex, lastIndex);
  //       setRenderList(newArr);
  //     }
  //   }
  // }, [numberOfPages]);

  // useEffect(() => {
  //   console.log("page", currentPage);
  //   setInitialIndex(0 + (currentPage - 1) * 5);
  //   setLastIndex(5 + (currentPage - 1) * 5);

  //   console.log(initialIndex, lastIndex);
  // }, [currentPage]);

  // useEffect(() => {
  //   if (movieList) {
  //     if(movieList.results){

  //       const newArr = movieList.results.slice(initialIndex, lastIndex);
  
  //       console.log("tamanho do array", newArr.length);
  //       if (newArr.length < 5) {
  //         setPage(movieList.page + 1);
  //         return;
  //       }
  
  //       setRenderList(newArr);
  //     }
  //   }
  // }, [lastIndex, movieList]);

  return (
    <Container>
      <PageItem><FaChevronLeft size={13} /></PageItem>
      <PageNumbersList>
        <PageItem>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>4</PageItem>
        <PageItem>5</PageItem>
      </PageNumbersList>
      <PageItem><FaChevronRight size={13} /></PageItem>
    </Container>
  );
};

export default PaginationControl;
