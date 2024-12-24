import React, { useState, useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import '..//App.css'
import doglogo from './doglogo.svg'
import SearchContext from '../context/SearchContext';

const Navbar = () => {

  const { query, setQuery } = useContext(SearchContext);
  const [mode, setMode] = useState('');
  const [darkMode, setDarkMode] = useState('light');

  const handleInputSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    const rootElement = document.body
    if (darkMode) {
      rootElement.classList.add('body');
    } else {
      rootElement.classList.remove('body')
    }
  }

  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleActive = (act) => {
    setMode(act);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg  ${darkMode ? 'light' : 'dark'}`} >
        <div className={`container-fluid ${darkMode ? 'light' : 'dark'}`}>
          <nav className="navbar-brand" to=""><img height={'60'} width={'100px'} src={doglogo} alt='logo'></img></nav>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${mode === 'home' ? 'opac' : 'op'}`} aria-current="page" to="/" onClick={() => handleActive('home')} >Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${mode === 'about' ? 'opac' : 'op'}`} to="/about" onClick={() => handleActive('about')}  >About</Link>
              </li>
              <li>
                <Link className={`nav-link ${mode === 'images' ? 'opac' : 'op'}`} to="/images" onClick={() => handleActive('images')}>Images</Link>
              </li>
              <li>
                <Link className={`nav-link ${mode === 'random' ? 'opac' : 'op'}`} to="/random" onClick={() => handleActive('random')}>Random</Link>
              </li>
            </ul>
            <div className='d-flex' onClick={handleDarkMode} style={{ fontSize: '2rem', marginRight: '10px', cursor: 'pointer' }}>{darkMode ? '🌜' : '☀️'}</div>
            <div className={`${isHome ? 'show' : 'collapse'}`} >
              <form className={`d-flex`} role="search">
                <input className="form-control me-2" type="Search" placeholder="Search Name" aria-label="Search" value={query} onChange={handleInputSearch} />
                <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar