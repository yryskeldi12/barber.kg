import React, { useState, useEffect } from "react";
import "./recall.scss";
import { BsPen } from "react-icons/bs";
import { LiaStar } from "react-icons/lia";
import { TfiClose } from "react-icons/tfi";
import face from "./img/face.png";

const Recall = () => {
  const [red, setRed] = useState(false);
  const [comment, setComment] = useState(""); 
  const [comments, setComments] = useState([]); 

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const commentChange = (event) => {
    setComment(event.target.value);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}.${month}.${year}`;
  };

  const submitComment = () => {
    if (!comment.trim()) {
      alert("Поле комментария не может быть пустым.");
      return;
    }

    const newComment = {
      text: comment,
      date: getCurrentDate(),
    };

    const newComments = [...comments, newComment];
    setComments(newComments);

    localStorage.setItem("comments", JSON.stringify(newComments));

    setComment("");
    setRed(false);
  };

  return (
    <div id="recall">
      <div className="container">
        <h1>Отзывы:</h1>
        <div className="recall">
          <div>
            <div
              style={{ display: red ? "none" : "block" }}
              className="recall-rec"
            >
              <div className="recall-rec_input">
                <input
                  onClick={() => setRed(true)}
                  type="text"
                  placeholder="Добавить отзыв"
                />
                <span>
                  <BsPen />
                </span>
              </div>
            </div>
            <div style={{ display: red ? "block" : "none" }} className="block">
              <div className="block-text">
                <input
                  type="text"
                  value={comment}
                  onChange={commentChange}
                />
                <span onClick={() => setRed(false)}>
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
              <button onClick={submitComment}>Отправить</button>
            </div>
          </div>
          <div className="recall-comments">
            {comments.map((commentItem, index) => (
              <div key={index} className="recall-comment_one">
                <img src={face} alt="" />
                <p>{commentItem.text}</p>
                <div className="recall-comment_one-tit">
                  <div className="recall-comment_one-tit_lia">
                    <h3>
                      <LiaStar />
                    </h3>
                    <h2>4.8</h2>
                  </div>
                  <h3>{commentItem.date}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recall;
