import './App.css';
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';
import Nav from './components/Nav.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const Root = () => {
  return(
    <>
      <Nav />
      <Outlet />
      <footer>
        Footer
      </footer>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/product/:id',
        element: <Product />
      }
    ]
  }
])

function App() {  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
