import React from "react";




const Cards = ({ title, description, tempImage, handleJournalClick, handleDeleteJournal }) => {


  return (
<div className="card text-center">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="rounded" onClick={handleDeleteJournal}>Delete</a>
    <p className="display-con">{title}</p>
    <a href="#" className="rounded" onClick={handleJournalClick}>Journal</a>
  </div>
</div>
  );
};

export default Cards;



