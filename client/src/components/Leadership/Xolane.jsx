import React from 'react';
import styles from './Leadership.module.scss'
import MetaDecorator from '../MetaDecorator';

const Xolane = () => {
    return (<section id="go" >
        <MetaDecorator title="DafriGroup PLC - Xolane" description="Dubbed the multiple streams of income queen”. The current Africa's richest forex woman Catherine Anajemba is the brainchild behind Digital Bank of Africa (DBA ) concept which was brought to reality by DafriGroup's $5 million startup investment. Anajemba got together with her digital business associates to look for solution on how to tackle the issue of international remittances faced by digital entrepreneurs like herself as well as digital businesses." />

        <header className={styles.leadershipHead}>
            <div>
                <h2>Xolane Ndhlovu</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section}>
            <div className='leaderProfile'>
                    <div className='leaderProfile__box'>
                        <div className='leaderProfile__img'>
                            <img src={require('../../assets/leadership-image1.jpeg')} alt="" />
                        </div>
                        <div className='leaderProfile__text'>
                            <h3>Xolane Ndhlovu</h3>
                            <span>Chairman - DafriGroup PLC</span>
                        </div>
                    </div>

                    <p>
                        Xolane Ndhlovu is the Chairman of the Board of DafriGroup PLC. He is responsible for leading the Board and focusing it on strategic matters, overseeing the Group’s business and setting high governance standards. He plays a pivotal role in fostering the effectiveness of the Board and individual Directors, both inside and outside the board room.
                        <br /><br />
                        Prior to that he was the Chief Executive Officer of UMEH Group Ltd — overseeing a portfolio of over 16+ companies that employs nearly 200 people. Under his leadership UMEH enjoyed a rapid growth including establishing and acquiring brands such as UMEH Media, Daily Afrika, WIF Global, Royal IVY South Africa, OMAHA Hotels, UMEH Motors and Star Magazine Africa among others.
                    </p>
                    <br /><br />
                    <h3>Early Life</h3>
                    <br />
                    <p>
                        Born to a Nigerian father and a South African mother in the dusty streets of Burgersfort, a town in Mpumalanga province of South Africa. Better known as Master Ziggy during his reign as a radio/club Disk Jockey. Ndhlovu hold a diploma in media management, BCom Economics and Masters in Business adminstration. The alchemy success story of Ndhlovu is quite an inspirational one, having reformed from a background riddled with crime into building a multi-million dollar empire being currently chaired by him.
                        </p><br /><br />
                    <h3>Breakthrough</h3><br />
                    <p>
                        Ndhlovu made his first million dollars in prison investing in startup tech companies. He’s determination to become one of the publicly quoted entrepreneurs can be attributed to his billionaire role model Richard Branson’s auto biography “Losing My Virginity ” which he read while in prison. Inspired by Richard Branson’s Virgin Group he founded UMEH Group and led it to some R500 million evaluation.
                        </p><br /><br />
                    <h3>Philanthropy</h3><br />
                    <p>
                        Xolane Ndhlovu is a notable philanthropist in Africa, he is the founder and the President of The South African Entrepreneurship Centre For Ex- Offenders (SAECEO) which offer a variety of entrepreneurship skill programs to ex-offenders. He has contributed and donated to various educational and poverty fighting campaigns and organizations in countries like South Africa, Namibia, and Nigeria. He’s listed as one of the donors in President Cyril Remaphosa’s Solidarity Response Fund where he donated a half million rand.
                    </p>

            </div>
        </div>

    </section>);
}

export default Xolane;