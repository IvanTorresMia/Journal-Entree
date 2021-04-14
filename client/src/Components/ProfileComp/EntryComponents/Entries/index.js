import React from "react";

const Entries = ({ JournalEntries }) => {
  return (
    <div>
      <div className="row">
        <p> {JournalEntries}</p>
      </div>
    </div>
  );
};

export default Entries;
