import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import GetProducts from "./Components/GetProducts";
import AddProduct from "./Components/AddProduct";
import Payment from "./Components/Payment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Seteque CarryVogue Atelier</h1>
        <nav className="nav-links">
          <Link className="link" to="/getproducts">
            Home
          </Link>
          <Link className="link" to="/signup">
            Signup
          </Link>
          <Link className="link" to="/signin">
            Signin
          </Link>

          <Link className="link" to="/addproduct">
            Upload~item
          </Link>
         
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

      <style>
        {`
          .app-container {
            background: linear-gradient(to right, black, navy);
            min-height: 60vh;
            color: white;
            text-align: center;
            padding: 20px;
           
          }
          .app-header h1 {
            margin-bottom: 20px;
            font-size: 2rem;
          }
          .nav-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 20px;
            flex-wrap: wrap; /* Make sure the nav items wrap on smaller screens */
          }
          .link {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            padding: 5px;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.1);
            transition: background 0.3s;
          }
          .link:hover {
            background: rgba(255, 255, 255, 0.3);
          }
          
          /* Responsive Styles */
          @media (max-width: 768px) {
            .app-header h1 {
              font-size: 1.5rem;
            }
            .nav-links {
              flex-direction: column;
              gap: 10px;
            }
            .link {
              font-size: 1rem;
              padding: 10px;
              width: 100%;
              text-align: center;
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
