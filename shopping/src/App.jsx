import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home_page";
import ShoppingPage from "./components/shopping_page";

// App component will render the routes for the home page and the shopping page. I separate each component to improve readability and maintainability.
function App(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping" element={<ShoppingPage />} />
      <Route path = '*' element = {<h1>404 Not Found</h1>} />
    </Routes>
  );
}; 

export default App;