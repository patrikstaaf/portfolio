import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import SingleProject from './components/SingleProject';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar contact='Contact' />
      <main className='max-w-2xl mx-auto antialiased p-4'>
        <Routes>
          <Route element={<NotFound />} path='*' />
          <Route element={<Home />} path='/' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<SingleProject />} path='/project/:slug' />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
