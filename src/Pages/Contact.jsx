import { useRef } from "react";
import emailjs from "@emailjs/browser";

import FormInput from "../Components/Form/FormInput";
import FormTextArea from "../Components/Form/FormTextArea";
import FormGroup from "../Components/Form/FormGroup";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace the strings below with your actual IDs from the EmailJS Dashboard
    emailjs
      .sendForm(
        "service_portfolio",   // Found in 'Email Services' tab
        "template_0wlsw74",  // Found in 'Email Templates' tab
        form.current,        // Points to the form below
        "IizRCpbno6QQIomHC"    // Found in 'Account' > 'API Keys'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset(); // Clears the form only on success
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please check your IDs.");
        }
      );
  };

  return (
    <section id="contact" className="mt-20 text-[#9f7b75]">
      <h1 className="text-2xl border-b-4 rounded mx-auto font-bold w-fit pb-1">
        Contact Us
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto backdrop-blur-md p-8 rounded-2xl shadow-md space-y-6 mt-8"
      >
        <FormGroup label="Name" htmlFor="name">
          <FormInput name="from_name" id="name" placeholder="Enter your name" required />
        </FormGroup>

        <FormGroup label="Email" htmlFor="email">
          <FormInput name="from_email" id="email" type="email" placeholder="Enter your email" required />
        </FormGroup>

        <FormGroup label="Message" htmlFor="message">
          <FormTextArea name="message" id="message" placeholder="Write your message here..." required />
        </FormGroup>

        <button
          type="submit"
          className="w-full bg-[#F5AFAF] text-white py-3 rounded-lg font-semibold shadow hover:bg-[#c1a2a2] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}