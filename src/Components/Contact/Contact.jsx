import "./Contact.css";
import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context/Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(
        "service_tjkblui",
        "template_5de0d19",
        form.current,
        "N7PiAcfOIUVLE6_E3"
      )
      .then(
        (result) => {
            setDone(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode? 'white' : ''}} >Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} />
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" className="button" value="Send" />
          <span>{done && "Thanks for Contatcing me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
