/** @jsxImportSource @emotion/react */
import React, { ReactComponentElement, useState } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import Button from '@/components/Button';
import popupRabbit from '@/assets/images/popupRabbit.png';

type PopupProps = {
  css?: SerializedStyles;
  children?: React.ReactNode;
  width: string;
  onClick?: () => void;
  className?: string;
  buttonCancel?: string;
  buttonConfirm?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const Popup = ({
  children,
  width,
  onClick,
  className,
  buttonCancel,
  buttonConfirm,
  onCancel,
  onConfirm,
}: PopupProps) => {
  return (
    <>
      <div css={popupStyle} onClick={onClick} className={className}>
        <img css={popupRabbitImg} src={popupRabbit} alt='popupImage' />
        <p css={popupText}>{children}</p>
        <div css={popupButton} className='buttonWrapper'>
          {buttonCancel && (
            <Button width={width} color='#111111' onClick={onCancel} className='btnCancel'>
              {buttonCancel}
            </Button>
          )}
          {buttonConfirm && (
            <Button width={width} color='#ffffff' onClick={onConfirm} className='btnConfirm'>
              {buttonConfirm}
            </Button>
          )}
        </div>
      </div>
      <div css={popupBg} />
    </>
  );
};

export default Popup;

const popupStyle = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 328px;

  background-color: white;
  z-index: 10;
`;

const popupText = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 32px;
`;
const popupRabbitImg = css`
  display: block;
  width: 296px;
  margin: 0 auto 8px;
`;

const popupButton = css`
  .btnCancel {
    margin: 16px;
    color: white;
    cursor: pointer;
  }
  .btnConfirm {
    margin: 16px;
    color: #111;
    border: 2px solid #111;
    cursor: pointer;

    :hover {
      color: white;
    }
  }
`;

const popupBg = css`
  position: absolute;
  top: 0;
  width: 360px;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;
