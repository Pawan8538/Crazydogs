import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Dog from './components/Dog';
import Images from './components/Images';
import Navbar from './components/Navbar';
import Random from './components/Random';
import { SearchProvider } from './context/SearchContext';

function App() {


  return (
    <>
      <div>
        <SearchProvider>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path='/' element={<Dog />} ></Route>
              <Route path='/about' element={<About />} ></Route>
              <Route path='/images' element={<Images />} ></Route>
              <Route path='/random' element={<Random />} ></Route>
            </Routes>

          </BrowserRouter>
        </SearchProvider>
      </div>
    </>
  );
}

export default App;
