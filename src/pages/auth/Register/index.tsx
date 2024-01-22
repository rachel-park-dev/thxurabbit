import React, { useState, useEffect } from "react";
import close from "@/assets/icon/ico_close.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UserService from "@/services/user-service";
import Layout from "@/components/Layout";
import * as styles from "./style";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import Popup from "@/components/Popup";
import { AxiosError } from "axios";

type FormData = {
  username: string;
  password: string;
  confirm_password: string;
};

const schema = yup
  .object({
    username: yup
      .string()
      .min(2, "2글자 이상 입력해 주세요!")
      .max(12, "12글자 이하로 입력해 주세요!")
      .matches(/^[가-힣a-zA-Z0-9]*$/, "특수문자와 공백은 사용이 불가능해요!")
      .required(),
    password: yup
      .string()
      .max(4)
      .matches(/^[0-9]+$/)
      .required(),
    confirm_password: yup.string().oneOf([yup.ref("password"), null]),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPassordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [alreadyPopup, setAlreadyPopup] = useState(false);

  const pattern = /\s/g; //공백체크
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g; //특수문자체크
  const pwd = /^[0-9]+$/; //숫자체크

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (inputValue.username) {
      if (
        inputValue.username.length >= 2 &&
        inputValue.username.length <= 12 &&
        !inputValue.username.match(pattern) &&
        !inputValue.username.match(regExp)
      ) {
        setUsernameError(false);
      } else {
        setUsernameError(true);
      }
    }
  }, [inputValue.username, usernameError]);

  useEffect(() => {
    if (inputValue.password) {
      if (inputValue.password.length === 4 && inputValue.password.match(pwd)) {
        setPassordError(false);
      } else {
        setPassordError(true);
      }
    }
  }, [inputValue.password, passwordError]);

  useEffect(() => {
    if (inputValue.confirmPassword) {
      if (inputValue.confirmPassword.match(inputValue.password)) {
        setConfirmPasswordError(false);
      } else {
        setConfirmPasswordError(true);
      }
    }
  }, [inputValue.confirmPassword, inputValue.password, confirmPasswordError]);

  useEffect(() => {
    if (
      inputValue.username &&
      inputValue.password &&
      inputValue.confirmPassword
    ) {
      if (!usernameError && !passwordError && !confirmPasswordError) {
        setAllChecked(true);
      } else {
        setAllChecked(false);
      }
    } else {
      setAllChecked(false);
    }
  }, [inputValue, usernameError, passwordError, confirmPasswordError]);
  const onSubmit = handleSubmit(async (formData: FormData) => {
    const data = {
      username: formData.username,
      password: formData.password,
    };
    try {
      await UserService.register(data);
      setOpenPopup(true);
    } catch (err) {
      const typedError = err as AxiosError;
      if (typedError?.response?.status === 400) {
        setAlreadyPopup(true);
      }
      resetField("username");
      resetField("password");
      resetField("confirm_password");
      resetValidation();
    }
  });

  const resetValidation = () => {
    setInputValue({
      username: "",
      password: "",
      confirmPassword: "",
    });

    setUsernameError(false);
    setPassordError(false);
    setConfirmPasswordError(false);
  };
  return (
    <Layout>
      <h2 css={styles.title}>
        감사 연말정산을
        <br />
        시작해보자! (깡총)
      </h2>
      <p css={styles.guideComment}>
        닉네임과 비밀번호는 다시 찾을 수 없으니
        <br />
        잊어버리지 않게 잘 기록해주세요
      </p>
      <div
        onClick={() => navigate(-1)}
        css={styles.closeBtn}
        style={{ cursor: "pointer" }}
      >
        <img src={close} alt="닫기" />
      </div>
      <form css={styles.formStyle} onSubmit={onSubmit}>
        <h4 css={styles.subTitle}>닉네임</h4>
        <input
          type="text"
          placeholder="친구들이 보게 되는 이름입니다"
          css={styles.inputUserNameStyle(usernameError)}
          className={usernameError ? "inputError" : ""}
          {...register("username", {
            onChange: (e) => {
              setInputValue({
                ...inputValue,
                username: e.target.value,
              });
            },
          })}
        />
        {inputValue.username && inputValue.username.length < 2 && (
          <p css={styles.inputValueError}>2글자 이상 입력해 주세요!</p>
        )}
        {inputValue.username.length > 12 && (
          <p css={styles.inputValueError}>12글자 이하로 입력해 주세요!</p>
        )}
        {inputValue.username.match(pattern) && (
          <p css={styles.inputValueError}>띄어쓰기는 할 수 없어요!</p>
        )}
        {inputValue.username.match(regExp) && (
          <p css={styles.inputValueError}>특수문자는 사용이 불가능해요!</p>
        )}
        {inputValue.username && !usernameError && (
          <p css={styles.ok}>사용 가능한 닉네임 입니다!</p>
        )}
        <h4 css={styles.subTitle}>비밀번호 입력</h4>
        <input
          type="password"
          placeholder="숫자 4자리 비밀번호를 입력해 주세요"
          css={styles.inputPwdStyle(passwordError)}
          className={passwordError ? "inputError" : ""}
          {...register("password", {
            onChange: (e) => {
              setInputValue({
                ...inputValue,
                password: e.target.value,
              });
            },
          })}
        />
        {inputValue.password ? (
          inputValue.password.length !== 4 ? (
            <p css={styles.inputValueError}>숫자 4자리를 입력해 주세요!</p>
          ) : !inputValue.password.match(pwd) ? (
            <p css={styles.inputValueError}>숫자 4자리를 입력해 주세요!</p>
          ) : (
            ""
          )
        ) : null}
        {inputValue.password && !passwordError && <p css={styles.ok}></p>}
        <h4 css={styles.subTitle}>비밀번호 확인</h4>
        <input
          type="password"
          placeholder="비밀번호를 확인해 주세요"
          css={styles.inputPwdConfirmStyle(confirmPasswordError)}
          className={confirmPasswordError ? "inputError" : ""}
          {...register("confirm_password", {
            onChange: (e) => {
              setInputValue({
                ...inputValue,
                confirmPassword: e.target.value,
              });
            },
          })}
        />
        {inputValue.confirmPassword &&
          !inputValue.confirmPassword.match(inputValue.password) && (
            <p css={styles.inputValueError}>비밀번호가 달라요!</p>
          )}
        {inputValue.confirmPassword && !confirmPasswordError && (
          <p css={styles.ok}></p>
        )}
        <Button
          width="328px"
          color="#dadada"
          className={
            allChecked ? "registerBtnStyle active" : "registerBtnStyle"
          }
        >
          회원가입 하기
        </Button>
      </form>
      {openPopup && (
        <Popup
          width="296px"
          className="goToLogin"
          buttonCancel="로그인 하기"
          onCancel={() => navigate("/login")}
        >
          가입을 완료했어!
          <br />
          바로 로그인해볼까? (깡총)
        </Popup>
      )}
      {alreadyPopup && (
        <Popup
          width="296px"
          className="alreadyExist"
          buttonCancel="로그인 하기"
          buttonConfirm="확인"
          onCancel={() => navigate("/login")}
          onConfirm={() => {
            setAlreadyPopup(false);
            resetField("username");
            resetField("password");
            resetField("confirm_password");
            resetValidation();
          }}
        >
          이미 존재하는 닉네임입니다! (깡총)
        </Popup>
      )}
    </Layout>
  );
};

export default Register;
