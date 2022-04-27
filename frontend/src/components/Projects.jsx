import { Link } from 'react-router-dom';

export default function Projects({ projects }) {
  return (
    <>
      {console.log(projects)}
      {projects &&
        projects.map((project, index) => (
          <article key={index} className='w-full bg-red-200'>
            <Link
              to={'/project/' + project.slug.current}
              className='flex justify-between p-4'
            >
              <span>{project.title}</span>
              <span>{project.year}</span>
            </Link>
          </article>
        ))}
    </>
  );
}
