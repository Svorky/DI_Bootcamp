import './App.css';
import Product from './components/Product.jsx';
import Shop from './components/Shop.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const Root = () => {
  return(
    <>
      <Outlet />
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
        element: <Shop />
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
    <RouterProvider router={router}>
        <Shop />
        <Product />
      </RouterProvider>
    </>
  );
}

export default App;
