// import React from "react";
// import reactFinance from "../assets/portfolio/reactFinance.png";
// import reactTravel from "../assets/portfolio/reactTravel.png";
// import social from "../assets/portfolio/social.png";
// import joblancer from "../assets/portfolio/joblancer.png";
// import reactTravel2 from "../assets/portfolio/reactTrave2.png";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: reactFinance,
//       style: "h-[174px] object-cover",
//       href: "https://amrani-farouk-hossam-eddine.github.io/react-finance/",
//       hrefCode: "https://github.com/Amrani-Farouk-Hossam-Eddine/react-finance",
//       demo: true,
//     },
//     {
//       id: 2,
//       src: reactTravel,
//       style: "h-[174px] object-cover",
//       href: "https://amrani-farouk-hossam-eddine.github.io/react-travel/",
//       hrefCode: "https://github.com/Amrani-Farouk-Hossam-Eddine/react-travel",
//       demo: true,
//     },
//     {
//       id: 3,
//       src: social,
//       style: "h-[174px] object-cover",
//       hrefCode: "https://github.com/Amrani-Farouk-Hossam-Eddine/social-media",
//       demo: false,
//     },

//     {
//       id: 4,
//       src: joblancer,
//       style: "h-[174px] object-cover",
//       hrefCode: "https://github.com/Amrani-Farouk-Hossam-Eddine/joblancer-app",
//       demo: false,
//     },
//     {
//       id: 5,
//       src: reactTravel2,
//       style: "h-[174px] object-cover",
//       href: "https://amrani-farouk-hossam-eddine.github.io/react-travelling",
//       hrefCode:
//         "https://github.com/Amrani-Farouk-Hossam-Eddine/react-travelling",
//       demo: true,
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-900 w-full text-white pb-32"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src, style, href, hrefCode, demo }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className={`rounded-md duration-200 hover:scale-105 ${style}`}
//               />
//               <div className="flex items-center justify-center">
//                 {demo && (
//                   <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                     <a href={href} target="_blank" rel="noreferrer">
//                       Demo
//                     </a>
//                   </button>
//                 )}
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   <a href={hrefCode} target="_blank" rel="noreferrer">
//                     Code
//                   </a>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
import React from 'react';
import LazyLoad from 'react-lazyload';
import reactFinance from '../assets/portfolio/reactFinance.png';
import reactTravel from '../assets/portfolio/reactTravel.png';
import social from '../assets/portfolio/social.png';
import joblancer from '../assets/portfolio/joblancer.png';
import reactTravel2 from '../assets/portfolio/reactTrave2.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactFinance,
      style: 'h-[174px] object-cover',
      href: 'https://amrani-farouk-hossam-eddine.github.io/react-finance/',
      hrefCode: 'https://github.com/Amrani-Farouk-Hossam-Eddine/react-finance',
      demo: true,
      alt: 'reactFinance',
    },
    {
      id: 2,
      src: reactTravel,
      style: 'h-[174px] object-cover',
      href: 'https://amrani-farouk-hossam-eddine.github.io/react-travel/',
      hrefCode: 'https://github.com/Amrani-Farouk-Hossam-Eddine/react-travel',
      demo: true,
      alt: 'reactTravel',
    },
    {
      id: 3,
      src: social,
      style: 'h-[174px] object-cover',
      hrefCode: 'https://github.com/Amrani-Farouk-Hossam-Eddine/social-media',
      demo: false,
      alt: 'social',
    },
    {
      id: 4,
      src: joblancer,
      style: 'h-[174px] object-cover',
      hrefCode: 'https://github.com/Amrani-Farouk-Hossam-Eddine/joblancer-app',
      demo: false,
      alt: 'joblancer',
    },
    {
      id: 5,
      src: reactTravel2,
      style: 'h-[174px] object-cover',
      href: 'https://amrani-farouk-hossam-eddine.github.io/react-travelling',
      hrefCode:
        'https://github.com/Amrani-Farouk-Hossam-Eddine/react-travelling',
      demo: true,
      alt: 'reactTravel2',
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-900 w-full text-white pb-32'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, style, href, hrefCode, demo, alt }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <LazyLoad height={200} offset={100} once>
                <img
                  loading='lazy'
                  srcSet={`${src}?width=100 100w,${src}?width=200 200w,${src}?width=400 100w,${src}?width=100 400w,${src}?width=800 800w`}
                  src={src}
                  alt={alt}
                  className={`rounded-md duration-200 hover:scale-105 ${style}`}
                />
              </LazyLoad>
              <div className='flex items-center justify-center'>
                {demo && (
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    <a href={href} target='_blank' rel='noreferrer'>
                      Demo
                    </a>
                  </button>
                )}
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  <a href={hrefCode} target='_blank' rel='noreferrer'>
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
