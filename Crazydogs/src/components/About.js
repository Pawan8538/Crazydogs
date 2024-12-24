import React from 'react'
import '..//App.css'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className='container-fluid  about-color d-flex align-items-center ab'>
        <div className='container'>
          <div className='row d-flex align-items-center'>

            <div className='col-lg-4 col-md-4'>
              <div className="card-body text-center py-3 cd">
                <h3 className="card-title my-1">About us</h3>
                <p className="card-text"> Welcome to our dog website! We provide information related to several dog breeds. Number of images of dogs and random dog information with image. </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-4'>
              <div className="card-body text-center py-2 cd">
                <h3 className="card-title my-1">Links</h3>
                <Link to='/' className="card-text">Home</Link>
                <Link to='/about' className="card-text">About</Link>
                <Link to='/images' className="card-text">Images</Link>
                <Link to='/random' className="card-text">Random</Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-4'>
              <div className="card-body text-center py-2 cd">
                <h3 className="card-title my-1">Connect us</h3>
                <a href="mailto:pawanpatidar8538@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="https://linkedin.com/in/pawan-patidar-47600232b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Pawan8538" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fa-brands fa-github"></i> 
                  </a>
                <a href="https://twitter.com/@PawanPatidar538" target="_blank"  rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
