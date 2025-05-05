import React, { useRef } from 'react';
import "./Contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5vh1iuj', 'template_l739q3x', form.current, 'Zcay7d-YlvEEjPRz-')
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message, please try again.');
        });

        e.target.reset();
    };

    return (
        <section className='contact container section' id='contact'>
            <h2 className='section_title'>Get in Touch</h2>
            <div className='contact_container grid'>
                <h3 className='contact_title'>Let's talk about Everything</h3>
                <p className='contact_details'>Don't like forms? Send me an email 👋</p>
            </div>
            <form ref={form} onSubmit={sendEmail} className='contact_form'>
                <div className='contact_form-group'>
                    <div className='contact_form-div'>
                        <input type="text" name="from_name" className='contact_form-input' placeholder='Insert your name' />
                    </div>
                    <div className='contact_form-div'>
                        <input type="email" name="from_email" className='contact_form-input' placeholder='Insert your email' />
                    </div>
                    <div className='contact_form-div'>
                        <input type="text" name="subject" className='contact_form-input' placeholder='Insert your subject' />
                    </div>
                    <div className='contact_form-div'>
                        <textarea name="message" cols="10" rows="5" className='contact_form-area' placeholder="Write your message"></textarea>
                    </div>
                    <button className='btn'>Send Message</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;
