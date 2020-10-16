import React from 'react';
import styles from './BlogPage.module.scss'

import { data } from '../BlogData'
import BlogPostDetails_1 from '../BlogPostDetails/BlogPostDeails_1';
import BlogPostDetails_3 from '../BlogPostDetails/BlogPostDeails_3';
import BlogPostDetails_2 from '../BlogPostDetails/BlogPostDeails_2';
import { Link } from 'react-router-dom';
import BlogPostDetails_4 from '../BlogPostDetails/BlogPostDeails_4';
import MetaDecorator from '../MetaDecorator';
import BlogPostDetails_5 from '../BlogPostDetails/BlogPostDeails_5';

const Blog = ({ match }) => {

    const filter = data.filter((x) => x.id === match.params.id)

    const details = () => {
        if (match.params.id === "1") {
         // eslint-disable-next-line 
           return <BlogPostDetails_1 />
        } else if (match.params.id === "2") {
        // eslint-disable-next-line 
         return <BlogPostDetails_2 />
        } else if (match.params.id === "3") {
        // eslint-disable-next-line 
         return <BlogPostDetails_3 />
        } else if (match.params.id === "4") {
          // eslint-disable-next-line 
            return <BlogPostDetails_4 />
        } else if (match.params.id === "5") {
          // eslint-disable-next-line 
            return <BlogPostDetails_5 />
        }
    }

    return (<section>
        <MetaDecorator title={`DafriGroup PLC - Blog: ${filter[0].title}`} description={filter[0].description} />

        <header className={styles.BlogPageHead}>
            <div>
                <h2>{filter[0].title}</h2>
                <span>{filter[0].date}</span>
            </div>
        </header>

        <div className={styles.section}>
            <div >
                <img className={styles.detailsImage} src={filter[0].src} alt={filter[0].title}></img>
                <div className={styles.BlogPage}>
                    {details()}
                </div>
            </div>

            <div className={styles.otherPost}>
                <h3>Other posts</h3>

                <ul>
                    {data.filter(x => x.id !== match.params.id).map(y => (<Link key={y.title} to={`/blog/${y.id}`}><li><h4>{y.title}</h4></li></Link>))}
                </ul>

            </div>

        </div>
    </section>);
}

export default Blog;
