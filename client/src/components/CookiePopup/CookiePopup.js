import React, { useState } from "react";
import styles from "./CookiePopup.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CookiePopup = () => {
  const [hide, setHide] = useState(false);

  const acceptCookies = () => {
    setHide(true);
    localStorage.setItem("cookiePolicy", "accept");
  };

  useEffect(() => {
    const check = localStorage.getItem("cookiePolicy");
    check ? setHide(true) : setHide(false);
  }, []);

  return (
    <div
      className={styles.cookie}
      style={
        hide
          ? {
              transform: "translateY(-20px)",
              opacity: "0",
              pointerEvents: "none",
            }
          : {
              transform: "translateY(0)",
              opacity: "1",
              pointerEvents: "auto",
            }
      }
    >
      <span>
        <strong>Dafrigroup.com</strong> uses cookies to give you better user
        experience. Click 'Accept cookies' to accept the use of cookies.
        <Link to="/privacy"> Read more on cookie policy</Link>
      </span>
      <button onClick={acceptCookies}>Accept cookies</button>
    </div>
  );
};

export default CookiePopup;
