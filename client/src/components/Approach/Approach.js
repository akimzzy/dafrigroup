import React from 'react';
import styles from './Approach.module.scss'
import MetaDecorator from '../MetaDecorator';

const Approach = () => {
    return (<section>
        <MetaDecorator title="DafriGroup PLC - Approach" description="DafriGroup’s investment size has historically ranged from R20 million to over R460 million in equity capital. Our investment committee process for vetting transactions and continuous expansion of best practices enables us to offer value on larger transactions and funding within this range." />

        <header className={styles.approach}>
            <div>
                <h2>Investment Approach</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
                <p style={{ color: "white" }}>We Bring Expertise and Experience to Work</p>
            </div>
        </header>

        <div className={styles.section} >
            <div className={styles.investment}>

                <div>
                    <img src={require('../../assets/Investment.svg')} alt="investment" />
                    <h2>Investment Profile</h2>
                    <p>
                        DafriGroup’s investment size has historically ranged from R20 million to over R460 million in equity capital. Our investment committee process for vetting transactions and continuous expansion of best practices enables us to offer value on larger transactions and funding within this range.
                            <br /> <br />
                            DafriGroup’s target investments are typically profitable, or nearly profitable, and are past the venture stage of their life-cycle. In most cases, we are the majority shareholder and only outside investor. This reduces the distractions commonly associated with having multiple financial investors and permits us to take a differentiated, long-term perspective. We are flexible and creative and pursue investments using a variety of transaction types.
                            <br /> <br />
                            Leveraged Buyouts<br />
                            Minority Investments<br />
                            Acquisition Or Growth Financing<br />
                            Recapitalizations Or Restructurings<br />
                            Private Transactions<br />
                    </p>
                </div>

                <div>
                    <img src={require('../../assets/Industry-focus.svg')} alt="Industry focus" />
                    <h2>Industry Focus</h2>
                    <p>
                        DafriGroup has focused onMedia production, publishing, financial management, consulting, investment, technology and broadcasting industries since our founding. We look for opportunities to build and grow sustainable, successful businesses in our target markets.
                            <br /> <br />
                            DafriGroup seeks companies that research and develop proprietary media, finance, entertainment and technology solutions and either license them to their customers or leverage them internally to create a technology-enabled service. This includes companies that develop and market software, software as a service, and technology-enabled business, and information services in the media, entertainment, finance and technology industry.
                            <br /> <br />
                            Identifying specific companies that can be transformed through the implementation of operational best practices and turned into predictable, high cash flow businesses is key to DafriGroup’s target selection. While our portfolio companies need not fit a specific profile, many of our prospective investments have some common characteristics.
                        </p>
                </div>

                <div>
                    <img src={require('../../assets/Partnership.svg')} alt="Partnership" />
                    <h2>Collaborative Partnership</h2>
                    <p>
                        DafriGroup provides strategic and operationally-focused investment with the goal of adding meaningful, sustainable value to each company within our portfolio. In addition to investment capital, we offer our portfolio companies access to proprietary best practices and an extensive relationship network.
                            <br /> <br />
                            What sets us apart is our philosophy of working closely with management teams at the outset of each investment to reach a common understanding of business goals, develop the appropriate performance benchmarks, and implement proven best practices. Together, we aim to build some of the very best companies leading the production, publishing, financial management, consulting, investment, technology and broadcasting sector today. DafriGroup provides a tailored approach for adding value for each of our companies; we provide strategic, operational, and financial expertise.
                        </p>
                </div>
            </div>
        </div>
    </section>);
}

export default Approach;