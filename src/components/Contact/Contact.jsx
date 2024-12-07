import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9dwg0yb', 'template_rx6qblc', form.current, 'FdmN7D6KATfmnUDOE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="contact" id="contact-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter your e-mail address' />
                    <button className='btn btn-j'>contact Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact