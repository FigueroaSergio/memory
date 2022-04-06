import { useContext, useEffect } from "react";

import { Card } from "../Card/Card";
import { Context } from "../../context/Context";
import "./Table.css";

function Table() {
  let { cards, moves } = useContext(Context);
  return (
    <>
      <div className="row  justify-content-center">
        <div className="col-lg-8">
          <div className="row row-cols-4 g-3 ">
            {cards.map((card, index) => (
              <Card key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export { Table };
