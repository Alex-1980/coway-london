import './App.css';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: '/about', element: <About />},
      {path: '/products', element: <Products />},
      {path: '/gallery', element: <Gallery />},
      {path: '/contact', element: <Contact />},
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
