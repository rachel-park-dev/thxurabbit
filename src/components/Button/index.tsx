import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

type ButtonProps = {
  css?: SerializedStyles;
  children?: React.ReactNode;
  width: string;
  color: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
};

const Button = ({ children, width, color, onClick, className, disabled }: ButtonProps) => {
  return (
    <button css={buttonStyle(width, color)} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

const buttonStyle = (width: string, color: string) => css`
  display: block;
  width: ${width};
  height: 56px;
  background: ${color};
  margin: 0 auto;

  color: #7a7a7a;
  font-family: 'Galmuri9';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.01em;

  border: none;
  cursor: pointer;

  &.active,
  :hover {
    background: #111;
    color: #fff;
  }
`;
