import React from 'react';
import styles from './Hamburger.module.scss'

const Hamburger = ({open, setOpen}) => {

    return (<div className={styles.hamburger}>
        <img  onClick={() => setOpen(!open)} src={open ? require("../../assets/cancel.svg") : require("../../assets/show.svg")} alt="menu button" />
    </div>);
}

export default Hamburger;