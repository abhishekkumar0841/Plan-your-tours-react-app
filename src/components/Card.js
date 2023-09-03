import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {

  const [readMore, setReadMore] = useState(false);

  const description = readMore ? info : `${info.substring(0,100)}....`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }



  return (
    <div className="card">
      <img src={image} alt="" className="image" />

      <div className="tourInfo">
        <div className="tourDetails">
          <h4 className="tourPrice"> Rs. {price} </h4>
          <h4 className="tourName"> {name} </h4>
        </div>

        <div className="description">
          {description}
          <span className="readMore" onClick={readMoreHandler}>
            {readMore ? `show less` : `read more`}
          </span>
        </div>
      </div>

      <button onClick={()=> removeTour(id)} className="btnRed"> Not Interested </button>
    </div>
  );
}

export default Card;
