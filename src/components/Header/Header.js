import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/img/svg/logo.svg";
import Button from "../organism/Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href="/" className={styles.headerLogo} title="Test Task">
          <Logo />
        </a>

        <div className={styles.headerButtons}>
          <Button type="button" color="yellow">
            Users
          </Button>

          <Button type="button" color="yellow">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
