import React, { useState } from "react";
import "./hero.scss";
import img from "../Hero/heroImg/0.png";
import img1 from "../Hero/heroImg/1.jpg";
import img2 from "../Hero/heroImg/2.png";
const Hero = () => {
  const [hero, setHero] = useState(1);
  let str = img;
  if (hero === 1) {
    str = img;  
  } else if (hero === 2) {
    
    str = img1;
  } else if (hero === 3) {
    str = img2;
  }
  setTimeout(() => {
    if (hero === 3) {
      setHero(hero - 2);
    } else {
      setHero(hero + 1);
    }
  }, 5000);
  return (
    <div style={{ background: `url(${str})`, transition: "4s" }} id="hero">
      <div className="container">
        <div className="hero">
          <h1>
            Барбершопы: найди лучший <br /> салон у себя в городе
          </h1>
          <p>
            Наша платформа поможет тебе найти ближайший барбершоп,салон красоты
            и узнать <br /> всю необходимую информацию: рейтинг, адрес, цены и
            многое другое. Найдите свой <br /> идеальный салон с{" "}
            <span>нами.</span>
          </p>
   
        </div>
      </div>
    </div>
  );
};

export default Hero;
