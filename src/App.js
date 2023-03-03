import './App.scss';
import { useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home/home';
import About from './containers/about/about';
import Resume from './containers/resume/resume';
import Skills from './containers/skills/skills';
import Portfolio from './containers/portfolio/portfolio';
import Contact from './containers/contact/contact';
import NavBar from './components/navBar/navBar';
import particles from './misc/particles';
function App() {

  const init = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  const location = useLocation();
  const renderParticleJsOnlyInHomePage = location.pathname === '/';

  return (
    <div className="App">

      {renderParticleJsOnlyInHomePage && (
        <Particles options={particles} init={init}/>
      )}

      

      <NavBar/>

      <div className="App__main-page-content">
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
