import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name='home'
      className='h-[100vh] w-full bg-gradient-to-b from-black via-black  to-gray-900'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-center lg:text-left lg:flex-row'>
        <div className='flex flex-[2] flex-col gap-5 lg:gap-1 justify-center h-full my-20'>
          <h2 className='text-4xl md:text-5xl lg:text-7xl font-bold text-white mt-32 md:mt-72 lg:mt-0'>
            I'm a Full stack Developer
          </h2>
          <p className='py-4 text-gray-500 max-w-md mx-auto lg:m-0'>
            Dynamic Full-Stack Developer | Expertise in React.js, Node.js,
            MongoDB, MySQL | Passionate about Crafting Immersive Web
            Applications | Continuous Learner and Collaborator | Let's Transform
            Digital Ideas into Realities!
          </p>
          <div className='mx-auto lg:m-0'>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineArrowForwardIos />
              </span>
            </Link>
          </div>
        </div>
        <div className='flex-1'>
          <img
            src={HeroImage}
            alt='profile'
            className='mx-auto rounded-2xl w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
