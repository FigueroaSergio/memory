import { useContext } from "react";

import { Context } from "../../context/Context";
import "./Card.css";

function Card({ card, index }) {
  let { handleClickCard } = useContext(Context);
  return (
    <>
      <div className="col ">
        <div
          className="card game-card"
          role="button"
          onClick={() => handleClickCard(index)}
        >
          <p>{card.active || card.macth ? card.src : "x"}</p>
        </div>
      </div>
    </>
  );
}
export { Card };
