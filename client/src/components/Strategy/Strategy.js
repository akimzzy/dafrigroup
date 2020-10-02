import React from 'react';
import styles from './Strategy.module.scss'
import MetaDecorator from '../MetaDecorator';

const Strategy = () => {
    return (<section>
        <MetaDecorator title="DafriGroup PLC - Strategy" description="DafriGroup’s investment size has historically ranged from R20 million to over R460 million in equity capital. Our investment committee process for vetting transactions and continuous expansion of best practices enables us to offer value on larger transactions and funding within this range." />

        <header className={styles.strategy}>
            <div>
                <h2>DafriGroup’s Strategy</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section} >
            <div className={styles.box}>
                <img src={require('../../assets/Investment.svg')} alt="investment" />
                <h2>Investment Profile</h2>
                <p>
                    DafriGroup’s investment size has historically ranged from R20 million to over R460 million in equity capital. Our investment committee process for vetting transactions and continuous expansion of best practices enables us to offer value on larger transactions and funding within this range.
                        <br /> <br />
                        DafriGroup’s target investments are typically profitable, or nearly profitable, and are past the venture stage of their life-cycle. In most cases, we are the majority shareholder and only outside investor. This reduces the distractions commonly associated with having multiple financial investors and permits us to take a differentiated, long-term perspective. We are flexible and creative and pursue investments using a variety of transaction types.
                        <br /> <br />
                    <ul>
                        <li>Leveraged Buyouts</li>
                        <li>Minority Investments</li>
                        <li>Acquisition Or Growth Financing</li>
                        <li>Recapitalizations Or Restructurings</li>
                        <li>Private Transactions</li>
                    </ul>
                </p>
            </div>
        </div>
    </section>);
}

export default Strategy;