import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ContractPage from './ContractPage';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Green Tea Phone</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contract">Contract</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contract" element={<ContractPage />} />
        </Routes>
      </main>
      <footer className="bg-light text-center py-3 mt-4">
        contract@fuctionware.com
      </footer>
    </div>
  );
}

export default App;
