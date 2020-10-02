import React from 'react';
import styles from './About.module.scss'
import MetaDecorator from '../MetaDecorator';

const About = () => {
    return (<section >
        <MetaDecorator title="DafriGroup PLC - About" description="DafriGroup PLC is a multinational public company headquartered in Johannesburg, South Africa with offices in Lagos, Nigeria. We invest in sectors that provide strong long-term returns that are committed to improving lives and transforming Africa." />
        <header className={styles.about}>
            <div>
                <h2>About</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section} >
            <p className={styles.primaryInsterestPara}>
                DafriGroup PLC is a multinational public company headquartered in Johannesburg, South Africa with offices in Lagos, Nigeria. We invest in sectors that provide strong long-term returns that are committed to improving lives and transforming Africa.
                <br /><br />
                We buy/ invest in sectors that provide strong long-term returns that are committed to improving lives and transforming Africa. DafriGroup's investment approach is anchored by a sizable long-term capital base, experience in structuring technology-oriented transactions, and proven management techniques that yield flexibility and opportunity.
                <br /><br />
                Led by a team of visionary entrepreneurs of class. As a value-added investor through our subsidiaries with a long-term perspective, DafriGroup contributes professional expertise and multi-level support towards companies to realize their full potential.
                <br /><br />
                Our approach to creating value focuses on unlocking potential that others cannot see. Dafri provides advantage through a disciplined investment focus on companies that provide mission-critical in finance, technology, hospitality, blockchain, real estate, aviation, media solutions and offer opportunities for growth and improvement in their operations. We partner with world-class management teams across our companies, which aim to grow and reach their full potential, and utilize our dedicated team of operational experts to generate lasting value through the implementation of best practices.
                <br /><br />
                We bring engineering-like process, focus, and discipline to the value creation process. We have created a scalable model by developing best practices that help improve a company’s efficiency and profitability and enhance its growth opportunities. Best practices are created by and for Dafri’s management teams, and touch on all aspects of growth and operational strategies, and seek to capture and share collective learning across the Dafri's ecosystem.
            </p>
            <div className={styles.primaryInsterestBox}>
                <h2>Our Primary Interest</h2>
                <ul>
                    <li><img src={require("../../assets/Technology.svg")} alt="technology" /> technology</li>
                    <li><img src={require("../../assets/Finance.svg")} alt="finance" /> finance</li>
                    <li><img src={require("../../assets/hospitality.svg")} alt="hospitality" /> hospitality</li>
                    <li><img src={require("../../assets/Real_estate.svg")} alt="real estate" /> real estate</li>
                    <li><img src={require("../../assets/Blockchain.svg")} alt="blockchain" /> blockchain</li>
                    <li><img src={require("../../assets/Media.svg")} alt="media" /> media</li>
                    <li><img style={{ width: "3rem" }} src={require("../../assets/aviation.svg")} alt="aviation" /> aviation</li>
                </ul>
            </div>
        </div>

        <div className={styles.section} style={{ backgroundColor: "#284B6C" }} >
            <div className={styles.ourCompanies}>
                <h2>Our Companies</h2>
                <ul>
                    <li><img src={require("../../assets/umehgroup.svg")} alt="Umeh Group logo" /> </li>
                    <li><img src={require("../../assets/Dafribank.svg")} alt="Dafribank logo" /> </li>
                    <li><img src={require("../../assets/Omaha.svg")} alt="Omaha logo" /> </li>
                    <li><img src={require("../../assets/dafriair.svg")} alt="Dafri Air logo" /> </li>
                    <li><img src={require("../../assets/Royalvy.svg")} alt="Royalvy" />  </li>
                    <li><img src={require("../../assets/Dafripay.svg")} alt="Dafripay" /> </li>
                    <li><img src={require("../../assets/DafriXchange.svg")} alt="DafriXchange" /> </li>
                    <li><img src={require("../../assets/dafritech.svg")} alt="Dafritech logo" /> </li>
                    <li><img src={require("../../assets/dba.svg")} alt="DBA logo" /> </li>
                    <li><img src={require("../../assets/B-exchange.svg")} alt="B-exchange Logo" /> </li>
                    <li><img src={require("../../assets/umehmotors.svg")} alt="Umeh motors logo" /> </li>
                    <li><img src={require("../../assets/DafriEstate.svg")} alt="Dafri Estate logo" /> </li>
                </ul>
            </div>
        </div>
    </section>);
}

export default About;