import React from "react";
import Header from "./header";
import { Link } from "gatsby";
import "../styles/layout.css";
import * as styles from "./layout.module.css";
import { BsFillPaletteFill, BsTwitter } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import bulletinPinIcon from "../images/bulletinPinIco.png";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className={styles.content}>{children}</section>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerContainer}>
            <h4>Colors</h4>
            <div className={styles.footerFlex}>
              <a href="https://www.color.museum/palette" target="_blank">
                <div className={styles.containerIconFooter}>
                  <BsFillPaletteFill />
                </div>
                Palette
              </a>
              <a href="https://www.color.museum/gallery" target="_blank">
                <div className={styles.containerIconFooter}>
                  <BiShow />
                </div>
                Gallery
              </a>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <h4>Connect</h4>
            <div className={styles.footerFlex}>
              <Link to="/" target="_blank">
                <div className={styles.containerIconFooter}>
                  <img src={bulletinPinIcon} alt="bulletin pin icon" />
                </div>
                Bulletin
              </Link>
              <a href="https://twitter.com/colordotmuseum" target="_blank">
                <div className={styles.containerIconFooter}>
                  <BsTwitter />
                </div>
                Twitter
              </a>
              <a
                href="https://discord.gg/colormuseum"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.containerIconFooter}>
                  <FaDiscord />
                </div>
                Discord
              </a>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <h4>Legal</h4>
            <div className={styles.footerFlex}>
              <a href="https://www.color.museum/terms" target="_blank">
                <div className={styles.containerIconFooter}>
                  <IoDocumentTextSharp />
                </div>
                Terms
              </a>
              <a href="https://www.color.museum/privacy" target="_blank">
                <div className={styles.containerIconFooter}>
                  <MdPrivacyTip />
                </div>
                Privacy
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copy}>
          <div>
            <h4>© Color Museum Limited</h4>
            <p>The world's first digital museum dedicated to color.</p>
          </div>
          <div>
            <p>Est.</p> <h4>2021</h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
