"use client";

import React from "react";
import Link from "next/link";
import styles from "../../page.module.css";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/chase-white-8b39621b9/",
      title: "Go to LinkedIn",
    },
    {
      icon: <AiFillMail />,
      link: "mailto:chase.t.white@hotmail.com",
      title: "Send Email to Chase White",
    },
  ];
  return (
    <section id="contact" className={styles.contact_section}>
      <article className={styles.contact_contentContainer}>
        <div className={styles.contact_text}>
          <h2></h2>
          <h2>Let's work together!</h2>
          <p>
            Please feel free to reach out to me either by filling out this
            contact form or through one of the means below. I look forward to
            speaking and working with you!
          </p>
          <ul className={styles.contactsContainer}>
            {contacts.map((social, i) => {
              return (
                <li key={i} className={styles.contact_link}>
                  <Link href={social.link} target="_blank" title={social.title}>
                    {social.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.contact_formContainer}>
          <form
            action="https://formsubmit.co/cheverlator@gmail.com"
            method="POST"
          >
            <div>
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                name="name"
                pattern="[a-zA-Z]{2,}\s{1}[a-zA-Z]{2,}"
                maxLength={"40ch"}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{3}\s{1}[0-9]{3}-[0-9]{4}"
                required
              />
              <small>Format: xxx xxx-xxxx</small>
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                pattern="^[\w-.]+@([\w-]+\.)+[\w-]{2,}$"
                maxLength={"254ch"}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                minLength={"10ch"}
                maxLength={"2500ch"}
                required
              ></textarea>
            </div>
            <small>* required</small>
            <div>
              <button className="btn btn__primary" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contact;
