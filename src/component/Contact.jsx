import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_w5q4p98', // Replace with your EmailJS service ID
        'template_it1p3qf', // Replace with your EmailJS template ID
        e.target,
        'ZxE5146PAdEJGnv_e' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send the message. Please try again.');
        }
      );

    // Reset the form
    e.target.reset();
  };

  return (
    <div id="Contact" className="w-full third_bg flex flex-col items-center z-20">
      <div className="w-full flex items-center justify-center">
        <h1
          className="text-white text-[2.4rem] font-bold mt-[6rem]
         max-md:text-[2rem]"
        >
          Contact Me
        </h1>
      </div>

      <div className="w-full flex items-center justify-center p-[4rem]">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={sendEmail}
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-3 max-sm:flex-col">
              <input
                className="primary_bg py-[1rem] px-[2.2rem] outline-none rounded-lg text-white"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                className="primary_bg py-[1rem] px-[2.2rem] outline-none rounded-lg text-white"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="flex items-center justify-center gap-3 max-sm:flex-col">
              <input
                className="primary_bg py-[1rem] px-[2.2rem] outline-none rounded-lg text-white"
                type="text"
                name="phone"
                placeholder="Phone Number"
              />
              <input
                className="primary_bg py-[1rem] px-[2.2rem] outline-none rounded-lg text-white"
                type="text"
                name="subject"
                placeholder="Email Subject"
              />
            </div>

            <textarea
              className="w-full h-[200px] primary_bg rounded-lg px-[2rem] pt-[1rem] text-white"
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
          </div>

          <button
            className="p-[1rem] primary_bg text-white my-[2rem] text-[1rem] font-semibold rounded-md"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
