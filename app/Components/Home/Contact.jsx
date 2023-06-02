"use client";

import React from "react";
import styles from "../../page.module.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className={styles.contact_section}>
      <article className={styles.contact_contentContainer}>
        <div className={styles.contact_text}>
          <h2>Let's work together!</h2>
          <p>
            Please feel free to reach out to me either by filling out this
            contact form or through one of the means below. I look forward to
            speaking and working with you!
          </p>
        </div>
        <div className={styles.contact_formContainer}>
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="organization">Organization</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contact;
