import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: import.meta.env.VITE_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_STUDIO_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_STUDIO_API_VERSION,
  token: '',
  useCdn: true,
});
