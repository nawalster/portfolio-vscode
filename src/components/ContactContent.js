import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContactContent.css";

const contactInfo = [
  { type: "email", text: "nawal.alsaidi@gmail.com", link: null },
  {
    type: "linkedin",
    text: "nawalalsaidi",
    link: "https://www.linkedin.com/in/nawalalsaidi",
  },
  {
    type: "codesandbox",
    text: "nawalster",
    link: "https://codesandbox.io/u/nawalster",
  },
  {
    type: "github",
    text: "nawalster",
    link: "https://github.com/nawalster",
  },
];

const ContactContent = () => {
  return (
    <div className="contactPage">
      <div className="contact">
        <h4>Reach out!</h4>
        <div className="contactContainer">
          <div className="numbers">
            {[...Array(7).keys()].map((num) => {
              return <span key={num}>{num + 1}</span>;
            })}
          </div>
          <div className="contactContainer__inner">
            <span className="contact__title" style={{ color: "#f8816c" }}>
              .socials <span style={{ color: "white" }}>{`{`}</span>
            </span>

            <div>
              {contactInfo.map((info) => (
                <div className="contact__single" key={info.type}>
                  <span>{info.type}</span> <span>: </span>
                  {info.link !== null ? (
                    <a
                      className="link__single"
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f8816c" }}
                    >
                      <span>{info.text}</span>
                    </a>
                  ) : (
                    <span style={{ color: "#f8816c" }}>{info.text}</span>
                  )}
                  <span>;</span>
                </div>
              ))}
            </div>
            <span>{`}`}</span>
          </div>
        </div>
      </div>
      <div className="form">
        <h4>Or fill Out This Form</h4>
      </div>
    </div>
  );
};
export default ContactContent;
