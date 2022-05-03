import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import SingleProject from './components/SingleProject';
import Footer from './components/Footer';
import TimelinePage from './components/TimelinePage';

const App = () => {
  return (
    <BrowserRouter>
      <div className='mx-auto antialiased max-w-2xl font-inter pt-20 pb-32 w-full'>
        <Routes>
          <Route element={<NotFound />} path='*' />
          <Route element={<About />} path='/' />
          <Route element={<TimelinePage />} path='/timeline' />
          <Route element={<Projects />} path='/projects' />
          <Route element={<SingleProject />} path='/project/:slug' />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
