import React from "react";
import styles from "./Home.module.scss";
// import { data } from "../BlogData";
import { Link } from "react-router-dom";
import MetaDecorator from "../MetaDecorator";
import sanityClient from "../../sanity";

const Home = () => {
//   const topThreeBlog = [data[0], data[1], data[2]];
  const [allPostsData, setAllPosts] = React.useState(null);

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                publishedAt,
                mainImage{
                  asset->{
                    _id,
                    url
                  }
                }
              }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  const sortedActivities = allPostsData?.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  function formatDate(params) {
    const newDate = new Date(params);
    return String(newDate).substring(4, 15);
  }

  return (
    <section>
      <MetaDecorator
        title="DafriGroup PLC - Digitalising Africa"
        description="DafriGroup PLC invest in sectors that provide strong long-term returns and have the ability to move Africa’s Economy forward. Technology, finance,  hospitality, real estate, blockchain, media, aviation"
      />

      <header className={styles.header}>
        <div>
          <h1>
            We
            <span className={styles.P_focus}>
              <span> invest </span>
              <img src={require("../../assets/fucus.svg")} alt="" />
            </span>
            in sectors that provide strong long-term returns and have the
            ability to move Africa’s Economy forward.
          </h1>
          <img
            className={styles.P_focus2}
            src={require("../../assets/fucus.svg")}
            alt=""
          />
          <Link to="/about">
            <button>
              Learn more{" "}
              <img src={require("../../assets/button_icon.svg")} alt="" />
            </button>
          </Link>
        </div>
      </header>

      <div className={styles.section}>
        <p className={styles.primaryInsterestPara}>
          DafriGroup PLC is a multinational public company headquartered in
          Johannesburg, South Africa with offices in Lagos, Nigeria. We invest
          in sectors that provide strong long-term returns that are committed to
          improving lives and transforming Africa.
        </p>
        <div className={styles.primaryInsterestBox}>
          <h2>Our Primary Interest</h2>
          <ul>
            <li>
              <img
                src={require("../../assets/Technology.svg")}
                alt="technology"
              />{" "}
              technology
            </li>
            <li>
              <img src={require("../../assets/Finance.svg")} alt="finance" />{" "}
              finance
            </li>
            <li>
              <img
                src={require("../../assets/hospitality.svg")}
                alt="hospitality"
              />{" "}
              hospitality
            </li>
            <li>
              <img
                src={require("../../assets/Real_estate.svg")}
                alt="real estate"
              />{" "}
              real estate
            </li>
            <li>
              <img
                src={require("../../assets/Blockchain.svg")}
                alt="blockchain"
              />{" "}
              blockchain
            </li>
            <li>
              <img src={require("../../assets/Media.svg")} alt="media" /> media
            </li>
            <li>
              <img
                style={{ width: "3rem" }}
                src={require("../../assets/aviation.svg")}
                alt="aviation"
              />{" "}
              aviation
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section} style={{ backgroundColor: "#284B6C" }}>
        <div className={styles.ourCompanies}>
          <h2>Our Companies</h2>
          <ul>
            <li>
              <img
                src={require("../../assets/umehgroup.svg")}
                alt="Umeh Group logo"
              />{" "}
            </li>
            <li>
              <img
                src={require("../../assets/Dafribank.svg")}
                alt="Dafribank logo"
              />{" "}
            </li>
            <li>
              <img src={require("../../assets/Omaha.svg")} alt="Omaha logo" />{" "}
            </li>
            <li>
              <img
                src={require("../../assets/dafriair.svg")}
                alt="Dafri Air logo"
              />{" "}
            </li>
            <li>
              <img src={require("../../assets/Royalvy.svg")} alt="Royalvy" />{" "}
            </li>
            <li>
              <img src={require("../../assets/Dafripay.svg")} alt="Dafripay" />{" "}
            </li>
            <li>
              <img
                src={require("../../assets/DafriXchange.svg")}
                alt="DafriXchange"
              />{" "}
            </li>
            <li>
              <img
                src={require("../../assets/dafritech.svg")}
                alt="Dafritech logo"
              />{" "}
            </li>
            <li>
              <img src={require("../../assets/dba.svg")} alt="DBA logo" />{" "}
            </li>
            <li>
              <img
                src={require("../../assets/B-exchange.svg")}
                alt="B-exchange Logo"
              />{" "}
            </li>
            <li>
              <img
                src={require("../../assets/umehmotors.svg")}
                alt="Umeh motors logo"
              />{" "}
            </li>
            <li>
              <img
                src={require("../../assets/DafriEstate.svg")}
                alt="Dafri Estate logo"
              />{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.blog}>
          <h2>Latest News</h2>

          <div>
            <ul>
              {/* {topThreeBlog.map((x) => (
                <li key={x.id}>
                  <div>
                    <img src={x.src} alt={x.src} />
                  </div>
                  <div>
                    <h3>{x.title}</h3>
                    <span>{x.date}</span>
                    <Link to={`/blog/${x.id}`}>
                      <button>
                        Read more{" "}
                        <img
                          src={require("../../assets/button_icon.svg")}
                          alt=""
                        />
                      </button>
                    </Link>
                  </div>
                </li>
              ))} */}
              {allPostsData &&
              sortedActivities.slice(0, 3).map((post) => (
                <li key={post.slug.current}>
                  <div>
                    <img src={post.mainImage.asset.url} alt={post.slug.current} />
                  </div>
                  <div>
                    <h3>{post.title}</h3>
                    <span>{formatDate(post.publishedAt?.substring(0, 10))}</span>
                    <Link to={"blog/" + post.slug.current}>
                      <button>
                        Read more{" "}
                        <img
                          src={require("../../assets/button_icon.svg")}
                          alt=""
                        />
                      </button>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.leadership}>
          <h2>Leadership</h2>
          <p>
            Deeply rooted in our employees are our values, which drive us
            towards a common sense of purpose to create long lasting value for
            our stakeholders.
          </p>

          <ul>
            <Link to="/leadership/xolane">
              <li>
                <div>
                  <img
                    src={require("../../assets/leadership-image1.jpeg")}
                    alt="chairman"
                  />
                </div>
                <div>
                  <h4>Xolane Ndhlovu</h4>
                  <span>Chairman - DafriGroup PLC</span>
                </div>
              </li>
            </Link>
            <Link to="/leadership/ramaswamy">
              <li>
                <div>
                  <img
                    src={require("../../assets/leadership-image2.png")}
                    alt="chairman"
                  />
                </div>
                <div>
                  <h4>Ramaswamy Easwaran</h4>
                  <span>Chief Executive Officer - DafriBank Limited </span>
                </div>
              </li>
            </Link>
            <Link to="/leadership/catherine">
              <li>
                <div>
                  <img
                    src={require("../../assets/leadership-image3.jpeg")}
                    alt="chairman"
                  />
                </div>
                <div>
                  <h4>Catherine Anajemba</h4>
                  <span>Managing Director - DafriGroup PLC</span>
                </div>
              </li>
            </Link>
            <Link to="/leadership/obasi">
              <li>
                <div>
                  <img
                    className=""
                    src={require("../../assets/leadership-image4.png")}
                    alt="obasi"
                  />
                </div>
                <div>
                  <h4>Dr. Edward Obasi</h4>
                  <span>Managing Executive - DafriGroup PLC</span>
                </div>
              </li>
            </Link>
            <Link to="/leadership/inge">
              <li>
                <div>
                  <img
                    className="inge"
                    src={require("../../assets/leadership-image5.jpg")}
                    alt="inge"
                  />
                </div>
                <div>
                  <h4>Inge Laubscher</h4>
                  <span>Chief Compliance Director - DafriGroup PLC</span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
