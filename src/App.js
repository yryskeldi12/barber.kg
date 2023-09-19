import React, { useEffect } from "react";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import Barbers from "../src/components/Barbers/barbers";
import Salon from "./components/Salon/salon";
import Blog from "./components/Blog/blog";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import Profil from "./components/Barbers/Master/Profil/profil";
import LoginForm from "./components/loginForm/loginForm";
import Anketa from "./components/Anketa/anketa";
import SalonRecom from "./components/Salon/SalonRecom/salonRecom";
import { gapi } from "gapi-script";

const clientId =
  "187515703227-ipki1jn6tmq5c6dprpq5la00sqndm0aj.apps.googleusercontent.com";

const App = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="barbers" element={<Barbers />} />
        <Route path="salon" element={<SalonRecom />} />
        <Route path="salon" element={<Salon />} />
        <Route path="blog" element={<Blog />} />
        <Route path="profil" element={<Profil />} />
        <Route path="enter" element={<LoginForm />} />
      </Routes>
      {/* <Anketa/> */}
      <Footer />
    </div>
  );
};

export default App;
