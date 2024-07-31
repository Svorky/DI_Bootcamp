import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from './components/HomeScreen.jsx';
import ProfileScreen from './components/ProfileScreen.jsx';
import ShopScreen from './components/ShopScreen.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import PostList from './components/PostList.jsx';
import Example1 from './components/Example1.jsx';
import Example2 from './components/Example2.jsx';
import Example3 from './components/Example3.jsx';
import Exercise4 from './components/Exercise4.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <nav class='nav nav-pills'>
          <NavLink
            to='/'
            className={ ({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/profile'
            className={ ({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to='/shop'
            className={ ({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to='/postlist'
            className={ ({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Post List
          </NavLink>
          <NavLink
            to='/example1'
            className={ ({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Example 1
          </NavLink>
          <NavLink
            to='/example2'
            className={ ({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Example 2
          </NavLink>
          <NavLink
            to='/example3'
            className={ ({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Example 3
          </NavLink>
          <NavLink
            to='/exercise4'
            className={ ({ isActive, isPending }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Excercise 4
          </NavLink>
        </nav>


        <Routes>
          <Route path='/' element={ <ErrorBoundary><HomeScreen /></ErrorBoundary> } />
          <Route path='/profile' element={ <ErrorBoundary><ProfileScreen /></ErrorBoundary> } />
          <Route path='/shop' element={ <ErrorBoundary><ShopScreen /></ErrorBoundary> } />
          <Route path='/postlist' element={ <PostList /> } />
          <Route path='/example1' element={ <Example1 /> } />
          <Route path='/example2' element={ <Example2 /> } />
          <Route path='/example3' element={ <Example3 /> } />
          <Route path='/exercise4' element={ <Exercise4 /> } />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
