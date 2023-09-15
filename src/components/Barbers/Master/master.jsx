import React, { useState } from "react";
import "./master.scss";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LiaStar } from "react-icons/lia";

import men from "../Master/masterImg/Rectangle 93.png";
import men2 from "../Master/masterImg/men2.png";
import gig from "../Master/masterImg/gig.png";
import { useStore } from "react-redux";
import rac from "../Master/masterImg/trac.png";
import { GrFormClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Master = () => {
  const [filtr, setFiltr] = useState(false);
  const [filtrrr, setFiltrrr] = useState(true);
  const [none, setNone] = useState(true);

  return (
    <div id="master">
      <div className="container">
        <div className="master">
          <div className="master-title">
            <h3> sdfgdsfwsdef</h3>
            <h1>( Мастера )</h1>
            <div onClick={() => setFiltr(true)} className="master-title_p">
              <h2>Фильтр</h2>
              <h3>
                <HiOutlineMenuAlt1 />
              </h3>
            </div>
          </div>
          <div className="master-block">
            <div className={"master-block_img"}>
              <img src={men} alt="" />
              <div className="master-block_img-name">
                <h1>Aslan Nurbekov</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <NavLink to={"/profil"}>
                    <button>Смотреть</button>
                  </NavLink>
                </div>
              </div>
              {}
            </div>
            <div className="master-block_img">
              <img src={men2} alt="" />
              <div className="master-block_img-name">
                <h1>Aslan Nurbekov</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div className="master-block_img">
              <img src={gig} alt="" />
              <div className="master-block_img-name">
                <h1>Айгул</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div className="master-block_line"></div>
            {/* /////////////////// */}
            <div className="master-block_img">
              <img src={gig} alt="" />
              <div className="master-block_img-name">
                <h1>Айгул</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div className="master-block_img">
              <img src={men} alt="" />
              <div className="master-block_img-name">
                <h1>Aslan Nurbekov</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div className="master-block_img">
              <img src={men2} alt="" />
              <div className="master-block_img-name">
                <h1>Aslan Nurbekov</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div className="master-block_line"></div>

            {/* /////////////////// */}
            <div className="master-block_img">
              <img src={men2} alt="" />
              <div className="master-block_img-name">
                <h1>Aslan Nurbekov</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div className="master-block_img">
              <img src={gig} alt="" />
              <div className="master-block_img-name">
                <h1>Айгул</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div className="master-block_img">
              <img src={men} alt="" />
              <div className="master-block_img-name">
                <h1>Aslan Nurbekov</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div className="master-block_line"></div>

            {/* ////////////// */}

            <div
              style={{ display: none ? "none" : "block" }}
              className="master-block_img"
            >
              <img src={men2} alt="" />
              <div className="master-block_img-name">
                <h1>Aslan Nurbekov</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div
              style={{ display: none ? "none" : "block" }}
              className="master-block_img"
            >
              <img src={gig} alt="" />
              <div className="master-block_img-name">
                <h1>Айгул</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div
              style={{ display: none ? "none" : "block" }}
              className="master-block_img"
            >
              <img src={men} alt="" />
              <div className="master-block_img-name">
                <h1>Aslan Nurbekov</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div
              style={{ display: none ? "none" : "block" }}
              className="master-block_line"
            ></div>

            {/* ///////////////// */}
            <div
              style={{ display: none ? "none" : "block" }}
              className="master-block_img"
            >
              <img src={men2} alt="" />
              <div className="master-block_img-name">
                <h1>Aslan Nurbekov</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div
              style={{ display: none ? "none" : "block" }}
              className="master-block_img"
            >
              <img src={gig} alt="" />
              <div className="master-block_img-name">
                <h1>Айгул</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div
              style={{ display: none ? "none" : "block" }}
              className="master-block_img"
            >
              <img src={men} alt="" />
              <div className="master-block_img-name">
                <h1>Aslan Nurbekov</h1>
                <div className="master-block_img-name_star">
                  <h5>
                    {" "}
                    <LiaStar />
                  </h5>
                  <p>4.5</p>
                </div>
                <h2>Барбер</h2>
                <div className="master-block_img-name_btn">
                  <h3>От 150 сомов</h3>
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <div
              style={{ display: none ? "none" : "block" }}
              className="master-block_line"
            ></div>
            <button onClick={() => setNone(!none)}>
              {" "}
              {none ? "Посмотреть на всех" : "Свернуть"}
            </button>
          </div>
          
          {/* ..................... */}

          {filtr && (
            <div
              style={{ display: filtrrr ? "block" : " none" }}
              className="master-filtr"
            >
              <div className="master-filtr_option">
                <select>
                  <option>Район</option>
                  <option>Район</option>
                  <option>Район</option>
                  <option>Район</option>
                </select>
                <select>
                  <option>Рейтинг</option>
                  <option>Рейтинг</option>
                  <option>Рейтинг</option>
                  <option>Рейтинг</option>
                </select>
              </div>
              <div className="master-filtr_salon">
                <div className="master-filtr_salon-chek">
                  <h2>Салон</h2>
                  <input type="checkbox" />
                </div>
                <div className="master-filtr_salon-chek">
                  <h2>Частный мастер</h2>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="master-filtr_do">
                <div>
                  <input type="text" placeholder=" от 0 сом" />
                </div>
                <div>
                  <input type="text" placeholder=" до 0 сом" />
                </div>
              </div>
              <button>Применить</button>
              <p onClick={() => setFiltrrr(false)}>
                <GrFormClose />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Master;
