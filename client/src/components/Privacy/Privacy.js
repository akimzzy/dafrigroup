import React from 'react';
import styles from './Privacy.module.scss'
import { Link } from 'react-router-dom';
import MetaDecorator from '../MetaDecorator';

const Privacy = () => {
    return (<section id="go" >
        <MetaDecorator title="DafriGroup PLC - Privacy policy" description="This Privacy Notice was last amended on 03/08/2020" />

        <header className={styles.leadershipHead}>
            <div>
                <h2>Privacy policy</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section}>
            <div className={styles.privacy}>

                <p>
                    This Privacy Notice was last amended on 03/08/2020
                    <br /><br />
                    This notice applies to companies that are part of the DafriGroup PLC, which sometimes use trading names including DafriTechnologies, DafriBank, DafriEstate, DafriAir, UMEH, DafriExchange, DBA, OMAHA Hotel, DafriPay, Royal IVY, B-Exchange, and DafriMedia (together “DafriGroup” or "we" or “our”).
                    <br /><br />
                    As of the date of this Privacy Notice, UMEH Ltd, having its principal placeof business at 17 Aloe Street, Mthatha, Eastern Cape, South Africa, 5100 is under contract to be purchased by DafriGroup PLC.  DafriTechnologies  provides data processing and other services to UMEH Ltd, and its customers including the provision of web services and the placement of Cookies and similar technology and, as such, will receive information from and share data with UMEH, to the extent necessary or appropriate for the operation of DafriGroup and to manage transactions and data
                    <br /><br />
                    This notice shows our commitment to protect your privacy rights and sets out the basis on which any personal information we collect from you, or that you provide to us, will be processed by us. It applies to: the website/portal features and services provided to you when you visit our websites, portals or our payment panels our clients may use on their websites; when you apply to use and/or use DafriGroup’s products and services (including any loyalty or reward schemes, whether points-based or otherwise; your use of software including terminals, mobile and desktop applications provided by DafriGroup; and email, other electronic messages including SMS, telephone, web chat, website/portal and other communications between you and DafriGroup. Together these are all referred to in this notice as “DafriGroup Services”.
                    <br /><br />
                    Please read the following carefully to understand our views and practices regarding your personal information and how we will treat it.
                    <br /><br />
                    DafriGroup takes a ”layered approach” to explaining its privacy practices, as recommended by regulators. This means that we endeavour to initially provide you with the key privacy information in the form of this ”short form” privacy notice. Should you wish to view the comprehensive privacy notice, you can click here. Contact us details are provided at the end of the notice, for feedback or any privacy enquiries you may have.
                </p>

                <h3>Information we may collect from you</h3>
                <p>
                    You may provide some information to us, for example when you enquire for or make an application for the DafriGroup Services, register to use and/or use any DafriGroup Services, by filling in forms on one of our websites, participating in one of our loyalty or promotional events or by corresponding with us by phone, e-mail, web chat or otherwise. We may collect some of it through automatic means, for example by using cookies when you visit our websites. Read our Cookie Policy to know more. We may also obtain data about you from third parties, like credit reference and fraud prevention agencies.
                </p>

                <h3> Uses made of the information </h3>
                <p>
                    We use information we collect about you to provide you with the products we offer, to notify you about changes to our products and to improve our products. We also use this information to provide you with information about other products we or selected third parties offer which are similar to the ones you have used or enquired about or we think may be of interest to you. If you use one of our financial products, we will also use your information to assess your financial situation and to try to identify and prosecute possible frauds.
                </p>

                <h3> Disclosure of your information </h3>
                <p>
                    We will not disclose your personal information to anyone except as described in this notice.
                    <br /><br />
                    We may share your personal information with any company in the DafriGroup of companies. DafriGroup is in the process of acquiring UMEH Ltd and data may also be shared with this company to the extent appropriate or necessary in order to facilitate transactions for DafriBank or DafriExchange (or other DafriGroup) customers to purchase goods and services from retailers and other merchants contracted to UMEH (or other relevant DafriGroup companies). UMEH's privacy notice is available via the Contact us links or the address below.
                    <br /><br />
                    We may share your personal information with third parties to provide you with the products we offer, including service providers, credit reference agencies and financial institutions. We may also share your personal information with third parties to prevent crime and reduce risk, if required to do so by law, where we deem it appropriate to do so, to respond to legal process or to protect the rights or property of DafriGroup, our customers or others.
                </p>
                

                <h3>Where we store your personal information and data security</h3>
                <p>
                    The information that we collect from you may be transferred to, stored at and processed by recipients located in destinations outside the SADC. These countries may have data protection standards that are different to (and, in some cases, lower than) those in which you reside. We will take all steps necessary to ensure that the recipients will use and protect your information in the same secure way that we do.
                    <br /><br />
                    If we have given you (or if you have chosen) a password, access code or any other secure means or access or authentication which enables you to access certain parts of our site, you are responsible for keeping this password confidential and complying with our instructions. You must not share credentials with anyone else, and you authorise DafriGroup to act upon instructions and information from any person that enters your credentials.
                    <br /><br />
                    The transmission of information via the internet is not completely secure. Although we will do our best to protect your personal information, we cannot guarantee the security of your data transmitted to our site, unless you are communicating with us through a secure channel that we have provided. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
                </p>


                <h3> Your rights </h3>
                <p>
                    Where applicable, you may have certain rights under data protection legislation, including the right to access, correct, update or delete your personal information; object to or restrict its processing; request to transfer certain of your personal information to another service provider (so called, data portability); or to revoke any consent you have given.
                    <br /><br />
                    However, please note that there are exceptions to those rights. For the full explanation of the rights available, please refer to the comprehensive privacy notice. 
                </p>

                <h3>Automated decision making </h3>
                <p>
                    Automated decisions mean that a decision concerning you is made automatically on the basis of a computer determination (using software algorithms), without our human review.
                    <br /><br />
                    For example, we may use automated decisions to complete a credit assessment on you when you apply for certain financial services of Paysafe, or to carry out anti-fraud checks on the transactions you perform. However, if you are in the European Union, you have the right to object the automated decision and have it manually reviewed based also on information that you can provide. You can contact us at the details below to exercise your right.
                </p>

                <h3>Legal basis for processing</h3>
                <p>We will process your personal information only when we have one of the following grounds:</p>
                <ul>
                    <li>On the basis of your consent, for example to send you marketing messages to the extent consent is required by law;</li>
                    <li>Where necessary to enter into a contract with you and perform our obligations under that contract;</li>
                    <li>Where we have a legitimate interest, subject to such processing not overriding your own rights and freedoms;</li>
                    <li>Where we have a legal obligation to collect your personal information or otherwise need your Personal Information to protect your vital interests or those of another person; or Exceptionally, when necessary in the public interest, for example when law enforcement agencies request information to investigate a crime;</li>
                </ul>


                <h3>Changes To Our Privacy Notice </h3>
                <p>
                    Any changes we may make to our privacy notice in the future will be posted on this page and, where appropriate, notified to you by e-mail.<br /><br />
                    Please check back frequently to see any updates or changes to our privacy notice.
                </p>

                <h3>Contact us</h3>
                <p>
                    All comments, queries and requests relating to our use of your information are welcomed. If you wish to exercise any of your rights or receive further information as to the applicable DafriGroup companies to which this notice applies, you should write to the address below, marked FAO Privacy Department or 
                    <Link to='/contact'> Contact us. </Link>
                </p>
            </div>

        </div>
    </section>);
}

export default Privacy;