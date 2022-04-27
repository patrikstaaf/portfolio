import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function SingleProject() {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(`*[slug.current == "${slug}"]`)
      .then((data) => setSingleProject(data[0]))
      .catch(console.error);
  }, [slug]);

  console.log(singleProject);
  if (!singleProject) return <div className='hidden'>Loading...</div>;

  return (
    <div>
      <p>Single Project</p>
      <h1 className='text-xl lg:text-6xl mb-4'>{singleProject.title}</h1>
      {/* {console.log(singleProject.projectImage)} */}
      <img
        src={urlFor(singleProject.projectImage).size(300, 150).url()}
        alt={singleProject.projectImage.alt}
      />
    </div>
  );
}
