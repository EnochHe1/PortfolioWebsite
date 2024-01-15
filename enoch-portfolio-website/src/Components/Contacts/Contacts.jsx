import React from 'react';
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => { {/* from https://www.emailjs.com/docs/examples/reactjs/ */}
    e.preventDefault();

    emailjs.sendForm('service_acz72ed', 'template_z9jevou', form.current, 'W8XWaQXhr4ViTcozP') 
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset(); {/*Once sent message, all the inputted fields are refreshed and blank again */}
  };

  return (
    <section id="contacts">
      <h5>Get in Touch...</h5>
      <h2>Contact Me!</h2>

      <div className="container contacts__container">
        <div className="contacts__options">
          <article className="contacts__option">
            <MdOutlineEmail className="contacts__option-icon"/>
            <h4>Email</h4>
            <h5>e34he@uwaterloo.ca</h5>
            <a href="mailto:e34he@uwaterloo.ca" target="_blank" rel="noopener noreferrer">Send a Message</a> {/* rel="noopener noreferrer" basically increases security/privacy */}
          </article>
          <article className="contacts__option">
            <FaLinkedin className="contacts__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Enoch He</h5>
            <a href="https://www.linkedin.com/in/enoch-he-ab3600198/" target="_blank" rel="noopener noreferrer">Send a Message</a> {/* _blank for target means open in new window */}
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
       </form> 
        {/* ^ creates html form for user input (with multiple HTML attributes)
        input tag specifies an input field where the user can enter data
        type specifies media type (for input)
        name attribute is used to give a name to an input element within a form
        placeholder attribute is used to provide a short hint or example of the expected value of an input field 
        required attribute specifies that an input field must be filled out before submitting the form.
        */}
      </div>
    </section>
  )
}

export default Contacts