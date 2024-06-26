import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import graphql from '../assets/graphql.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import redux from '../assets/redux.png';
import nodejs from '../assets/nodejs.png';
import mysql from '../assets/mysql.png';
import mongodb from '../assets/monogodb.png';
import sass from '../assets/sass.png';
import api from '../assets/api.png';
import jwt from '../assets/jwt.png';
import git from '../assets/git.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: redux,
      title: 'Redux',
      style: 'shadow-purple-500',
    },
    {
      id: 7,
      src: graphql,
      title: 'GraphQL',
      style: 'shadow-pink-400',
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
    {
      id: 9,
      src: sass,
      title: 'SASS',
      style: 'shadow-pink-400',
    },
    {
      id: 10,
      src: nodejs,
      title: 'Node.js',
      style: 'shadow-green-500',
    },
    {
      id: 11,
      src: mysql,
      title: 'MySQL',
      style: 'shadow-orange-500',
    },
    {
      id: 12,
      src: mongodb,
      title: 'MONGODB',
      style: 'shadow-green-500 h-[136px]',
    },
    {
      id: 13,
      src: api,
      title: 'REST API',
      style: 'shadow-sky-400',
    },
    {
      id: 14,
      src: jwt,
      title: 'JWT',
      style: 'shadow-sky-400',
    },
    {
      id: 15,
      src: git,
      title: 'GIT',
      style: 'shadow-orange-500',
    },
  ];

  return (
    <div
      name='experience'
      className='bg-gradient-to-b  from-gray-900 to-black w-full pb-32'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Experience
          </p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=''
                className='w-20 h-20 object-contain mx-auto'
              />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
