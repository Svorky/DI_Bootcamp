import './App.css';
import { Route, Routes  } from 'react-router-dom'
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';
import Nav from './components/Nav.jsx';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/double" element={
          <>
          <Shop />
          <About />
          </>
        } />
        <Route path='/product/:id' element={<Product />}/>
    </Routes>
    </>
  );
}

export default App;
