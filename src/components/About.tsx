// New File: About.tsx
import React from "react";

const About = () => {
  return (
    <div id="about" className="container pt-32">
      <h2 className="text-4xl text-blue-900 underline md:text-5xl" data-aos="">
        About Me
      </h2>
      <div className="text-black pt-4" data-aos="">
        <p>
          I’m Shakir Hussain, a professional with a Master’s in Physics and
          expertise in Web Development and Cybersecurity. With a strong
          analytical background, I approach challenges by breaking down complex
          problems into practical, secure solutions.
        </p>
        <br />

        <p>
          I specialize in building user-friendly websites and applications,
          ensuring they are both high-performance and protected from security
          threats. Always evolving, I combine my technical skills with a passion
          for innovation to deliver reliable, scalable digital solutions.
        </p>
        <br />

        <p>
          Let’s connect and explore how I can help bring your ideas to life with
          a focus on security and efficiency.
        </p>
      </div>
    </div>
  );
};

export default About;
