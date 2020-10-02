import React, { useState } from 'react';
import styles from './Contact.module.scss'
import MetaDecorator from '../MetaDecorator';
import axios from "axios"

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [newsletter, setNewsletter] = useState(false)

    const [sent, setSent] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { name, email, subject, message }

        axios.post("http://localhost:7070/contact/message", { ...data })
            .then(data => {
                console.log(data)
                setSent(true)
                setTimeout(() => setSent(false), 5000)

                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
                // setNewsletter(false)

            }).catch(error => {
                alert(error)
            })
    }


    return (<section>
        <MetaDecorator title="DafriGroup PLC - Contact" description="Contact DafriGroup PLC" />

        <header className={styles.contact}>
            <div>
                <h2>Contact Us</h2>
                <img src={require('../../assets/fucus.svg')} alt="" />
            </div>
        </header>

        <div className={styles.section}>
            <div className={styles.box}>
                <h2>Get in touch</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <div>
                            <label htmlFor="name">NAME</label>
                            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="email">EMAIL</label>
                            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="subject">SUBJECT</label>
                            <input id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="message">MESSAGE</label>
                            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </div>

                        <div>
                            <input type="checkbox" id="subscribe" value={newsletter} onChange={() => setNewsletter(!newsletter)} />
                            <label id="subscribe" htmlFor="subscribe">Want to subscribe to our newsletter as well?</label>
                        </div>
                    </div>

                    <button style={sent ? {backgroundColor: "green", pointerEvents: "none"} : null } >{sent ? 'MESSAGE SENT' : 'SUBMIT'}</button>
                </form>
            </div>

        </div>
    </section>);
}

export default Contact;