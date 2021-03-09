import React from "react";
import Card from "./Card";
import data from "../../../Utils/Reasons";

const Reasons = () => {
  return (
    <div className="jumbotron reasons-wraper">
      <div className="container">
          <h1>So Why Journal?</h1>
        <div className="row reasons-container">
          {data.map((reason, i) => (
            <Card data={reason} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
