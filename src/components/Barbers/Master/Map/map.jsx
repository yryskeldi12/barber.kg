import React from "react";
import "./map.scss";
import Recall from "../Recall/recall";

const Map = () => {
  return (
    <div id="map">
      <div className="container">
        <div className="map">
          <div className="map-district ">
            <h1>Расположения</h1>
            <p>Район: Мосовет, ул. Черемушкина 23</p>
            <h4>996 500 55 44 22</h4>
          </div>
          <div className="map-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2507.2790967776596!2d74.5850265108488!3d42.87809246007407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81f524959c9%3A0x5b83458a1ec277ee!2z0J_QsNC80Y_RgtC90LjQuiDQnNCw0L3QsNGB0YMg0JLQtdC70LjQutC-0LTRg9GI0L3QvtC80YM!5e0!3m2!1sru!2skg!4v1694420333444!5m2!1sru!2skg"
              // width="600"
              // height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Recall />
    </div>
  );
};

export default Map;
