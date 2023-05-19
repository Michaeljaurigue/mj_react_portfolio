import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nw1swus",
        "template_uc3g4zc",
        form.current,
        "eOAE3Sm7wN_Zd8yAQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div>
      <div className="contact">
        <div className="contact-container">
          <h1 className="contact_header">Contact Me</h1>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input required min="1" max="50" type="text" name="from_name" />
            <label>Email</label>
            <input required min="1" max="50" type="email" name="user_email" />
            <label>Message</label>
            <textarea required min="1" name="message" />
            <input className="contact__button" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
