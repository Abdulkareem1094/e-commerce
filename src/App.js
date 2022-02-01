import React from "react";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";


function App() {
  return (
    <>
      <Navbar/>  
      <Slider/> 
      <Search/> 
      <Products/>
    </>
  );
}

export default App;
