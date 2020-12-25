import React from 'react';
import styles from './Leadership.module.scss'
import MetaDecorator from '../MetaDecorator';

const Inge = () => {
    return (<section id="go" >
        <MetaDecorator title="DafriGroup PLC - Inge" description="Inge Laubscher is DafriGroup's Chief Compliance Officer (CCO). She collaborates with other senior management to drive the continued growth and success of DafriGroup and its many subsidiaries." />

        <header className={styles.leadershipHead}>
            <div>
                <h2>Inge Laubscher</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section}>
            <div className='leaderProfile'>
                    <div className='leaderProfile__box'>
                        <div className='leaderProfile__img'>
                            <img src={require('../../assets/inge.jpg')} alt="" />
                        </div>
                        <div className='leaderProfile__text'>
                            <h3>Inge Laubscher</h3>
                            <span>Chief Compliance Director  - DafriGroup PLC</span>
                        </div>
                    </div>

                    <p>
                        Inge Laubscher is DafriGroup's Chief Compliance Officer (CCO). She collaborates with other senior management to drive the continued growth and success of DafriGroup and its many subsidiaries. As Chief Compliance Officer, Inge's specific responsibilities includes operational compliance, risk assessment, and implementation of policies to ensure the company has a strong regulatory framework ensuring that it is aware of and take steps to comply with relevant laws, policies, and regulations as DafriGroup remains committed to the highest standards of legal and ethical integrity.
                        <br /><br />
                        Inge was previously the chief legal researcher and legal consultant at Alpha PRACS, a research and corporate services consultancy where her role involved creating client-oriented and innovation-driven solutions across multiple fields. Inge holds a BCom Law and LLB Law degrees from the prestigious Nelson Mandela University in Port Elizabeth. Since then she has published articles in several internationally accredited journals and become an industry expert with clients from over 27 countries. In 2020 she had the distinguished honor of representing South Africa at the United Nations in New York.
                    </p>

            </div>
        </div>

    </section>);
}

export default Inge;