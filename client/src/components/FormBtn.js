import React from "react";
import Button from "react-bootstrap/Button"

function FormBtn(props) {
    return (
        <Button {...props} style={{ float: "right", margin: 0}} variant="outline-light">
            {props.children}
        </Button>
    );
}

export default FormBtn;