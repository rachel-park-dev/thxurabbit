import { css } from "@emotion/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { ReactHTMLElement } from "react";
import Button from "../Button";

type SectionProps = {
  sectionImage: string;
  sectionDesc: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionBtnText: string;
  sectionClick?: () => void;
};
const Section = ({
  sectionImage,
  sectionDesc,
  sectionTitle,
  sectionSubtitle,
  sectionBtnText,
  sectionClick,
}: SectionProps) => {
  return (
    <div css={sectionContainer}>
      <img src={sectionImage} alt={sectionDesc} css={sectionImageStyle} />
      <p css={sectionTitleStyle}>
        <span>{sectionTitle}</span>
        <br />
        <span>{sectionSubtitle}</span>
      </p>
      <Button
        width="91%"
        color="#111111"
        onClick={sectionClick}
        css={sectionBtnStyle}
      >
        {sectionBtnText}
      </Button>
    </div>
  );
};

export default Section;

const sectionContainer = css`
  width: 328px;
  margin: 0 auto 32px;
`;

const sectionImageStyle = css`
  display: block;
  margin: 0 auto 8px;
`;
const sectionTitleStyle = css`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  text-align: center;
  color: #111111;
`;

const sectionBtnStyle = css`
  margin: 0 auto;
  height: 40px;
  color: white;

  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
`;
