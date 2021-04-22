import React, { useContext } from "react";
import Cards from "./cards";
import CardContext from "../../../Context/CardContext";
import tempImage from '../../../loginImages/defaultBack.jpg'

const CatagoryCards = ({ handleCatagory, handleJournalClick, handleDeleteJournal }) => {
  const context = useContext(CardContext);





  console.log(context);
  return (
    <div className="container cards-container">
      <div className="row">
        {context.map((data, i) => (
          <Cards title={data.name} description={data.description} key={i} tempImage={tempImage} handleJournalClick={handleJournalClick} handleDeleteJournal={handleDeleteJournal}/>
        ))}
      </div>
      <button className="btn add-button" onClick={handleCatagory}>
        New Journal
      </button>
    </div>
  );
};

export default CatagoryCards;
// 