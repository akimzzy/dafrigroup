import React from 'react';
import styles from './Leadership.module.scss'
import MetaDecorator from '../MetaDecorator';

const Ramaswamy = () => {
    return (<section id="go" >
        <MetaDecorator title="DafriGroup PLC - Ramaswamy" description=" Mr. Easwaran is an award winning versatile banker with a career that spans over 18 years." />
        <header className={styles.leadershipHead}>
            <div>
                <h2>Ramaswamy Easwaran</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section}>
            <div className='leaderProfile'>
                    <div className='leaderProfile__box'>
                        <div className='leaderProfile__img'>
                            <img src={require('../../assets/leadership-image2.png')} alt="" />
                        </div>
                        <div className='leaderProfile__text'>
                            <h3>Ramaswamy Easwaran</h3>
                            <span>Chief Executive Officer  - DafriBank Limited</span>
                        </div>
                    </div>

                    <p>
                        Mr. Easwaran is an award winning versatile banker with a career that spans over 18 years. Having worked for some blue chip banks like HSBC, ABN Amro , BNP Paribas, IndusInd Bank. He had multiple roles across verticals some of which are highlighted below, Product Management, rolling out products in the payments and corporate banking channels. End to end product management right from initiation till maturity and decline. Worked in multiple large scale projects and provided successful implementation. Operations, Solutions Delivery and Structuring deals, Business Management which involved data analytics and presentation to the management team on strategy, business development and external bench-marking. Operational efficiency and operational audits Engaging with the regulators for compliance and product approvals. Some of the major projects he had done include: Successful implementation on the core banking project in the bank Payments integration with the banks internal system with the Fintech providers. Awarded as one of the best product managers Project awarded the best implementation.
                        <br /><br />
                        Easwaran hold multiple academic degrees, including Bachelors in Accountancy with the major studies including Accounting, Economics, Taxation, and Audt. He hold a ACMA degree awarded by the Institute of Cost Accountants of India (ICAI) Additional qualifications include Scrum Foundation Certificate (SFC) from ScrumStudy Also hold certifications in Blockchain Technology, Data Analytics, and Artificial intelligence.
                    </p>
            </div>
        </div>

    </section>);
}

export default Ramaswamy;