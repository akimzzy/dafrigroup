import React from 'react';
import styles from "./Career.module.scss"
import MetaDecorator from '../MetaDecorator';

const Home = () => {
    const careerData = [
        {
            title: "Chief Executive Officer",
            company: "DafriBank Limited"
        },
        {
            title: "Chief Financial Officer ",
            company: "DafriBank Limited"
        },
        {
            title: "Chief Technology Officer ",
            company: "DafriBank Limited"
        },
        {
            title: "Chief Strategic Officer ",
            company: "DafriBank Limited"
        },
        {
            title: "Conduct & Reputational Risk Manager",
            company: "DafriBank Limited"
        },
        {
            title: "Operational Risk Officer",
            company: "DafriBank Limited"
        },
        {
            title: "Regulatory Compliance Manager",
            company: "DafriBank Limited"
        },
        {
            title: "Legislation and Regulatory Oversight Manager",
            company: "DafriBank Limited"
        },
        {
            title: "Marketing Manager",
            company: "DafriBank Limited"
        },
        {
            title: "Customer Service Representative ",
            company: "DafriBank Limited"
        },
        {
            title: "Internal bank auditor",
            company: "DafriBank Limited"
        },
        {
            title: "Blockchain Project Manager",
            company: "DafriBank Limited"
        },
        {
            title: "Decentralized Finance, (DeFi) Project Director ",
            company: "DafriBank Limited"
        },
        {
            title: "Public Relation Officer",
            company: "DafriGroup PLC"
        },
        {
            title: "Personal Assistant(PA) To the Chairman of the board. (Applicant must be residing in South Africa)",
            company: "DafriGroup PLC"
        },
        {
            title: "Chief Operational Officer(COO)",
            company: "DafriExchange Ltd"
        },
        {
            title: "Compliance Manager",
            company: "DafriExchange Ltd "
        },
        {
            title: "Specialist officers with an engineering background",
            company: "DafriExchange Ltd "
        },
        {
            title: "Customer Service Representative",
            company: "DafriExchange Ltd"
        }
    ]
    console.log(careerData.length)

    return (<section>
        <MetaDecorator title="DafriGroup PLC - Career" description="Join us as we take banking away from the big monopolies. Your country is not a barrier. We are borderless, We are digital, we are multinational!!" />

        <header className={styles.career}>
            <div>
                <h2>Careers</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section}>
            <div className={styles.box}>
                <h2>We are hiring</h2>
                <p>Join us as we take banking away from the big monopolies. Your country is not a barrier. We are borderless, We are digital, we are multinational!! </p>
                <ul>
                    {careerData.map((x) => (
                        <li key={x.title}>
                            <h3>{x.title}</h3>
                            <span>{x.company}</span>
                        </li>
                    ))}
                </ul>
                <div style={{ fontSize: '1.2rem', marginBottom: '2rem'}}>
                    <h3 style={{ marginRight: '1rem' }}>E-mail</h3>
                    <a href="mailto:hr@dafrigroup.com">hr@dafrigroup.com</a>

                </div>

                <p>
                    Ain't like normal commercial banks with core banking services, we are aware that this is a first of it kind in Africa that will serve as an Electronic Payment Solution, and looking for candidates with previous experience in this particular field may be tantamount to finding a needle deep inside ocean. Although we do require some previous experience in digital or technology field. For instances, a candidate applying for Chief Executive Officer position may need a previous  management experience or a key position in area such as banking, investment firm, insurance company,  brokerage firm, or a stint at a digital payment solution e.g PayPal, Skrill among others.
                    <br /><br />
                    We aren't your typical employer. We won't lock you into golden handcuffs or push complex terms. We won't ruin your life with months of unnecessary due diligence. We won't grind you on terms.
                    <br /><br />
                    Supplementary Requirements:<br />
                    A curriculum vitae alone is not suffice, we need a note detailing how you intend to make things happen at the helm of DafriGroup. This latter must be written by you. General employment motivational latter you can find on the internet is not allowed. We want to feel your passion through your own latter.
                    <br /><br />
                    A Dream Car: <br />
                    We'll buy you a freaking car, of varying degrees of absurdity
                    <br /><br />
                    Oversea Trip: <br />
                    We'll send you and a friend on a trip around the world
                    <br /><br />
                    Read more about our new Digital Bank before applying.
                </p>

                <div className={styles.link}>
                    <a href="https://www.dailyafrika.com/dafrigroup-plc-announced-its-digital-banking-ambition-dafribank-a-sustainable-platform-for-all-digital-problems/" >
                        DafriGroup Plc Announced Its Digital Banking Ambition; DafriBank, A sustainable platform for all digital problems
                    </a>
                    <a href="https://www.ustimesnow.com/about-dafribank-limited-xolane-ndhlovu/" >
                        About DafriBank Limited – Xolane Ndhlovu
                    </a>
                    <a href="https://www.fxmagazines.com/dafribank-buoyant-dba-token-interest-to-the-mars-following-defi-use-case/" >
                        DafriGroup Plc Announced Its Digital Banking Ambition; DafriBank, A sustainable platform for all digital problems.
                    </a>

                </div>

            </div>
        </div>
    </section>)
}

export default Home;