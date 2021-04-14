import React from "react";

const Modal = ({
  showOrHide,
  submitCatagory,
  nameChange,
  descriptionChange,
  handleKeyPress,
  closeModal
}) => {
  return (
    <div className={showOrHide} onKeyPress={handleKeyPress}>
       
      <div className="container catagory-modal rounded">
      <h3>New Journal</h3>
        <button className="btn exit-button" onClick={closeModal}>x</button>
       
        <div className="row form-group">
          <label htmlFor="exampleInputEmail1">Name of Catagory</label>
          <input
            name="name"
            // type="reset"
            // value="reset"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            onChange={nameChange}
          />
        </div>
        <div className="row form-group">
          <label htmlFor="exampleInputEmail1">Description</label>
          <input
            name="email"
            // type="reset"
            // value="reset"
            className="form-control"
            id="exampleInputDescription"
            aria-describedby="emailHelp"
            onChange={descriptionChange}
          />
        </div>
        <button className="btn" type="reset" onClick={submitCatagory}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
