import React from 'react';
import styles from './404.module.scss'
import { Link } from 'react-router-dom';
import MetaDecorator from '../MetaDecorator';

const PageNotFound = () => {
    return (<section
        style={{ 
            minHeight: '50rem', 
            textAlign: 'center', 
            display: 'grid',
            backgroundColor: '#284B6C',
            color: '#FFFFFF',
            alignItems: 'center' 
        }} >
        <MetaDecorator title="DafriGroup PLC - 404" description="404 - page not found" />

        <header className={styles.section}>
            <div>
                <h2>404 - Page not found</h2>
                <Link
                    style={{
                        backgroundColor: '#931837',
                        padding: '1rem',
                        color: "white"
                    }}
                
                to="/">Back to home page</Link>
            </div>
        </header>
    </section>);
}

export default PageNotFound;