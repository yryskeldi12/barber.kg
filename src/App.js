import React from "react";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import Barbers from "../src/components/Barbers/barbers";
import Salon from "./components/Salon/salon";
import Blog from "./components/Blog/blog";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import Anketa from "./components/Anketa/anketa";
import Profil from "./components/Barbers/Master/Profil/profil";
import LoginForm from "./components/loginForm/loginForm";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="barbers" element={<Barbers />} />
        <Route path="salon" element={<Salon />} />
        <Route path="blog" element={<Blog />} />
        <Route path="profil" element={<Profil/>} />
      </Routes>
        <LoginForm/>
      <Footer />
    </div>
  );
};

export default App;
