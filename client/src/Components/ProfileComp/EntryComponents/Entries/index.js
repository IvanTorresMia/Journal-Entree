import React from "react";

const Entries = ({ JournalEntries }) => {
  return (
    <div>
      <div className="row">
        <a className="btn entries"> {JournalEntries}</a>
      </div>
    </div>
  );
};

export default Entries;
