import React from "react";
import Entries from "../Entries";

const JournalWrapper = ({
  title,
  JournalEntries,
  handleSaveClick,
  handleTileChange,
  handleBodyChange,
}) => {
  console.log(title);
console.log(JournalEntries)
  return (
    <div className="container journal-con">
      <div className="row">
        <div className="col">
          <h2>{title}</h2>
          {JournalEntries.map((entry, i) => (
            <Entries JournalEntries={entry.title} key={i}/>
          ))}
        </div>
        <div className="col">
          <div className="container entry-form">
            <div className="form">
              {" "}
              <input
                onChange={handleTileChange}
                type="text"
                name="title"
                autoComplete="off"
                required
              />
              <label htmlFor="title" className="label-title">
                <span className="content-title"> Title </span>
              </label>
            </div>
            <div className="form-entry">
              {" "}
              <textarea
                onChange={handleBodyChange}
                type="text"
                name="title"
                autoComplete="off"
                required
              ></textarea>
              <label htmlFor="entry" className="label-entry">
                <span className="content-entry">Entry</span>
              </label>
            </div>
            <a className="save-entry" onClick={handleSaveClick}>
              SAVE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalWrapper;
