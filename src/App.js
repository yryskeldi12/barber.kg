import React from "react";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import Barbers from "../src/components/Barbers/barbers";
import Salon from "./components/Salon/salon";
import Blog from "./components/Blog/blog";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="barbers" element={<Barbers />} />
        <Route path="salon" element={<Salon />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
    return (
        <div>
          <Header/>
            <Home/>
            <Routes>
               <Route path="barbers" element={<Barbers/>}/>
               <Route path="salon" element={<Salon/>}/>
               <Route path="blog" element={<Blog/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
