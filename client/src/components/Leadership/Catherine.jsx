import React from 'react';
import styles from './Leadership.module.scss'
import MetaDecorator from '../MetaDecorator';

const Catherine = () => {
    return (<section id="go" >
        <MetaDecorator title="DafriGroup PLC - Catherine" description="Dubbed the multiple streams of income queen”. The current Africa's richest forex woman Catherine Anajemba is the brainchild behind Digital Bank of Africa (DBA ) concept which was brought to reality by DafriGroup's $5 million startup investment. Anajemba got together with her digital business associates to look for solution on how to tackle the issue of international remittances faced by digital entrepreneurs like herself as well as digital businesses." />

        <header className={styles.leadershipHead}>
            <div>
                <h2>Catherine Anajemba</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section}>
            <div className='leaderProfile'>
                    <div className='leaderProfile__box'>
                        <div className='leaderProfile__img'>
                            <img src={require('../../assets/leadership-image3.jpeg')} alt="" />
                        </div>
                        <div className='leaderProfile__text'>
                            <h3>Catherine Anajemba</h3>
                            <span>Managing Director at DafriGroup PLC</span>
                        </div>
                    </div>

                    <p>
                        Dubbed the multiple streams of income queen”. The current Africa's richest forex woman Catherine Anajemba is the brainchild behind Digital Bank of Africa (DBA ) concept which was brought to reality by DafriGroup's $5 million startup investment. Anajemba got together with her digital business associates to look for solution on how to tackle the issue of international remittances faced by digital entrepreneurs like herself as well as digital businesses.
                        <br /><br />
                        Born in the dusty street of Emnambithi, Uthukela, KwaZulu Natal, South Africa she was a determined young lady who wanted to break the chain of poverty in her family. Her brilliance led to her graduating with diploma in media from Boston City campus. She relocated to the big city but detrimentality of job hunting faced by thousands of graduates pushed her into joining the social media trend of airtime solicitation scheme in quest to support her family back home.
                        <br /><br />
                        Forex Achievements
                        <br /> <br />
                        Her life changed completely in 2015 after posting a video of a well known Forex trader which still available on her Facebook today where she asked their 23 000 followers at the time what they think about forex. “I wasn’t really interested in trading Forex because i always see it as some sort of online scam, I was happy to earn R1000 referral fee offered to us by a trader who was based here in Sandton, she told FX Magazine.
                        <br /><br />
                        “I told Faith wow this is a real deal if we can be able to get R1000 per person we refer to this guy its better than R100 airtime we was getting with our twerk video business. Somehow we never managed to earn a cent from the guy despite sending load of people to them” she told FX Magazine in 2019. 
                        <br /><br />
                        She started learning how to trade through one of her homeboy named Owen who taught her how to trade on WhatsApp, and started trading professionally in 2016 and has since became a house hold name, including being named one of influential under 30 by finance magazine as well as being counted amongst handful of citizens with “elite” statuship which is accoladed to individuals who surpass the $1 million dollar threshold in asset.
                        <br /><br />
                        Prior to joining DBA Network, she was the Chief Executive Officer of WIF Global Ltd and the managing director of B-Exchange Ltd. She also single handedly architected the launch of Forsage Africa Smart Contract which went on to generate some $240 million for its members.
                    </p>

            </div>
        </div>

    </section>);
}

export default Catherine;