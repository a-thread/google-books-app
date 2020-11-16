import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export default Input;