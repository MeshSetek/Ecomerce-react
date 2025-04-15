import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import GetProducts from "./Components/GetProducts";
import AddProduct from "./Components/AddProduct";
import Payment from "./Components/Payment";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Seteque CarryVogue Atelier</h1>
        <button className="nav-toggle" onClick={toggleNav}>☰</button>
        <nav className={`nav-links ${navOpen ? "show" : ""}`}>
          <Link className="link" to="/getproducts" onClick={() => setNavOpen(false)}>Home</Link>
          <Link className="link" to="/signup" onClick={() => setNavOpen(false)}>Signup</Link>
          <Link className="link" to="/signin" onClick={() => setNavOpen(false)}>Signin</Link>
          <Link className="link" to="/addproduct" onClick={() => setNavOpen(false)}>Upload~item</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/getproducts" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/getproducts" element={<GetProducts />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer />

      {/* Inline CSS for header responsiveness */}
      <style>
        {`
          .app-container {
            background: linear-gradient(to right, black, navy);
            min-height: 60vh;
            color: white;
            text-align: center;
            padding: 20px;
          }

          .app-header {
            background-color: #1a1a1a;
            padding: 20px;
            border-radius: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }

          .app-header h1 {
            font-size: 2rem;
            margin-bottom: 10px;
            flex: 1;
            text-align: left;
          }

          .nav-toggle {
            display: none;
            font-size: 2rem;
            color: white;
            background: none;
            border: none;
            cursor: pointer;
          }

          .nav-links {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 10px;
          }

          .link {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            padding: 5px 12px;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.1);
            transition: background 0.3s;
          }

          .link:hover {
            background: rgba(255, 255, 255, 0.3);
          }

          @media (max-width: 768px) {
            .app-header {
              flex-direction: column;
              align-items: flex-start;
            }

            .app-header h1 {
              font-size: 1.5rem;
              text-align: left;
            }

            .nav-toggle {
              display: block;
              margin-left: auto;
            }

            .nav-links {
              display: none;
              flex-direction: column;
              width: 100%;
              margin-top: 10px;
              gap: 10px;
            }

            .nav-links.show {
              display: flex;
            }

            .link {
              font-size: 1rem;
              padding: 10px;
              width: 100%;
              text-align: left;
            }
          }

          @media (max-width: 576px) {
            .app-header h1 {
              font-size: 1.2rem;
            }

            .link {
              font-size: 0.9rem;
              padding: 8px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
