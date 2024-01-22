import { css } from "@emotion/react";
import React from "react";

type LayoutProp = {
  children: React.ReactNode;
  className?: string;
  style?: object;
};

const Layout = ({ children, className, style }: LayoutProp) => {
  return (
    <div css={container} className={className} style={style}>
      {children}
    </div>
  );
};

export default Layout;

const container = css`
  position: relative;
  width: 360px;
  min-height: 640px;
  overflow-y: auto;
  box-sizing: content-box;

  .goToLogin {
    .buttonWrapper {
      .btnCancel {
        height: 40px;
        font-size: 14px;
        line-height: 15px;
      }

      .btnConfirm {
        height: 40px;
        font-size: 14px;
        line-height: 15px;
      }
    }
  }

  .goToShare,
  .alreadyExist {
    img {
      margin: 8px;
    }

    p {
      margin-bottom: 20px;
    }

    .buttonWrapper {
      display: flex;
      justify-content: space-around;

      .btnCancel {
        margin-right: 0;
        height: 40px;
        background-color: white;
        color: #111;

        font-size: 14px;
        line-height: 15px;
        border: 2px solid #111;
      }

      .btnConfirm {
        height: 40px;
        background-color: #111;
        color: white;

        font-size: 14px;
        line-height: 15px;
      }
    }
  }
`;
