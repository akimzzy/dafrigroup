import React from "react";
import styles from "./Leadership.module.scss";
import MetaDecorator from "../MetaDecorator";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="go">
      <MetaDecorator
        title="DafriGroup PLC - Leadership"
        description="Deeply rooted in our employees are our values, which drive us towards a common sense of purpose to create long lasting value for our stakeholders."
      />

      <header className={styles.leadershipHead}>
        <div>
          <h2>Leadership</h2>
          <img src={require("../../assets/fucus.svg")} alt="" />
        </div>
      </header>

      <div className={styles.section}>
        <div className={styles.leadership}>
          <h2>Leadership</h2>
          <p>
            Deeply rooted in our employees are our values, which drive us
            towards a common sense of purpose to create long lasting value for
            our stakeholders.
          </p>

          <h2>Executive Leadership</h2>
          <div className={styles.details}>
            <div>
              <div>
                <img
                  src={require("../../assets/leadership-image1.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <h3>Xolane Ndhlovu</h3>
                <span>Chairman - DafriGroup PLC</span>
              </div>
            </div>
            <p>
              Xolane Ndhlovu is a South African/Nigerian billionaire and the
              Chairman of the Board of DafriGroup PLC. He is responsible for
              leading the Board and focusing it on strategic matters, overseeing
              the Group’s business and setting high governance standards. He
              plays a pivotal role in fostering the effectiveness of the Board
              and individual Directors, both inside and outside the boardroom.
              <br />
              <br />
              Prior to that he was the Chief Executive Officer of UMEH Group Ltd
              — overseeing a portfolio of over 16+ companies that employs nearly
              200 people. Under his leadership UMEH enjoyed rapid growth
              including establishing and acquiring brands such as UMEH Media,
              Daily Afrika, WIF Global, Royal IVY South Africa, OMAHA Hotels,
              UMEH Motors and Star Magazine Africa among others.
              <br />
              <br />
              <Link to="/leadership/xolane">Read more...</Link>
            </p>
          </div>

          <div className={styles.moreAbout}>
            {/* <h3>Early Life</h3>
                    <p>
                        Born to a Nigerian father and a South African mother in the dusty streets of Burgersfort, a town in Mpumalanga province of South Africa. Better known as Master Ziggy during his reign as a radio/club Disk Jockey. Ndhlovu hold a diploma in media management, BCom Economics and Masters in Business adminstration. The alchemy success story of Ndhlovu is quite an inspirational one, having reformed from a background riddled with crime into building a multi-million dollar empire being currently chaired by him.
                        </p>

                    <h3>Breakthrough</h3>
                    <p>
                        Ndhlovu made his first million dollars in prison investing in startup tech companies. He’s determination to become one of the publicly quoted entrepreneurs can be attributed to his billionaire role model Richard Branson’s auto biography “Losing My Virginity ” which he read while in prison. Inspired by Richard Branson’s Virgin Group he founded UMEH Group and led it to some R500 million evaluation.
                        </p>

                    <h3>Philanthropy</h3>
                    <p>
                        Xolane Ndhlovu is a notable philanthropist in Africa, he is the founder and the President of The South African Entrepreneurship Centre For Ex- Offenders (SAECEO) which offer a variety of entrepreneurship skill programs to ex-offenders. He has contributed and donated to various educational and poverty fighting campaigns and organizations in countries like South Africa, Namibia, and Nigeria. He’s listed as one of the donors in President Cyril Remaphosa’s Solidarity Response Fund where he donated a half million rand.
                        </p> */}
          </div>

          <div className={styles.noneExecutive}>
            <h2>Non-Executive Leadership</h2>

            <div className={styles.moreAbout}>
              <div>
                <div>
                  <img
                    src={require("../../assets/leadership-image2.png")}
                    alt=""
                  />
                </div>
                <div>
                  <h3>Ramaswamy Easwaran</h3>
                  <span>Chief Executive Officer - DafriBank Limited </span>
                </div>
              </div>
              <p>
                Mr. Easwaran is an award winning versatile banker with a career
                that spans over 18 years. Having worked for some blue chip banks
                like HSBC, ABN Amro , BNP Paribas, IndusInd Bank. He had
                multiple roles across verticals some of which are highlighted
                below, Product Management, rolling out products in the payments
                and corporate banking channels. End to end product management
                right from initiation till maturity and decline. Worked in
                multiple large scale projects and provided successful
                implementation. Operations, Solutions Delivery and Structuring
                deals, Business Management which involved data analytics and
                presentation to the management team on strategy, business
                development and external bench-marking. Operational efficiency
                and operational audits Engaging with the regulators for
                compliance and product approvals. Some of the major projects he
                had done include: Successful implementation on the core banking
                project in the bank Payments integration with the banks internal
                system with the Fintech providers. <br />
                <br />
                <Link to="/leadership/ramaswamy">Read more...</Link>
              </p>
            </div>

            <div className={styles.moreAbout}>
              <p>
                Catherine Buhle Anajemba is the current managing director of
                DafriGroup and the brains behind the Digital Bank of Africa
                (DBA) project, an efficient payment solution concept that was
                inspired by the growing dissatisfaction of African digital
                entrepreneurs who have continued to face unfair restrictions by
                international money transfer services.
                <br />
                <br />
                Formerly as Chief Marketing Officer, Catherine was instrumental
                in securing $5 million startup capital for DafriBank. She was
                also responsible for overseeing the planning, development, and
                execution of DafriGroup's marketing, and advertising
                initiatives. Her unparalleled work ethic, competence, and
                innovative-thinking soon earned her a well-deserved promotion.
                <br />
                <br />
                <Link to="/leadership/catherine">Read more...</Link>
              </p>
              <div>
                <div>
                  <img
                    src={require("../../assets/leadership-image3.jpeg")}
                    alt=""
                  />
                </div>
                <div>
                  <h3>Catherine Anajemba</h3>
                  <span>Managing Director - DafriGroup PLC</span>
                </div>
              </div>
            </div>

            <div className={styles.moreAbout}>
              <div>
                <div>
                  <img
                    src={require("../../assets/leadership-image4.png")}
                    alt=""
                  />
                </div>
                <div>
                  <h3>Dr. Edward Obasi</h3>
                  <span>Managing Executive - DafriGroup PLC </span>
                </div>
              </div>
              <p>
                Dr. Edward Obasi joined DafriGroup PLC in October 2020 as
                Non-Executive Director. Dr. Obasi is responsible for providing
                independent oversight and counsel to the DafriGroup Chairman and
                the other management team. His task includes advising on the
                best use of financial resources, scrutinizing executive and
                business performance, and upholding the values of the company
                amongst other core responsibilities. <br />
                <br />
                Dr. Obasi has over 20 years of professional experience in
                various companies and industries. Before joining DafriGroup PLC,
                he was a Senior Financial Analyst at Diamond Foods Inc. in
                California USA. Prior to this, Dr. Obasi worked in several
                financial roles in Canada, United States of America and Nigeria.
                <br />
                <br />
                <Link to="/leadership/obasi">Read more...</Link>
              </p>
            </div>

            <div className={styles.moreAbout}>
              <p>
                Inge Laubscher is DafriGroup's Chief Compliance Officer (CCO).
                She collaborates with other senior management to drive the
                continued growth and success of DafriGroup and its many
                subsidiaries. As Chief Compliance Officer, Inge's specific
                responsibilities includes operational compliance, risk
                assessment, and implementation of policies to ensure the company
                has a strong regulatory framework ensuring that it is aware of
                and take steps to comply with relevant laws, policies, and
                regulations as DafriGroup remains committed to the highest
                standards of legal and ethical integrity. <br />
                <br />
                <Link to="/leadership/inge">Read more...</Link>
              </p>
              <div>
                <div>
                  <img
                    src={require("../../assets/leadership-image5.jpg")}
                    alt=""
                  />
                </div>
                <div>
                  <h3>Inge Laubscher</h3>
                  <span>Chief Compliance Director - DafriGroup PLC </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
