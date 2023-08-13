
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
          <img
            className='object-cover object-center rounded-lg'
            alt='hero'
            src="/images/jose.png"
          />
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'><strong>Jose A. Torres</strong>
            <br className='hidden lg:inline-block' />
            Software Engineer
          </h1>
          <p className='mb-8 leading-relaxed'>
          As a creative and resourceful software engineer, I find immense joy in assisting clients and helping them achieve their objectives. My dedication to the craft is evident in the pride I take in my work. The ever-evolving landscape of software engineering excites me, and I approach the future with confidence, knowing that my contributions to the field will be meaningful and impactful.
          </p>
          <div className='flex justify-center'>
             <button className="scale-90 hover:scale-100 inline-flex text-black bg-[#133090] border-0 py-2 px-6 focus:outline-none hover:bg-[#175f67] rounded hover:text-white btn-lg text-lg"><a href="/src/app/Projects/page.tsx"></a>
                 View some of my recent work.
            </button>
           <div>
              <button className="scale-90 hover:scale-100 ml-4 inline-flex text-black bg-[#26cdd3] border-0 py-2 px-6      focus:outline-none hover:bg-[#175f67] rounded hover:text-white text-lg">
               <a href="/images/Jose_Torres_Resume_2023.pdf" rel="noopener noreferrer" target="_blank">
                 Resume
               </a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// import React from 'react';

// const Hero: React.FC = () => {
//   return (
//     <section className="grid grid-cols-2 gap-4 object-cover lg:h-screen md:h-screen text-gray-400 bg-gray-900 body-font">
//       <div className="container bg-indigo-300 mx-auto flex px-5 py-24 md:flex-row flex-row lg:flex-row items-right">
//         <div className="lg:max-w-lg lg:w-full md:w-full w-5/6 md:mb-0 mb-10">
//           <img
//             className="shadow-[0px_10px_200px_25px] shadow-center shadow-[#268bd3] scale-90 hover:scale-100 hover:shadow-2xl transition ease-in-out duration-500 object-cover object-center rounded-lg"
//             alt="hero"
//             src="/images/jose.png"
//           />
//         </div>

//         <div className="lg:flex-grow md:w-3/4 lg:pl-36 md:pl-16 flex flex-row md:items-start md:text-left items-center text-center">
//           <h1 className="title-font md:text-4xl text-3xl mb-4 font-xxl text-black"><strong>
//             Jose A. Torres</strong>
//             <br />
//             <br />
//             Software Engineer
//             <br />
//             <br />
//           </h1>
//           <p className="mb-8 text-xl flex flex-row leading-relaxed">
//             As a creative and resourceful software engineer, I find immense joy in assisting clients and helping them achieve their objectives. My dedication to the craft is evident in the pride I take in my work. The ever-evolving landscape of software engineering excites me, and I approach the future with confidence, knowing that my contributions to the field will be meaningful and impactful.
//           </p>
//           <br />


//           <div className="flex justify-center">
//             <button className="scale-90 hover:scale-100 inline-flex text-black bg-[#133090] border-0 py-2 px-6 focus:outline-none hover:bg-[#175f67] rounded hover:text-white btn-lg text-lg">
//               <a href="https://bocacode.com/candidates/software-engineer/jose-torres" rel="noopener noreferrer" target="_blank">
//                 View some of my recent work.
//               </a>
//             </button>
//             <div>
//               <button className="scale-90 hover:scale-100 ml-4 inline-flex text-black bg-[#26cdd3] border-0 py-2 px-6      focus:outline-none hover:bg-[#175f67] rounded hover:text-white text-lg">
//                 <a href="/images/Jose_Torres_Resume_2023.pdf" rel="noopener noreferrer" target="_blank">
//                   Resume
//                 </a>
//               </button>
//             </div>
//           </div>
//           <br />


//           <div className="p-8 grid lg:grid-4 md:grid-cols-2 grid-cols-1 gap-4">
//             <a href="https://github.com/vidojam" className="scale-90 hover:scale-100 ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer">
//               <img src="/images/github.svg" height="50" width="50" alt="link to project" />
//             </a>
//             <a href="https://www.linkedin.com/in/jose-torres-dev" className="scale-90 hover:scale-100 ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer">
//               <img src="/images/linkedin.svg" height="50" width="50" alt="link to project" />
//             </a>
//             <a href="https://jt-portfolio-site.web.app/about" className="scale-90 hover:scale-100 ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer">
//               <img src="/images/link.svg" height="50" width="50" alt="link to project" />
//             </a>
//             <a href="mailto:jose.torres@gmail.com" className="scale-90 hover:scale-100 ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer">
//               <img src="/images/email.svg" height="50" width="50" alt="link to project" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
