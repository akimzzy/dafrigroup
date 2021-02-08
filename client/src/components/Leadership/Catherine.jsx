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
                            <span>Managing Director - DafriGroup PLC</span>
                        </div>
                    </div>

                    <p>
                        Catherine Buhle Anajemba is the current managing director of DafriGroup and the brains behind the Digital Bank of Africa (DBA) project, an efficient payment solution concept that was inspired by the growing dissatisfaction of African digital entrepreneurs who have continued to face unfair restrictions by international money transfer services.
                        <br /><br />
                        Formerly as Chief Marketing Officer,  Catherine was instrumental in securing $5 million startup capital for DafriBank. She was also responsible for overseeing the planning, development, and execution of DafriGroup's marketing, and advertising initiatives. Her unparalleled work ethic,  competence, and innovative-thinking soon earned her a well-deserved promotion.
                        <br /><br />
                        Now the group's managing director,  Catherine directs and controls the operations of DafriGroup and its many subsidiaries, giving strategic guidance and direction to the board to achieve the company's set goals and objectives.
                        <br /> <br />
                        Born in KwaZulu Natal, South Africa, and from humble beginnings,  Catherine set out early in life to break the chain of poverty in her family. Due to her relentlessness and vision, she soon rose to widespread acclaim and achieved elite status as a Forex trader extraordinaire becoming arguably the current Africa's richest forex woman. Finance magazine later included her in its annual list of most influential people under 30.
                        <br /><br />
                        Catherine has a diploma in media from the Boston City campus.
                        <br /><br />
                        She started learning how to trade through one of her homeboy named Owen who taught her how to trade on WhatsApp, and started trading professionally in 2016 and has since became a house hold name, including being named one of influential under 30 by finance magazine as well as being counted amongst handful of citizens with “elite” statuship which is accoladed to individuals who surpass the $1 million dollar threshold in asset.
                        <br /><br />
                        Prior to joining DafriGroup, she was the Chief Executive Officer of WIF Global Ltd and the managing director of B-Exchange Ltd. 
                    </p>

            </div>
        </div>

    </section>);
}

export default Catherine;