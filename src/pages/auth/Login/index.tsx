import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppState } from "@/contexts/Context";
import axios from "axios";
import UserService, { User } from "@/services/user-service";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import * as styles from "./style";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import BubbleRabbit from "@/assets/images/bubbleRabbit.png";
import back from "@/assets/icon/ico_back.svg";

const schema = yup
  .object({
    username: yup
      .string()
      .min(2)
      .max(12)
      .matches(/^[가-힣a-zA-Z0-9]*$/)
      .required(),
    password: yup
      .string()
      .max(4)
      .matches(/^[0-9]+$/)
      .required(),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const state = useAppState();
  const dispatch = useAppDispatch();

  const [loginError, setLoginError] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  const {
    register,
    watch,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver: yupResolver(schema) });

  useEffect(() => {
    const subscription = watch((inputData) => {
      if (inputData.username && inputData.password) {
        setLoginError(false);
        setActiveButton(true);
      } else {
        setActiveButton(false);
        setLoginError(true);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, loginError]);

  const onSubmit = handleSubmit(async (data) => {
    UserService.login(data)
      .then((res) => {
        const accessToken = res.token.access;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        dispatch({ type: "SET_TOKEN", token: accessToken });
        sessionStorage.setItem("tt", accessToken);

        if (state.signInWriteCard) {
          navigate(`/write/${state.receiverName}`);
        } else {
          navigate("/check");
        }
      })
      .catch((err) => {
        console.error(err);
        setLoginError(true);
      })
      .finally(() => {
        resetField("username");
        resetField("password");
      });
  });

  return (
    <Layout>
      <div css={styles.statusBar} />
      <div onClick={() => navigate(-1)} css={styles.backButton}>
        <img src={back} style={{ cursor: "pointer" }} alt="뒤로가기" />
      </div>
      <div css={styles.loginImageWrapper(BubbleRabbit)} />
      <h1 css={styles.loginTitle}>
        흑토끼와 함께하는
        <br />
        2022 감사 연말정산
      </h1>
      <form css={styles.loginForm} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="닉네임을 입력해 주세요"
          css={styles.loginInput}
          {...register("username")}
        />
        <input
          type="password"
          placeholder="숫자 4자리 비밀번호를 입력해 주세요"
          css={styles.loginInput}
          {...register("password")}
        />
        {loginError && (
          <p css={styles.loginInputError}>
            닉네임 또는 비밀번호를 잘못 입력했습니다!
          </p>
        )}
        {(errors.username || errors.password) && (
          <p css={styles.loginInputError}>
            닉네임 또는 비밀번호를 잘못 입력했습니다!
          </p>
        )}
        <div css={styles.buttonWrapper}>
          <Button
            width="328px"
            color="#dadada"
            className={activeButton ? "active" : ""}
            disabled={loginError ? true : false}
          >
            로그인
          </Button>
          <Link to="/register">
            <Button width="328px" color="#dadada" className="signup">
              회원가입
            </Button>
          </Link>
        </div>
      </form>
    </Layout>
  );
};
export default Login;
