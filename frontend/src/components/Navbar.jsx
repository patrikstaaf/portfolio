import { Link } from 'react-router-dom';

export default function Navbar({ contact }) {
  return (
    <nav className='flex justify-between w-full max-w-2xl mx-auto antialiased p-4'>
      <Link to='/'>Logo</Link>
      <Link to='/contact'>{contact}</Link>
    </nav>
  );
}
