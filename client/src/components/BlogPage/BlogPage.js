import React from "react";
import styles from "./BlogPage.module.scss";
import { Helmet } from "react-helmet";

// import { data } from "../BlogData";
// import BlogPostDetails_1 from "../BlogPostDetails/BlogPostDeails_1";
// import BlogPostDetails_3 from "../BlogPostDetails/BlogPostDeails_3";
// import BlogPostDetails_2 from "../BlogPostDetails/BlogPostDeails_2";
import { Link } from "react-router-dom";
// import BlogPostDetails_4 from "../BlogPostDetails/BlogPostDeails_4";
// import MetaDecorator from "../MetaDecorator";
// import BlogPostDetails_5 from "../BlogPostDetails/BlogPostDeails_5";
// import BlogPostDetails_6 from "../BlogPostDetails/BlogPostDeails_6";
// import BlogPostDetails_7 from "../BlogPostDetails/BlogPostDeails_7";
// import BlogPostDetails_8 from "../BlogPostDetails/BlogPostDeails_8";
// import BlogPostDetails_9 from "../BlogPostDetails/BlogPostDeails_9";
// import BlogPostDetails_10 from "../BlogPostDetails/BlogPostDeails_10";
// import BlogPostDetails_11 from "../BlogPostDetails/BlogPostDeails_11";
// import BlogPostDetails_12 from "../BlogPostDetails/BlogPostDeails_12";
// import BlogPostDetails_13 from "../BlogPostDetails/BlogPostDeails_13";

import { useParams } from "react-router-dom";
import sanityClient from "../../sanity";
import BlockContent from "@sanity/block-content-to-react";

const Blog = ({ match }) => {
  const [postData, setPostData] = React.useState(null);
  const { slug } = useParams();
  // const filter = data.filter((x) => x.id === match.params.id);

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

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            slug,
            excerpt,
            publishedAt,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
          }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  function formatDate(params) {
    const newDate = new Date(params);
    return String(newDate).substring(4, 15);
  }

  return (
    <section>
      {/* <MetaDecorator
        title={`DafriGroup PLC - Blog: ${postData?.title}`}
        excerpt={postData?.excerpt}
        image={postData?.mainImage.asset.url}
      /> */}

      <Helmet>
        <meta name="title" content={postData?.title} />
        <meta name="description" content={postData?.excerpt} />
        <meta property="og:image" content={postData?.mainImage.asset.url} />
        <title>{postData?.title}</title>
      </Helmet>

      <header className={styles.BlogPageHead}>
        <div>
          <h2>{postData?.title}</h2>
          <span>{formatDate(postData?.publishedAt?.substring(0, 10))}</span>
          {/* <span>{postData?.date}</span> */}
        </div>
      </header>

      <div className={styles.section}>
        <div>
          {/* <div style={{textAlign: 'center'}}>
                    <img style={filter[0].name ? {marginBottom: '0'} : {}} className={styles.detailsImage} src={filter[0].src} alt={filter[0].title}></img>
                    {filter[0].name ? <div style={{marginBottom: '1rem', transform: 'translateY(-10px)'}}>{filter[0].name}</div> : ""}
                </div> */}
          <div className={styles.BlogPage}>
            <BlockContent
              blocks={postData?.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>

        <div className={styles.otherPost}>
          <h3>Other posts</h3>
          {console.log(sortedActivities)}
          <ul>
            {sortedActivities
              ?.filter((x) => x.slug.current !== slug)
              .map((y) => (
                <Link key={y.title} to={"/blog/" + y?.slug?.current}>
                  <li>
                    <h4>{y.title}</h4>
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blog;
