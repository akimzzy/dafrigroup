import React from 'react';
import styles from './Leadership.module.scss'
import MetaDecorator from '../MetaDecorator';

const Obasi = () => {
    return (<section id="go" >
        <MetaDecorator title="DafriGroup PLC - Obasi" description="Dr. Edward Obasi has served at various financial institutions, including Ecobank Nigeria PLC, Intercontinental Bank PLC, Hallmark Bank PLC, Savannah Bank PLC amongst others." />
        <header className={styles.leadershipHead}>
            <div>
                <h2>Dr. Edward Obasi</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section}>
            <div className='leaderProfile'>
                    <div className='leaderProfile__box'>
                        <div className='leaderProfile__img'>
                            <img className="obasiLeadership" src={require('../../assets/obasi.jpg')} alt="" />
                        </div>
                        <div className='leaderProfile__text'>
                            <h3>Dr. Edward Obasi</h3>
                            <span>Manaaging Executive - DafriGroup PLC</span>
                        </div>
                    </div>
                    <p>
                    Dr. Edward Obasi joined DafriGroup PLC in October 2020 as Non-Executive Director. Dr. Obasi is responsible for providing independent oversight and counsel to the DafriGroup Chairman and the other management team. His task includes advising on the best use of financial resources, scrutinizing executive and business performance, and upholding the values of the company amongst other core responsibilities.
                        <br /><br />
                        Dr. Obasi has over 20 years of professional experience in various companies and industries. Before joining DafriGroup PLC, he was a Senior Financial Analyst at Diamond Foods Inc. in California USA. Prior to this, Dr. Obasi worked in several financial roles in Canada, United States of America and Nigeria. His areas of competence include Wealth and portfolio management, credit risk management and controls, retail and wholesale Banking, digital asset management and blockchain technology adoption, performance management, financial reporting and analysis, full cycle accounting  and business process improvements. He served as Head of Employee Services (Human Resources Division) of Savannah Bank Plc, Branch Operations Manager (BOM) as well as Bank Manager with several leading Commercial Banks in Nigeria before his sojourn overseas.
                        <br /><br />
                        An esteemed scholar, Dr. Obasi has an extensive list of academic achievements. He is an alumnus of the world-renowned Harvard University Boston Massachusetts USA and has a Masters Degree in Business Administration (MBA). He is also a member of several professional bodies with certifications including ACIB, CPA, CGA.
                        <br /><br />
                        Dr. Obasi’s quest for excellence saw him graduating as the best finance and banking graduate of his class as well as winning a National award as Best Accountancy Student all over the country of The Chartered Institute of Bankers (CIBN). He also had Distinction scores in Accountancy and External Auditing examinations of the Certified General Accountants of Alberta and Canada. He is also a member of leading accountancy professional bodies in United Kingdom (FCCA) and California Board of Accountancy.
                        <br /><br />
                        Dr. Obasi holds dual citizenship (Canadian and Nigerian) and currently resides in the USA.
                        <br /><br />
                        Dr. Obasi is committed to utilizing his wealth of experience and academic prowess towards achieving the overall corporate goals and visions of DafriGroup within the shortest time horizon.
                    </p>
            </div>
        </div>

    </section>);
}

export default Obasi;