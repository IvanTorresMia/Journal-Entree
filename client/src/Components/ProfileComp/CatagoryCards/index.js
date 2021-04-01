import React, { useContext } from "react";
import Cards from "./cards";
import CatagoryData from "../../../Utils/tempCatagory";
import CardContext from '../../../Context/CardContext'



const CatagoryCards = ({handleCatagory}) => {

    const context = useContext(CardContext)

    console.log(context)
  return (
    <div className="container">
      <div className="row">
        {context.map((data, i) => (
          <Cards title={data.name} description={data.description} key={i} />
        ))}
      </div>
      <button className="btn btn-dark" onClick={handleCatagory}>
          +
      </button>
    </div>
  );
};

export default CatagoryCards;
