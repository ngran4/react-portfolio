import React, { useRef }from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gcjc9e9', 'template_ylcw4mf', form.current, 'zb_Eqzff2flZ2vHem')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      {/* <h5>Get In Touch</h5> */}
      <h2>CONTACT ME</h2>

      <div className="container contact__container montserrat">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nicgranville@gmail.com</h5>
            <a href="mailto:nicgranville@gmail.com" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary btn-contact montserrat'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact