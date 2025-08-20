"use client";
import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import Image from "next/image";
const ContactForm = () => {
  const MotionForm = motion(Form);
  const form = useRef();
  const handleSub = (e) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_e5zrxsm",
        "template_x2c5eih",
        form.current,
        "Gal7UQ1TfDcNaBwkI"
      )
      .then(() => {
        alert("the email was sent succesfully");
        console.log("form", form.current);
        form.current.reset();
      })
      .catch((err) => {
        alert("sorry your email has not been sent try again");
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="contact"
    >
      <MotionForm
        ref={form}
        onSubmit={handleSub}
        initial={{
          background: "linear-gradient(135deg, #2c003e, #390ca3, #4362eef3)",
        }}
        animate={{
          background: [
            "linear-gradient(135deg, #2c003e, #390ca3, #4362eef3)",
            "linear-gradient(135deg, #4362eef3, #390ca3, #2c003e)",
            "linear-gradient(135deg, #2c003e, #390ca3, #4362eef3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="form"
      >
        <div className="head">
          <h1>
            You may contact me here, and I will respond at the earliest
            opportunity.
          </h1>
        </div>
        <div className="email-name">
          <Form.Group
            className="underForm"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="full name"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group
            className="underForm"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              required
            />
          </Form.Group>
        </div>

        <Form.Group
          className="underForm"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="message"
            name="message"
            required
          />
        </Form.Group>
        <div className="submit">
          <Button className="btn" type="submit">
            Send the message
          </Button>
        </div>
      </MotionForm>
      <motion.div
        // initial={{ scale: 0 }}
        // whileInView={{ scale: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true }}
        className="link-container"
      >
        <Link href={"https://github.com/akram156"} target="_blank">
          <motion.i
            className="fa-brands fa-github fa-2xl"
            style={{ color: "#FACC15", cursor: "pointer" }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          ></motion.i>
        </Link>
        <Link href={"https://github.com/akram156"} target="_blank">
          <motion.i
            className="fa-brands fa-linkedin fa-2xl"
            style={{ color: "#3807fc", cursor: "pointer" }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          ></motion.i>
        </Link>

        <Link href={"https://t.me/Akram_akram15"} target="_blank">
          <motion.i
            className="fa-brands fa-telegram fa-2xl"
            style={{ color: "#3584e4", cursor: "pointer" }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          ></motion.i>
        </Link>

        {/* <Link href={"https://wa.me/213563494519?text=Hello%20I%20am%20interested%20in%20your%20portfolio"} target="_blank">
          <motion.i
            className="fa-brands fa-whatsapp fa-2xl" 
            style={{ color: " #04fa15", cursor: "pointer" }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          ></motion.i>
        </Link> */}
        <Link
          href="https://wa.me/213563494519?text=Hello%20I%20am%20interested%20in%20your%20portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.i
            className="fa-brands fa-whatsapp fa-2xl"
            style={{ color: "#04fa15", cursor: "pointer" }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          ></motion.i>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
