import React, { useState } from "react";
import "./recall.scss";
import { BsPen } from "react-icons/bs";
import { LiaStar } from "react-icons/lia";
import { TfiClose } from "react-icons/tfi";
import face from "./img/face.png";

const Recall = () => {
  const [red, setRed] = useState(false);
  return (
    <div id="recall">
      <div className="container">
        <h1>Отзывы:</h1>
        <div className="recall">
          <div className="recall-rec">
            <div className="recall-rec_input">
              <input
                onClick={() => setRed(true)}
                type="text"
                placeholder="Добовить отзыв"
              />
              <span>
                <BsPen />
              </span>
            </div>
          </div>
          <div className="recall-comment">
            <div className="recall-comment_one">
              <img src={face} alt="" />
              <p>Мастера знаю свое дело. Был очень доволен СПАСИБО БОЛЬШОЕ</p>
              <div className="recall-comment_one-tit">
                <div className="recall-comment_one-tit_lia">
                  <h3>
                    <LiaStar />
                  </h3>
                  <h2>4.8</h2>
                </div>
                <h3>18.07.2023</h3>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: red ? "block" : "none" }} className="block">
          <div className="block-text">
            <input type="text" />
            <span>
              <TfiClose />  
            </span>
          </div>
          <div className="block-title">
            <h1>
              <LiaStar />
            </h1>
            <h1>
              <LiaStar />
            </h1>
            <h1>
              <LiaStar />
            </h1>
            <h1>
              <LiaStar />
            </h1>
            <h1>
              <LiaStar />
            </h1>
          </div>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Recall;
