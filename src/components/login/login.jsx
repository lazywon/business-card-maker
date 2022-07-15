import React, { useEffect } from "react";
import styles from "./login.module.css";
import Footer from "../footer/footer";
// import Header from "../header/header";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMain = (userId, anonymous) => {
    navigate({
      pathname: "/main",
      state: {
        id: userId,
        anonymous: anonymous || false,
      },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMain(data.user.uid));
  };

  const onLoginAnonymously = () => {
    authService //
      .loginAnonymously()
      .then(alert("Non-Member Login does not save data."))
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        alert(`${errorCode} Error !! ${errorMsg}`);
      });
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        // 로그인 시 user 데이터 생성되며, 안했다면 user는 null이 된다.
        user && goToMain(user.uid);
      });
  });

  return (
    <section className={styles.login}>
      {/* <Header /> */}
      <section>
        <h1 className={styles.loginTitle}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              <img
                className={styles.logo}
                src="/images/google_logo.png"
                alt="google"
              ></img>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              <img
                className={styles.logo}
                src="/images/github_logo.png"
                alt="github"
              ></img>
              Github
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLoginAnonymously}>
              <img
                className={styles.logo}
                src="/images/non-member_logo.png"
                alt="non-member"
              ></img>
              Non-Member
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
