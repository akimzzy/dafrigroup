import React from "react";
import styles from "./Blog.module.scss";

// import { data } from "../BlogData";
import { Link } from "react-router-dom";
import MetaDecorator from "../MetaDecorator";
import sanityClient from "../../sanity";

const Blog = () => {
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
        title="DafriGroup PLC - Blog"
        description="DafriGroup’s blog posts"
      />

      <header className={styles.blogContainer}>
        <div>
          <h2>
            Ideas To Inspire.
            <br />
            Insights To Accelerate.
          </h2>
          <img src={require("../../assets/fucus.svg")} alt="" />
        </div>
      </header>

      <div className={styles.section}>
        <div className={styles.blog}>
          <ul>
            {/* {data.map((x) => (
                        <li key={x.id}>
                            <div>
                                <img src={(x.src)} alt={x.src} />
                            </div>
                            <div>
                                <h3>{x.title}</h3>
                                <span>{x.date}</span>
                                <Link to={`/blog/${x.id}`}>
                                    <button>Read more <img src={require("../../assets/button_icon.svg")} alt="" /></button>
                                </Link>
                            </div>
                        </li>
                    ))} */}
            {allPostsData &&
              sortedActivities.map((post) => (
                <li key={post.slug.current}>
                  <div>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.slug.current}
                    />
                  </div>
                  <div>
                    <h3>{post.title}</h3>
                    <span>
                      {formatDate(post.publishedAt?.substring(0, 10))}
                    </span>
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
    </section>
  );
};

export default Blog;
