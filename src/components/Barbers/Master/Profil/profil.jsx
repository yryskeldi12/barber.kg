import React, { useState } from "react";
import "./profil.scss";
import men1 from "./img/men1.png";
import lx1 from "./img/lx1.png";
import lx2 from "./img/lx2.png";
import lx3 from "./img/lx3.png";
import { LiaStar } from "react-icons/lia";
import { BsPen } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import Servis from "../Servis/servis";

const Profil = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  return (
    <div id="profil">
      <div className="container">
        <div className="profil">
          <div className="profil-img">
            <img className="profil-img_img1" src={men1} alt="" />
            <div className="profil-img_lx">
              <img src={selectedFile || lx1} alt="" />
              <img src={lx2} alt="" />
              <img src={lx3} alt="" />
              <img src={lx3} alt="" />
            </div>
            <div className="profil-img_btn">
              <label htmlFor="fileInput" className="file-input-label">
                <FaPlus /> Добавить фото
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <h1>
                <BsPen />
              </h1>
            </div>
          </div>
          <div className="profil-block">
            <div className="profil-block_star">
              <div className="profil-block_star-lia">
                <h3>
                  <LiaStar />
                </h3>
                <h2>4.8</h2>
              </div>
              <h1>Дони</h1>
              <h4>Последняя изминение в анкете: 23.07.2022</h4>
            </div>
            <p>
              Добро пожаловать в HAIRY salon. Современный салон красоты помогает
              реализовать естественное желание человека хорошо выглядеть,
              оставаться красивым и желанным. Мы рады предложить вам широкий
              спектр услуг по уходу за волосами.
            </p>
            <div className="profil-block_barber">
              <div className="profil-block_barber-item">
                <div className="profil-block_barber-item_sort">
                  <h1>Деятельность:</h1>
                  <h2>Барбер</h2>
                </div>
                <div className="profil-block_barber-item_sort">
                  <h1>Стаж работы:</h1>
                  <h2>1-3 года</h2>
                </div>
                <div className="profil-block_barber-item_sort">
                  <h1>Знание языков:</h1>
                  <h2>Русский, Кыргызский, English</h2>
                </div>
                <div className="profil-block_barber-item_sort">
                  <h1>Контакты:</h1>
                  <h2>996500554422</h2>
                </div>
                <div className="profil-block_barber-item_sort">
                  <h1>Соц сети:</h1>
                  <h2>ins: barber_doni</h2>
                </div>
                <div className="profil-block_barber-item_sort">
                  <h1>График работы:</h1>
                  <h2>с 10:00 - до 21:00</h2>
                </div>
                <div className="profil-block_barber-item_sort">
                  <h1>Район:</h1>
                  <h2>Мосовет</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Servis />
    </div>
  );
};

export default Profil;
