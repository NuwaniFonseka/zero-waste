// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import History from "./pages/WasteHistory.js";
import { AuthContextProvider } from './context/AuthContext.js';
import { ProductProvider } from './pages/ProductContext.js'; // Import the ProductProvider


export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
      <ProductProvider> {/* Wrap with ProductProvider */}
          <Routes>
         
            <Route path='/' element={<Home />} /> 
            <Route path='/history' element={<History />} /> 

          </Routes>
        </ProductProvider> {/* Close ProductProvider */}
      </AuthContextProvider>
    </BrowserRouter>
  );
}
