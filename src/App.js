import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="text-xl text-center p-3 bg-slate-500 text-yellow-200">This is the common header for all the pages.</h1>
        <p>This is a header file that will be attached to every route</p>
      </header>
      <nav className="bg-slate-800 p-8">
                <Link to={'/'} className=" m-2 p-2 bg-fuchsia-300">Home Button</Link>
                <Link to={'/about'} className=" m-2 p-2 bg-fuchsia-300">About Button</Link>
                <Link to={'/contact'} className=" m-2 p-2 bg-fuchsia-300">Contact Button</Link>
                <Link to={'/info'} className=" m-2 p-2 bg-fuchsia-300">Info Button</Link>
            </nav>
    </div>
  );
}

export default App;
