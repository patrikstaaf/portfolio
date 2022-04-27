import { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import Projects from './Projects';

export default function About() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type=="project"]`)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <section className='grid place-items-center my-10'>
        About me
        <br />
        blablablablaa
      </section>
      <Projects projects={projects} />
    </>
  );
}
