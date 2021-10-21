import { useState, useEffect, useCallback } from "react";
import React from "react";
import LogoImage from "../images/logo.png";
import { FiArrowUpRight } from "react-icons/fi";
import * as styles from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const MenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  //
  //
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <nav
        className={styles.background}
        style={{
          position: menuOpen ? "sticky" : "relative",
          top: menuOpen ? "0px" : null,
          left: menuOpen ? "100px" : null,
        }}
      >
        <div className={styles.navigation}>
          <a href="https://www.color.museum" target="_blank" rel="noreferrer">
            <img src={LogoImage} className={styles.logo} alt="logo" />
          </a>
          <div className={styles.flex}>
            <div className={styles.square} onClick={MenuOpen} />
          </div>
        </div>
      </nav>
      <div
        style={{ top: !menuOpen ? "-100%" : "0px" }}
        onClick={(e) => {
          if (e.target.classList[2]) {
            return null;
          } else {
            MenuOpen();
          }
        }}
        className={styles.dropdown}
      >
        <div
          className={`${styles.dropdownContainer} dont-close`}
          style={{ top: !menuOpen ? "-100%" : "0px" }}
        >
          <h1 className={`${styles.dropdownHeader} dont-close`}>
            How can we help you?
          </h1>
          <div className={styles.flexContainer}>
            <a
              href="https://discord.gg/colormuseum"
              target="_blank"
              rel="noreferrer"
              className={`${styles.dropdownQuestion} dont-close`}
            >
              I have a question <FiArrowUpRight />
            </a>
            <a
              href="https://discord.gg/colormuseum"
              target="_blank"
              rel="noreferrer"
              className={`${styles.dropdownQuestion} dont-close`}
            >
              I have a issue that requires support <FiArrowUpRight />
            </a>
            <a
              href="https://discord.gg/colormuseum"
              target="_blank"
              rel="noreferrer"
              className={`${styles.dropdownQuestion} dont-close`}
            >
              I would like to get in touch <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
