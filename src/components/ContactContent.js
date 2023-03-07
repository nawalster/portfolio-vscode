import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContactContent.css";

const contactInfo = [
  { type: "email", text: "nawal@gmail.com", link: null },
  { type: "linkedin", text: "nawal@gmail.com", link: "https://www.google.com" },
  {
    type: "codesandbox",
    text: "nawal@gmail.com",
    link: "https://www.google.com/"
  },
  { type: "github", text: "nawal@gmail.com", link: "https://www.google.com/" }
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

            <div className="contact__single">
              {contactInfo.map((info) => (
                <div key={info.type}>
                  <span>{info.type}</span> <span>: </span>
                  {info.link !== null ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span style={{ color: "#f8816c" }}>{info.text}</span>{" "}
                      {/* add copy to clipboard? */}
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
