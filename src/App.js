import React from 'react';
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Barbers from "../src/components/Barbers/barbers";
import Salon from "./components/Salon/salon";
import Blog from "./components/Blog/blog";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import Platform from "./components/Home/platform/platform";
import Advantages from "./components/Home/advantages/advantages";
import Price from "./components/Barbers/price/price";
import SalonPrice from "./components/Salon/SalonPrice/SalonPrice";


const App = () => {
    return (
        <div>
          {/*<Header/>*/}
            <Advantages/>
            <Platform/>
            <Price/>
            <SalonPrice/>
            <Routes>
               <Route path="barbers" element={<Barbers/>}/>
               <Route path="salon" element={<Salon/>}/>
               <Route path="blog" element={<Blog/>}/>
               <Route path="home" element={<Home/>}/>
            </Routes>
            {/*<Footer/>*/}
        </div>
    );
};

export default App;