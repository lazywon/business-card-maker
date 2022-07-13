import React, { useEffect } from "react";
import styles from "./login.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMain = (userId) => {
    navigate({
      pathname: "/main",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMain(data.user.uid));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
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
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
