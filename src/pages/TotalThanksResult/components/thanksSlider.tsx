import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PostPropsType } from "..";
import MessageService from "@/services/message-service";
import Pagination from "./Pagination";
import { DefaultMessagePopup } from "./DefaultMessagPopup";
import {
  closeBtn,
  introWrap,
  modalContainer,
  ThanksMessagePopup,
} from "./ThanksMessagePopup";

import styled from "@emotion/styled";

import closeLetterthanks from "@/assets/icon/result_category/close_letter_thanks.svg";
import closeLetterlove from "@/assets/icon/result_category/close_letter_love.svg";
import closeLetterhelp from "@/assets/icon/result_category/close_letter_help.svg";
import closeLettercomfort from "@/assets/icon/result_category/close_letter_comfort.svg";
import closeLettercheering from "@/assets/icon/result_category/close_letter_cheering.svg";
import closeLetterrespect from "@/assets/icon/result_category/close_letter_respect.svg";
import closeLetterexistence from "@/assets/icon/result_category/close_letter_existence.svg";
import closeLetterjust from "@/assets/icon/result_category/close_letter_just.svg";
import closeLetterRabbit from "@/assets/icon/result_category/close_letter_rabbit.svg";
import closeLetterNaver from "@/assets/icon/result_category/close_letter_naver.svg";

/* import openLetterthanks from '@/assets/icon/result_category/open_letter_thanks.svg';
import openLetterlove from '@/assets/icon/result_category/open_letter_love.svg';
import openLetterhelp from '@/assets/icon/result_category/open_letter_help.svg';
import openLettercomfort from '@/assets/icon/result_category/open_letter_comfort.svg';
import openLettercheering from '@/assets/icon/result_category/open_letter_cheering.svg';
import openLetterrespect from '@/assets/icon/result_category/open_letter_respect.svg';
import openLetterexistence from '@/assets/icon/result_category/open_letter_existence.svg';
import openLetterjust from '@/assets/icon/result_category/open_letter_just.svg';
import openLetterRabbit from '@/assets/icon/result_category/open_letter_rabbit.svg'; */

const GridContainer = styled.div`
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  /* height: 438px;
  overflow: hidden; */
  border-top: 2px solid #111;

  .slick-dots {
    background-color: yellow;
  }
`;

const GridItem = styled.div`
  height: 143px;
  border: 1px solid #d4d4d4;
  box-sizing: padding-box;
  padding-bottom: 1px;

  font-size: 14px;
  line-height: 21px;
  text-align: center;
  vertical-align: middle;

  :nth-of-type(3n) {
    border-right: none;
  }

  :nth-of-type(3n + 1) {
    border-left: none;
  }

  img {
    display: inline-block;
    padding-top: 16px;
  }
`;

const ThanksSlider = () => {
  const itemRef = useRef(null);

  const [clicked, setClicked] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [posts, setPosts] = useState<[PostPropsType] | []>([]);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [messageId, setMessageId] = useState(1);
  const [defaultMessage, setDefaultMessage] = useState(false);

  const token = sessionStorage.getItem("tt");
  const username = sessionStorage.getItem("name");

  useEffect(() => {
    try {
      if (!username) return;
      const setData = async () => {
        const data = await MessageService.getReceiveMessages(token, username);
        setPosts(data);
      };
      setData();
    } catch (error) {
      setDefaultMessage(true);
    }
  }, [token, username]);

  const clickItem = (id: number) => {
    if (!username) return;
    setClicked(true);
    MessageService.getMessage(token, id);
  };

  const switchCloseImages = (img: string) => {
    switch (img) {
      case "thanks":
        return `${closeLetterthanks}`;
      case "love":
        return `${closeLetterlove}`;
      case "help":
        return `${closeLetterhelp}`;
      case "comfort":
        return `${closeLettercomfort}`;
      case "cheering":
        return `${closeLettercheering}`;
      case "respect":
        return `${closeLetterrespect}`;
      case "existence":
        return `${closeLetterexistence}`;
      case "just":
        return `${closeLetterjust}`;
      case "admin":
        return `${closeLetterRabbit}`;
      case "lotto":
        return `${closeLetterNaver}`;
    }
  };

  /*   const switchOpenImages = (img: string) => {
    switch (img) {
      case 'thanks':
        return `${openLetterthanks}`;
      case 'love':
        return `${openLetterlove}`;
      case 'help':
        return `${openLetterhelp}`;
      case 'comfort':
        return `${openLettercomfort}`;
      case 'cheering':
        return `${openLettercheering}`;
      case 'respect':
        return `${openLetterrespect}`;
      case 'existence':
        return `${openLetterexistence}`;
      case 'just':
        return `${openLetterjust}`;
    }
  };
 */

  // slider setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(posts);
  return (
    <div>
      <div>
        <GridContainer>
          {posts.slice(offset, offset + limit).map((post, index) => (
            <React.Fragment key={index}>
              <GridItem
                ref={itemRef}
                className="topItem"
                onClick={() => {
                  setClicked(true);
                  setMessageId(page > 1 ? index + offset : index);
                  clickItem(messageId);
                }}
              >
                <img
                  src={
                    post.type === "admin"
                      ? closeLetterRabbit
                      : post.type === "lotto"
                      ? closeLetterNaver
                      : switchCloseImages(post.title)
                  }
                  alt={post.title}
                />
                <div className="title">
                  {!post.content &&
                    {
                      admin: "흑토끼가\n전하는 메세지",
                      lotto: "흑토끼가\n주는 선물",
                    }[post.type]}
                  {post.content.substring(0, 5)}
                  <br />
                  {post.content.substring(6, 12)}
                </div>
              </GridItem>
              {clicked && (
                <ThanksMessagePopup
                  setClicked={setClicked}
                  post={posts[messageId]}
                  isOpened={isOpened}
                  setIsOpened={setIsOpened}
                />
              )}
            </React.Fragment>
          ))}
        </GridContainer>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default ThanksSlider;
