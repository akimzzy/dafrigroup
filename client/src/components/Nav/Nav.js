import React from 'react';
import styles from "./Nav.module.scss"
import { Link } from 'react-router-dom'

const Nav = ({ open, setOpen }) => {
    const navigationList = ["Home", "About", "Leadership", "Strategy", "Approach", "Career", "Blog", "Contact"]

    return (<nav>
        <Link to="/">
            <img src={require("../../assets/logo.svg")} alt="Danfigroup logo" />
        </Link>

        <ul className={open ? styles.open : null}>
            {navigationList.map(x => (
                <li key={x}
                    onClick={() => setOpen(false)} >
                    <Link
                        to={ x.toLocaleLowerCase() === "home" ? `/` : `/${x.toLocaleLowerCase()}`}>
                        {x}
                    </Link>
                </li>))}
        </ul>
    </nav>);
}

export default Nav;