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
                            <img className="obasiLeadership" src={require('../../assets/leadership-image4.png')} alt="" />
                        </div>
                        <div className='leaderProfile__text'>
                            <h3>Dr. Edward Obasi</h3>
                            <span>Chief Executive Officer  - DafriBank Limited</span>
                        </div>
                    </div>
                    <p>
                        Dr. Edward Obasi has served at various financial institutions, including Ecobank Nigeria PLC, Intercontinental Bank PLC, Hallmark Bank PLC, Savannah Bank PLC amongst others. His areas of competence include: Wealth and Credit Risk Management, Commercial Banking, Human Resource Management, Internal Controls, Performance Management, and Business Process Improvements. Prior to joining DafriBank, Dr Obasi held various important positions in many other industries including Chief Accountant, Senior Financial analyst, Treasury Manager with top organizations in Canada and United States of America.
                        <br /><br />
                        He is also vastly educated. He is an alumnus of the prestigious Harvard University Business School. He has a Bachelor's degree in finance and banking and master’s degree in business administration (MBA) amongst several other professional certifications and memberships including: Fellow Chartered Certified Accountants of UK (FCCA), Certified Professional Accountant of Alberta and Canada (CPA, CGA), Associate Chartered Institute of Bankers of Nigeria (ACIB). Obasi has a Honorary doctorate in Business Administration from Pebble Hills University Delaware, U.S.A. With him based in Canada, his new appointment will see him lead the delivery of DafriBank's ambitious growth plans on a global scale.
                    </p>
            </div>
        </div>

    </section>);
}

export default Obasi;