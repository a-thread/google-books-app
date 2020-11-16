import React from "react";

function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" {...props} />
    </div>
  );
}

export default TextArea;