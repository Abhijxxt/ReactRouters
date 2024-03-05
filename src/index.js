import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Info from './pages/Info';
import NotFoundPage from './pages/404';
import Test from './pages/test';

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
    path : '/test',
    element : <Test />,
  },
  {
    path : '*',
    element : <NotFoundPage />,
  }
]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={routers} />
  </React.StrictMode>
);

