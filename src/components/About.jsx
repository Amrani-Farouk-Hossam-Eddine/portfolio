import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 md:m-0 mx-auto">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm Farouk Amrani, a dynamic full-stack developer dedicated to
          elevating online experiences through innovative solutions. With
          expertise in React.js, Node.js, MongoDB, and MySQL, I specialize in
          transforming ideas into digital realities.
        </p>
        <br />
        <p className="text-xl">
          Driven by a passion for creativity and technology, I thrive on
          crafting immersive web applications that engage users and exceed
          expectations. My portfolio showcases a range of projects where I've
          leveraged my skills to deliver impactful solutions for clients across
          various industries.
        </p>
        <br />
        <p className="text-xl">
          In addition to my technical abilities, I'm committed to continuous
          learning and staying updated on the latest trends and developments in
          the tech world. I believe in the power of collaboration and am always
          seeking new opportunities to work with like-minded individuals and
          organizations.
        </p>
        <br />
        <p className="text-xl">
          Whether you're looking to enhance your online presence, launch a new
          project, or explore innovative solutions, I'm here to help. Let's
          connect and discuss how we can bring your digital vision to life!
        </p>
      </div>
    </div>
  );
};

export default About;
