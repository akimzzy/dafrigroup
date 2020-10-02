import React from 'react';
import styles from "./Footer.module.scss"
import { Link } from 'react-router-dom';


const Footer = () => {

    const navigationList = ["Home", "About", "Leadership", "Strategy", "Approach", "Career", "Blog", "Contact"]

    return (<footer>

        <div className={styles.footer}>

            <div>
                <Link to="/">
                    <img src={require("../../assets/logo.svg")} alt="Danfigroup logo" />
                </Link>

                <div>
                    <a href="https://www.facebook.com/DafriGroup/" target="_blank"  rel="noopener noreferrer"><img src={require("../../assets/footer_facebook.svg")} alt="facebook" /></a>
                    <a href="https://twitter.com/DafriGroup?s=09" target="_blank" rel="noopener noreferrer"><img src={require("../../assets/footer_twitter.svg")} alt="twitter" /></a>
                    <a href="https://www.linkedin.com/mwlite/company/dafrigroup-plc" target="_blank" rel="noopener noreferrer"><img src={require("../../assets/footer_linkdln.svg")} alt="linkdln" /></a>
                    <a href="https://instagram.com/dafrigroup?igshid=1e5yvv6x958cc" target="_blank" rel="noopener noreferrer"><img src={require("../../assets/footer__instagram.svg")} alt="instagram" /></a>
                </div>

            </div>

            <div>
                <ul>
                    {navigationList.map(x => (<li key={x} ><Link to={ x.toLocaleLowerCase() === "home" ? `/` : `/${x.toLocaleLowerCase()}`}>{x}</Link></li>))}
                </ul>
            </div>

            <div>
                <h5>Contact Us</h5>

                <ul>
                    <li>
                        <h6>ADDRESS:</h6>
                        <span>
                            35 Mozart Lane <br />Midrand, Forte Complex, <br />Johannesburg, South Africa , 1685
                        </span>
                    </li>
                    <li>
                        <span>
                            <h6>TELEPHONE:</h6>
                            <a href="tel:0115685053" >011 568 5053</a>
                        </span>

                        <span>
                            <h6>FAX:</h6>
                            <a href="fax:0865609785">086 560 9785</a>
                        </span>
                    </li>

                    <li>
                        <h6>E-MAIL:</h6>
                        <span>
                            <a href="mailto:help@dafrigroup.com" >help@dafrigroup.com</a>
                        </span>
                    </li>
                </ul>
            </div>

        </div>

        <div className={styles.copyright}>
            ©DafriGroup PLC. All Rights Reserved.<br />
            <Link to='/privacy'>Privacy Policy.</Link>
        </div>
    </footer>);
}

export default Footer;