import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import sanityClient from '../client.js';
import Navbar from './Navbar.jsx';

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type=="project"] | order(order asc)`)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <h1 className='font-extrabold text-4xl mb-8 text-slate-800 px-4'>
        Projects
      </h1>
      <Navbar />
      <p className='mb-8 px-4 leading-7'>
        Below are some of my projects that I hope to soon look back at with
        great disgrace (read improvement). I also look forward to the day when I
        can say “I let my work speak for itself”, but apart from my dry, deadpan
        humor, I do take pride in my work and strive daily to improve, step by
        step (error by error).
      </p>
      <ul>
        {projects &&
          projects.map((project, index) => (
            <li
              key={index}
              className='w-full hover:bg-gray-50 rounded-lg my-2 relative'
            >
              <NavLink
                to={'/project/' + project.slug.current}
                className='flex justify-around p-4'
              >
                <div>
                  <span className='mr-2 font-semibold'>{project.title}</span>
                  <span className='text-sm text-gray-500'>
                    {project.explanation}
                  </span>
                </div>
                <div className='border-b-2 border-dotted border-[#e2e2e2] grow mb-2 mx-4'></div>
                <div>
                  <span>{project.year}</span>
                </div>
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Projects;
