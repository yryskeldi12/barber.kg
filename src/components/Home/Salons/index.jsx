import React from "react";
import "./index.scss";
import bishkek from "./imgSalon/Bishkek.jpg";
import oshh from "./imgSalon/osh.png";
import abadd from "./imgSalon/abad.png";
import { useState } from "react";

const Salons = () => {
  const [lol, setLol] = useState(false);
  const [osh, setOsh] = useState(false);
  const [abad, setAbad] = useState(false);

  return (
    <div id="salons">
      <div className="container">
        <div className="h1">
          <h1>Наши салоны</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="line"></div>
            <p>Наши три города</p>
          </div>
        </div>
        <div className="salons">
          <div
            onMouseOver={() => setLol(true)}
            onMouseLeave={() => setLol(false)}
            className="salons-bish"
          >
            <img src={bishkek} alt="" />
            <div className="salons-bish_detals">
              <h1 style={{ display: lol ? "block" : "none" }}>
                Салоны в Бишкека
              </h1>
              <div className="salons-bish_detals-block">
                <h3 style={{ display: lol ? "block" : "none" }}>Барбершопы:</h3>
                <p style={{ display: lol ? "block" : "none" }}>62</p>
              </div>
              <div className="salons-bish_detals-block">
                <h3 style={{ display: lol ? "block" : "none" }}>
                  Салон красаты:
                </h3>
                <p style={{ display: lol ? "block" : "none" }}>31</p>
              </div>
              <div className="salons-bish_detals-block">
                <h3 style={{ display: lol ? "block" : "none" }}>
                  {" "}
                  Мастера на вызов:
                </h3>
                <p style={{ display: lol ? "block" : "none" }}>12</p>
              </div>
              <button style={{ display: lol ? "block" : "none" }}>
                Посмотреть
              </button>
            </div>
          </div>
          <div
            onMouseOver={() => setOsh(true)}
            onMouseLeave={() => setOsh(false)}
            className="salons-osh"
          >
            <img src={oshh} alt="" />
            <div className="salons-bish_detals">
              <h1 style={{ display: osh ? "block" : "none" }}>Салоны в Оше</h1>
              <div className="salons-bish_detals-block">
                <h3 style={{ display: osh ? "block" : "none" }}>Барбершопы:</h3>
                <p style={{ display: osh ? "block" : "none" }}>62</p>
              </div>
              <div className="salons-bish_detals-block">
                <h3 style={{ display: osh ? "block" : "none" }}>
                  Салон красаты:
                </h3>
                <p style={{ display: osh ? "block" : "none" }}>31</p>
              </div>
              <div className="salons-bish_detals-block">
                <h3 style={{ display: osh ? "block" : "none" }}>
                  {" "}
                  Мастера на вызов:
                </h3>
                <p style={{ display: osh ? "block" : "none" }}>12</p>
              </div>
              <button style={{ display: osh ? "block" : "none" }}>
                Посмотреть
              </button>
            </div>
          </div>
          <div
            onMouseOver={() => setAbad(true)}
            onMouseLeave={() => setAbad(false)}
            className="salons-abad"
          >
            <img src={abadd} alt="" />
            <div className="salons-bish_detals">
              <h1 style={{ display: abad ? "block" : "none" }}>
                Салоны в Жалал-Абаде
              </h1>
              <div className="salons-bish_detals-block">
                <h3 style={{ display: abad ? "block" : "none" }}>
                  Барбершопы:
                </h3>
                <p style={{ display: abad ? "block" : "none" }}>62</p>
              </div>
              <div className="salons-bish_detals-block">
                <h3 style={{ display: abad ? "block" : "none" }}>
                  Салон красаты:
                </h3>
                <p style={{ display: abad ? "block" : "none" }}>31</p>
              </div>
              <div className="salons-bish_detals-block">
                <h3 style={{ display: abad ? "block" : "none" }}>
                  {" "}
                  Мастера на вызов:
                </h3>
                <p style={{ display: abad ? "block" : "none" }}>12</p>
              </div>
              <button style={{ display: abad ? "block" : "none" }}>
                Посмотреть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salons;
