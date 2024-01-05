import React from "react";
import { arrowdown, arrowup } from "../helper/icons";
const Card = ({item}) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="card-group">
          <div className="card">
            <div className="ques-answer">
              <h5>{item.question}</h5>
              <button className="btn-minus" onClick={() => setShow(!show)}>
                {show ? arrowup : arrowdown}
              </button>
            </div>
            <p>{show && item.answer}</p>
          </div>
        </div>
  );
};

export default Card;
