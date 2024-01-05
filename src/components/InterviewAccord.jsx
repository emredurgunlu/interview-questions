import Ouestion from "./Question";
import data from "../helper/data";
import { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const InterviewAccord = () => {
  // const [show, setShow] = useState(false);
  const [seciliId, setSeciliId] = useState("");

  console.log("first");
  return (
    <div className="row">
      {/* <Ouestion/> */}
      {/* {data.map((item) => (
        <Ouestion key={item.id} item={item}/>
      ))} */}
      {/* Bu alttaki şekilde doğru olmaz, birine tıklayınca hepsi açılır */}
      {/* {data.map((item) => (
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
      ))} */}
      {/* Bu alttaki gibi <details ile yaparsan useState'te gerek kalmaz https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_details 
      arrowup ve arrowdown ikonlarının gözükmesini css ile yaptık
      */}
      {/* {data.map((item) => (
        <details className="card">
          <summary className="ques">
            <h5>{item.question}</h5>
            {arrowup} {arrowdown}
          </summary>
          <p>{item.answer}</p>
        </details>
      ))} */}
{/* Bu alttakinde ise const [show, setShow] = useState(false); yerine const [seciliId, setSeciliId] = useState(""); kullandık
Böylece birine tıklayınca hepsi değil sadece tıklanan açılıyor */}
      {data.map((item) => (
        <div key={item.id} className="card-group">
          <div className="card">
            <div className="ques-answer">
              <h5>{item.question}</h5>
              <button
                className="btn-minus"
                onClick={() => setSeciliId(item.id)}
                // onDoubleClick yapıldığında ilgili sekmenin kapanması için
                onDoubleClick={() => setSeciliId("")}
              >
                {seciliId == item.id ? arrowdown : arrowup}
              </button>
            </div>
            <p>{seciliId == item.id && item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InterviewAccord;
