import React from "react";
import { css } from "@emotion/react";

const Pagination = (props: {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const numPages = Math.ceil(props.total / props.limit);
  return (
    <nav css={navStyle}>
      {Array(numPages)
        .fill(numPages)
        .map((_, i) => (
          <div
            css={pageBtn}
            key={i + 1}
            onClick={() => props.setPage(i + 1)}
            aria-current={props.page === i + 1 ? "page" : undefined}
          />
        ))}
    </nav>
  );
};
export default Pagination;

const navStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  height: 10px;
  margin: 32px auto;
`;

const pageBtn = css`
  width: 8px;
  height: 8px;
  background: #d9d9d9;
  cursor: pointer;

  :hover {
    background: #48484a;
  }

  :disabled {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #48484a;
  }
`;
