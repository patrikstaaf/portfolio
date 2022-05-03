import Navbar from './Navbar';

const NotFound = () => {
  return (
    <>
      <h1 className='font-extrabold text-4xl mb-8 text-slate-800 px-4'>
        Not Found
      </h1>
      <Navbar />
      <div className='text-center w-full'>Page doesn't exist.</div>
    </>
  );
};

export default NotFound;
