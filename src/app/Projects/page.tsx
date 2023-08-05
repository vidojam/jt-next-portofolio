
import React from 'react';
import Link from 'next/link';

const Projects: React.FC = () => {
  return (
    <section id="projects" className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap w-full mb-20'>
          <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'><strong><br/>
              Projects 2023...
              </strong></h1>
            <div className='h-1 w-20 bg-purple-500 rounded'></div>
          </div>
          <p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
          <strong>Below are a few of my most recent projects in JavaScript, React, Node.js, Next.js, Tailwind CSS, and TypeScript</strong>
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='xl:w-1/4 md:w-1/2 p-4'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src='/images/visual_story.png'
                alt='content'
              />
              <h3 className='tracking-widest text-purple-500 text-xs font-medium title-font'>
              
              </h3>
              <h2 className='text-lg text-gray-900 font-medium title-font mb-4'><strong>AN AI GENERATED VISUAL STORY</strong></h2>
              <p className='leading-relaxed text-base'>
              <strong>A program a designed to assist in the evaluation of a speakers speech structure, including the opening, body, and conclusion.<Link href="https://jt-visual-story-web.web.app/"></Link></strong>
              </p>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 p-4'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src='images/TM.png'
                alt='content'
              />
              <h3 className='tracking-widest text-purple-500 text-xs font-medium title-font'>
                
              </h3>
              <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>Evaluator Assistant</h2>
              <p className='leading-relaxed text-base'>
              A program a designed to assist in the evaluation of a speakers speech structure, including the opening, body, and conclusion.https://main.d37yfbql1dsoi8.amplifyapp.com/
              </p>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 p-4'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src='/images/Much_Todo.png'
                alt='content'
              />
              <h3 className='tracking-widest text-purple-500 text-xs font-medium title-font'>
              
              </h3>
              <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                Much Todo
              </h2>
              <p className='leading-relaxed text-base'>
              To-do lists help individuals allocate their time wisely by providing a visual representation of tasks and deadlines, enabling them to plan their day or week more effectively.
              </p>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 p-4'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <img
                className='h-40 rounded w-full object-cover object-center mb-6'
                src='/images/Timber_Login.png'
                alt='content'
              />
              <h3 className='tracking-widest text-purple-500 text-xs font-medium title-font'>
                
              </h3>
              <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>Authentication</h2>
              <p className='leading-relaxed text-base'>
              This program is a login demo that demonstrates a secure and controlled access mechanism for users, allowing them to authenticate their identity before accessing specific features, protected content, or restricted areas of an application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
