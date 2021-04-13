import { DialogTitle } from "@material-ui/core";
import React from "react";

const JournalWrapper = ({ title }) => {
  console.log(title);
  return (
    <div className="container entry-form">
      <div className="row">
        <div className="col">{title}</div>
        <div className="col">
          <div className="container">
            <div className="form">
              {" "}
              <input type="text" name="title" autoComplete="off" required />
              <label htmlFor="title" className="label-title">
                <span className="content-title"> title </span>
              </label>
            </div>
            <div className="form-entry">
              {" "}
              <input type="text" name="title" autoComplete="off" required />
              <label htmlFor="entry" className="label-entry">
                <span className="content-entry">Entry</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalWrapper;
