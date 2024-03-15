import { useCallback, useState, useMemo } from "react";
import { message } from "antd";
import Styles from "./loginPage.module.css";
import MyInput from "../components/MyInput/MyInput";

function LoginPage() {
  const [messageApi, contextHolder] = message.useMessage();

  const [isVlidating, setIsVlidating] = useState(false);

  const [login, setLogin] = useState("");
  const setLoginValue = useCallback((value) => {
    setLogin(value);
  }, []);
  const loginError = useMemo(() => {
    if (!isVlidating) {
      return "";
    }
    if (!login) {
      return "Не может быть пустым";
    }

    const regex = /^[a-zA-Z0-9]*$/;
    if (!regex.test(login)) {
      return "Может содержать тлько латинские буквы и цифры";
    }

    return "";
  }, [isVlidating, login]);

  const [password, setPassword] = useState("");
  const setPasswordValue = useCallback((value) => {
    setPassword(value);
  }, []);
  const passwordError = useMemo(() => {
    if (!password) {
      return "Не может быть пустым";
    }

    const regex = /^[a-z]*$/;
    if (!regex.test(password)) {
      return "Может содержать тлько латинские буквы в нижнем регистре";
    }

    return "";
  }, [password]);

  const [passwordCheck, setPasswordCheck] = useState("");
  const setPasswordCheckValue = useCallback((value) => {
    setPasswordCheck(value);
  }, []);
  const passwordCheckError = useMemo(() => {
    // if (!isVlidating) {
    //   return "";
    // }
    if (!passwordCheck) {
      return "Не может быть пустым";
    }

    if (password != passwordCheck) {
      return "Пароли не совпадают";
    }

    return "";
  }, [password, passwordCheck]);

  const [email, setEmail] = useState("");
  const setEmailValue = useCallback((value) => {
    setEmail(value);
  }, []);
  const emailError = useMemo(() => {
    // if (!isVlidating) {
    //   return "";
    // }
    if (!email) {
      return "Не может быть пустым";
    }

    const regex = /@/;
    if (!regex.test(email)) {
      return "Неверный формат email";
    }

    return "";
  }, [email]);

  const isError = useMemo(() => {
    console.log("isError calculating");
    return loginError || passwordError || passwordCheckError || emailError;
  }, [loginError, passwordError, passwordCheckError, emailError]);

  const handleButtonClick = () => {
    console.log("handleButtonClick");
    if (!isVlidating) {
      setIsVlidating(true);
    }

    if (isError) {
      return;
    }
    console.log("Регистрация прошла успешно");
    messageApi.open({
      type: "success",
      content: "Регистрация прошла успешно",
    });
  };
  return (
    <div className={Styles.login_page}>
      {contextHolder}
      <h1>Регистрация</h1>
      <MyInput
        name="login"
        type="text"
        placeholder="Логин"
        value={login}
        setValue={setLoginValue}
      />
      <p>{isVlidating ? loginError : ""}&nbsp;</p>
      <MyInput
        name="password"
        type="password"
        placeholder="Пароль"
        value={password}
        setValue={setPasswordValue}
      />

      <p>{isVlidating ? passwordError : ""}&nbsp;</p>
      <MyInput
        name="passwordCheck"
        type="password"
        placeholder="Пароль (повтор для проверки)"
        value={passwordCheck}
        setValue={setPasswordCheckValue}
      />

      <p>{isVlidating ? passwordCheckError : ""}&nbsp;</p>
      <MyInput
        name="email"
        type="text"
        placeholder="Email"
        value={email}
        setValue={setEmailValue}
      />

      <p>{isVlidating ? emailError : ""}&nbsp;</p>
      <button onClick={handleButtonClick} disabled={isVlidating && isError}>
        Зарегистрироваться
      </button>
    </div>
  );
}

export default LoginPage;
