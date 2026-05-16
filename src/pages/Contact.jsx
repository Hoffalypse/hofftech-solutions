import { useState, useRef } from "react";
import { blue, earth } from "../assets";

import emailjs from "@emailjs/browser";
import { Row, Col, Container } from "react-bootstrap";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_5cukdxg",
        "template_209soxi",
        {
          from_name: form.name,
          to_name: "Bryan",
          from_email: form.email,
          to_email: "bhoff1980@gmail.com",
          message: form.message,
        },
        "vjQDfUjeSUkJbD3zS"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You! We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went Wrong");
        }
      );
  };
  return (
    <div className="bg-black  overflow-hidden">
      <div>
        <div className="flex justify-center mt-[25px]">
          <a href="./">
            <img src={blue} className="w-[250px]" />
          </a>
        </div>
      <div className="ml-[60px]">
        <p
          className={`sm:text-[18px] text-[14px] blue uppercase tracking-wider`}
        >
          Get in Touch
        </p>
        <h3
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          Contact
        </h3>
        </div>
        <Container>
          <Row>
            <Col xs={6}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col gap-8 ml-[-80px]"
              >
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="bg-tertiary py-4 px-3 placeholder:text-secondary bg-slate-500 text-white rounded-lg outlined-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    Your Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="bg-tertiary py-4 px-3 placeholder:text-secondary bg-slate-500 text-white rounded-lg outlined-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    Your Message
                  </span>
                  <textarea
                    rows="7"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What can we do to help your business?"
                    className="bg-tertiary py-4 px-3 placeholder:text-secondary bg-slate-500 text-white rounded-lg outlined-none border-none font-medium"
                  />
                </label>
                <div className="flex justify-center">
                  <button type="submit" className=" send ">
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </Col>
            <Col>
              <img
                src={earth}
                alt="earth at night"
                className="w-[800px] mt-40 ml-24"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
