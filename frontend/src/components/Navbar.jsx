import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='mb-8 flex justify-end gap-3 w-full px-4'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? 'text-slate-800 no-underline' : 'text-gray-500 underline'
        }
      >
        About
      </NavLink>
      <NavLink
        to='/timeline'
        className={({ isActive }) =>
          isActive ? 'text-slate-800 no-underline' : 'text-gray-500 underline'
        }
      >
        Timeline
      </NavLink>
      <NavLink
        to='/projects'
        className={({ isActive }) =>
          isActive ? 'text-slate-800 no-underline' : 'text-gray-500 underline'
        }
      >
        Projects
      </NavLink>
    </nav>
  );
};

export default Navbar;
