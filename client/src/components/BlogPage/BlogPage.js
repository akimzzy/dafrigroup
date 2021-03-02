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
import BlogPostDetails_6 from '../BlogPostDetails/BlogPostDeails_6';
import BlogPostDetails_7 from '../BlogPostDetails/BlogPostDeails_7';
import BlogPostDetails_8 from '../BlogPostDetails/BlogPostDeails_8';
import BlogPostDetails_9 from '../BlogPostDetails/BlogPostDeails_9';
import BlogPostDetails_10 from '../BlogPostDetails/BlogPostDeails_10';
import BlogPostDetails_11 from '../BlogPostDetails/BlogPostDeails_11';
import BlogPostDetails_12 from '../BlogPostDetails/BlogPostDeails_12';

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
        else if (match.params.id === "6") {
          // eslint-disable-next-line 
            return <BlogPostDetails_6 />
        }
        else if (match.params.id === "7") {
          // eslint-disable-next-line 
            return <BlogPostDetails_7 />
        }
        else if (match.params.id === "8") {
          // eslint-disable-next-line 
            return <BlogPostDetails_8 />
        }
        else if (match.params.id === "9") {
          // eslint-disable-next-line 
            return <BlogPostDetails_9 />
        }
        else if (match.params.id === "10") {
          // eslint-disable-next-line 
            return <BlogPostDetails_10 />
        }
        else if (match.params.id === "11") {
          // eslint-disable-next-line 
            return <BlogPostDetails_11 />
        }
        else if (match.params.id === "12") {
          // eslint-disable-next-line 
            return <BlogPostDetails_12 />
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
                <div style={{textAlign: 'center'}}>
                    <img style={filter[0].name ? {marginBottom: '0'} : {}} className={styles.detailsImage} src={filter[0].src} alt={filter[0].title}></img>
                    {filter[0].name ? <div style={{marginBottom: '1rem', transform: 'translateY(-10px)'}}>{filter[0].name}</div> : ""}
                </div>
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
