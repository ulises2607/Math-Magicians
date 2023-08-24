import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CalcPage from './pages/CalcPage';
import QuotePage from './pages/QuotePage';

function App() {
  return (
    <>
      <header>
        <h1 className="title">Math Magicians</h1>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/calculator">Calculator</Link></li>
            <li className="nav-item"><Link to="/quote">Quote</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalcPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </>
  );
}

export default App;
