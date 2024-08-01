import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Gallery from './components/Gallery.jsx';
import Form from './components/Form.jsx';

function App() {
  const [search, setSearch] = useState('');
  return (
    <BrowserRouter>
    <div className='container'>
      <div>
        <h1 className='title'>SnapShot</h1>
        <Form search={search} setSearch={setSearch} />
        <nav className='main-nav'>
        <ul>
          <li>
            <NavLink to={ '/' }>Mountain</NavLink>
          </li>
          <li>
            <NavLink to={ '/beaches' }>Beaches</NavLink>
          </li>
          <li>
            <NavLink to={ '/birds' }>Birds</NavLink>
          </li>
          <li>
            <NavLink to={ '/food' }>Food</NavLink>
          </li>
        </ul>
      </nav>
      </div>
      <Routes>
        <Route path='/' element={<Gallery title={'Mountain'} />} />
        <Route path='/beaches' element={<Gallery title={'Beach'} />} />
        <Route path='/birds' element={<Gallery title={'Bird'} />} />
        <Route path='/food' element={<Gallery title={'Food'} />} />
        <Route path='/search' element={<Gallery title={search}/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
