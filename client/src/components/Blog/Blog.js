import React from 'react';
import styles from './Blog.module.scss'

import { data } from '../BlogData'
import { Link } from 'react-router-dom';
import MetaDecorator from '../MetaDecorator';

const Blog = () => {

    // console.log(data)


    return (<section>
        <MetaDecorator title="DafriGroup PLC - Blog" description="DafriGroup’s blog posts" />

        <header className={styles.blogContainer}>
            <div>
                <h2>Ideas To Inspire.<br/>Insights To Accelerate.</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section}>
            <div className={styles.blog}>
                <ul>
                    {data.map((x) => (
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
                    ))}
                    
                </ul>
            </div>
        </div>
    </section>);
}

export default Blog;