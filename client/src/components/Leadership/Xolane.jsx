import React from "react";
import styles from "./Leadership.module.scss";
import MetaDecorator from "../MetaDecorator";

const Xolane = () => {
  return (
    <section id="go">
      <MetaDecorator
        title="DafriGroup PLC - Xolane"
        description="Xolane Ndhlovu is a South African/Nigerian billionaire and the
        Chairman of the Board of DafriGroup PLC. He is responsible for
        leading the Board and focusing it on strategic matters, overseeing
        the Group’s business and setting high governance standards. He plays
        a pivotal role in fostering the effectiveness of the Board and
        individual Directors, both inside and outside the boardroom."
      />

      <header className={styles.leadershipHead}>
        <div>
          <h2>Xolane Ndhlovu</h2>
          <img src={require("../../assets/fucus.svg")} alt="" />
        </div>
      </header>

      <div className={styles.section}>
        <div className="leaderProfile">
          <div className="leaderProfile__box">
            <div className="leaderProfile__img">
              <img
                src={require("../../assets/leadership-image1.jpeg")}
                alt=""
              />
            </div>
            <div className="leaderProfile__text">
              <h3>Xolane Ndhlovu</h3>
              <span>Chairman - DafriGroup PLC</span>
            </div>
          </div>

          <p>
            Xolane Ndhlovu is a South African/Nigerian billionaire and the
            Chairman of the Board of DafriGroup PLC. He is responsible for
            leading the Board and focusing it on strategic matters, overseeing
            the Group’s business and setting high governance standards. He plays
            a pivotal role in fostering the effectiveness of the Board and
            individual Directors, both inside and outside the boardroom.
            <br />
            <br />
            Prior to that he was the Chief Executive Officer of UMEH Group Ltd —
            overseeing a portfolio of over 16+ companies that employs nearly 200
            people. Under his leadership UMEH enjoyed rapid growth including
            establishing and acquiring brands such as UMEH Media, Daily Afrika,
            WIF Global, Royal IVY South Africa, OMAHA Hotels, UMEH Motors and
            Star Magazine Africa among others.
          </p>
          <br />
          <br />
          <h3>Early Life</h3>
          <br />
          <p>
            Born to a Nigerian father and a South African mother in the dusty
            streets of Burgersfort, a town in Mpumalanga province of South
            Africa. Better known as Master Ziggy during his reign as a
            radio/club Disk Jockey. Ndhlovu holds a diploma in media management,
            BCom Economics and Masters in Business administration. The alchemy
            success story of Ndhlovu is quite an inspirational one, having
            reformed from a background riddled with crime into building a R1.7
            billion firm being currently chaired by him.
          </p>
          <br />
          <br />
          <h3>Breakthrough</h3>
          <br />
          <p>
            Ndhlovu made his first million dollars in prison investing in
            startup tech companies through IPOs. In 2016, he became fascinated
            in a new trendy investment craze, "the crypto blockchain technology"
            which will later make him his first billion rand fortune. He’s
            determination to become one of the publicly quoted entrepreneurs can
            be attributed to his billionaire role model Richard Branson’s
            autobiography “Losing My Virginity ” which he read while in prison.
            Inspired by Richard Branson’s Virgin Group he founded UMEH Group and
            led it to some R500 million evaluation. In 2017, Ndhlovu became one
            of the early investors in Binance (BNB) with an investment that is
            now estimated to worth R1.3 billion, making him one of the most
            successful crypto blockchain investors in Africa. In 2020,
            DafriGroup PLC merged with UMEH and Ndhlovu became the chairman of
            the board. 
          </p>
          <br />
          <br />
          <h3>Philanthropy</h3>
          <br />
          <p>
            Xolane Ndhlovu is a notable philanthropist in Africa, he is the
            founder and the President of The South African Entrepreneurship
            Centre For Ex- Offenders (SAECEO) which offer a variety of
            entrepreneurship skill programs to ex-offenders. He has contributed
            and donated to various educational and poverty fighting campaigns
            and organizations in countries like South Africa, Namibia, and
            Nigeria. He’s listed as one of the donors in President Cyril
            Remaphosa’s Solidarity Response Fund where he donated a half million
            rand. In 2020, DafriBank Nigeria, a subsidiary of DafriGroup PLC
            announced a N100 million educational support grant in Nigeria to
            assist underprivileged children attain quality education. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Xolane;
