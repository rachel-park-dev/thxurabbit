/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import Button from '@/components/Button';

type SharePopupProps = {
  width: string;
  css?: SerializedStyles;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  onCancel?: () => void;
};

const SharePopup = ({ width, children, onClick, className, onCancel }: SharePopupProps) => {
  const [clicked, setClicked] = useState(false);

  const handleCopyURL = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setClicked(true);
      })
      .catch(() => {
        alert('복사를 다시 시도해주세요.');
      });
  };

  return (
    <>
      <div css={popupStyle} onClick={onClick} className={className}>
        <p css={popupText}>더 많은 사람들에게 감사인사 받기</p>
        <div css={urlGroup}>
          <div css={urlAppend}>URL</div>
          <p css={urlText} onClick={() => handleCopyURL(String(children))}>
            <span>{children}</span>
          </p>
        </div>
        {clicked && <div css={copyComment}>복사되었습니다</div>}
        <div css={popupButton} className='buttonWrapper'>
          <Button width={width} color='#111111' onClick={onCancel} className='btnCancel'>
            닫기
          </Button>
        </div>
      </div>
      <div css={popupBg} />
    </>
  );
};

export default SharePopup;

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
  line-height: 24px;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const popupButton = css`
  .btnCancel {
    color: white;
    margin: 16px;
    height: 40px;
    cursor: pointer;
  }
`;

const popupBg = css`
  position: absolute;
  top: 8px;
  width: 360px;
  height: calc(100% - 8px);
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const urlGroup = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const urlAppend = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: black;
  width: 56px;
  height: 44px;
`;

const urlText = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  border: 2px solid #111;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;

  span {
    width: 95%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const copyComment = css`
  text-align: center;
  color: #7a7a7a;
  padding-top: 10px;
`;
