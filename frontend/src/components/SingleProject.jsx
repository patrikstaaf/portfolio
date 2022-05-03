import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const SingleProject = () => {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    sanityClient
      .fetch(`*[slug.current == "${slug}"]`)
      .then((data) => setSingleProject(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleProject) return <div className='hidden'>Loading...</div>;

  return (
    <>
      <h1 className='font-extrabold text-4xl mb-8 text-slate-800 px-4'>
        {singleProject.title}
      </h1>
      <div className='w-full flex justify-between px-4'>
        <div>
          <span className='text-gray-500'>{singleProject.projectType}</span>
          <span className='px-2 text-gray-500'>•</span>
          {singleProject.tags.length > 0 &&
            singleProject.tags.map((tag, index) => (
              <span className=' bg-gray-200 rounded-lg p-1 mx-1' key={index}>
                {tag}
              </span>
            ))}
        </div>
        <div>
          <button
            onClick={() => navigate(-1)}
            className='text-gray-500 underline'
          >
            Back
          </button>
        </div>
      </div>
      <img
        src={urlFor(singleProject.projectImage).url()}
        alt={singleProject.projectImage.alt}
        className='mx-auto my-6 px-4 rounded-lg'
      />
      <p className='mb-4 text-left px-4 leading-7'>
        {singleProject.description}
      </p>
      <div className='px-4'>
        {!singleProject.link ? (
          <p className='py-1 leading-7'>Url: Not deployed.</p>
        ) : (
          <p className='py-1 leading-7'>
            Url:{' '}
            <a
              href={singleProject.link}
              className='underline text-blue-600 underline-offset-4'
              target='_blank'
              rel='noopener noreferrer'
            >
              {singleProject.link}
            </a>
          </p>
        )}

        <p className='py-1 leading-7'>
          GitHub:{' '}
          <a
            href={singleProject.github}
            className='underline text-blue-600 underline-offset-4'
            target='_blank'
            rel='noopener noreferrer'
          >
            {singleProject.github}
          </a>
        </p>
      </div>
    </>
  );
};

export default SingleProject;
