import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Pagination = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationItem = styled.li`
  list-style-type: none;
  font-size: 20px;
  padding: 2px 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  & + & {
    margin-left: 10px;
  }
  ${(props) =>
    props.$active &&
    `
    font-weight: bold;
    background: rgba(0,0,0,0.2);
    `}
`;

const range = (start, end) => {
  return [...Array(end).keys()].map((element) => element + start);
};

export default function Paginator({ currentPage, total, limit, onPageChange }) {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  return (
    <Pagination>
      {pages.map((page) => (
        <PaginationItem
          key={page}
          onClick={() => onPageChange(page)}
          $active={page === currentPage}
        >
          {page}
        </PaginationItem>
      ))}
    </Pagination>
  );
}

Paginator.propTypes = {
  currentPage: PropTypes.number,
  total: PropTypes.number,
  limit: PropTypes.number,
  onPageChange: PropTypes.func,
};
