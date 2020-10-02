import React from 'react';
import styles from './BlogPage.module.scss'

import { data } from '../BlogData'
import BlogPostDetails_1 from '../BlogPostDetails/BlogPostDeails_1';
import BlogPostDetails_3 from '../BlogPostDetails/BlogPostDeails_3';
import BlogPostDetails_2 from '../BlogPostDetails/BlogPostDeails_2';
import { Link } from 'react-router-dom';
import BlogPostDetails_4 from '../BlogPostDetails/BlogPostDeails_4';
import MetaDecorator from '../MetaDecorator';

const Blog = ({ match }) => {

    const filter = data.filter((x) => x.id === match.params.id)

    const details = () => {
        if (match.params.id === "DafriGroup Plc Announced Its Digital Banking Ambition; DafriBank, A sustainable platform for all digital problems.") {
         // eslint-disable-next-line 
           return <BlogPostDetails_1 />
        } else if (match.params.id === "DafriBank Limited Appoints a New Chief Executive Officer") {
        // eslint-disable-next-line 
         return <BlogPostDetails_2 />
        } else if (match.params.id === "UMEH Group Donates R500000.00 to COVID- 19 Solidarity Response Fund") {
        // eslint-disable-next-line 
         return <BlogPostDetails_3 />
        } else if (match.params.id === "DAFRIBANK DONATES N100 MILLION TO EDUCATIONAL INITIATIVE IN NIGERIA") {
          // eslint-disable-next-line 
            return <BlogPostDetails_4 />
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
