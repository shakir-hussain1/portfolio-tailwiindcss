import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("msg") as HTMLTextAreaElement)
      .value;

    if (!name || !email || !message) {
      alert("Please enter fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    // For sending data to an API or backend
    alert("Message sent successfully!");
  };

  return (
    <div id="contact" className="pt-32 container color text-black">
      <div className="grid md:grid-cols-2 gap-10 md:gap-6">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className=" text-blue-900 underline text-5xl" data-aos="">
            Contact Us
          </h2>
          <p className="text-black text-[18px] pt-2" data-aos="">
            Feel free to contact us.
          </p>

          <div className="flex gap-3 items-center" data-aos="">
            <AiOutlineMail size={30} />{" "}
            <a href="mailto:shasain01@gmail.com">shasain01@gmail.com</a>
          </div>
          <div className="flex gap-3 items-center" data-aos="">
            <BsTelephone size={30} />{" "}
            <a href="tel:+923332242692">+923332242692</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-1" data-aos="">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="h-[40px] bg-transparent border border-accent"
                id="name"
                aria-label="Your name"
                required
              />
            </div>
            <div className="flex flex-col gap-1" data-aos="">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="h-[40px] bg-transparent border border-accent"
                id="email"
                aria-label="Your email"
                required
              />
            </div>
            <div className="flex flex-col gap-1" data-aos="">
              <label htmlFor="msg">Message</label>
              <textarea
                className="bg-transparent border border-accent min-h-[100px] resize-none"
                id="msg"
                aria-label="Your message"
                rows={8}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-accent p-2 px-6 bg-orange-500 hover:bg-accent-light transition duration-300 hover:bg-red-500"
              data-aos=""
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
