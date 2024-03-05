import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Info from './pages/Info';
import NotFoundPage from './pages/404';

const routers = createBrowserRouter([
  {
    path : "/",
    element : <Home />,
  },
  {
    path : '/contact',
    element : <Contact />
  },
  {
    path : '/about',
    element : <About />
  },
  {
    path : '/info',
    element : <Info />
  },
  {
    path : '*',
    element : <NotFoundPage />,
  }
]
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
