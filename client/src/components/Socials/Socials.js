import React from 'react';
import styles from './Socials.module.scss'

const Socials = () => {
    return (<div className={styles.socials}>
        <a href="https://www.facebook.com/DafriGroup/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/facebook.svg")} alt="facebook" />
        </a>
        <a href="https://twitter.com/DafriGroup?s=09" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/twitter.svg")} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/mwlite/company/dafrigroup-plc" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/linkdln.svg")} alt="linkdln" />
        </a>
        <a href="https://instagram.com/dafrigroup?igshid=1e5yvv6x958cc" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/instagram.svg")} alt="instagram" />
        </a>
    </div> );
}

export default Socials;