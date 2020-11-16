import React from "react";
import { Card, Button } from "react-bootstrap";

function BookCard(props) {
    return (
        <Card>
            <div className="titleRow">
                <Card.Title>
                    <h2>{props.title}</h2>
                    <h5>{props.categories}</h5>
                    <h4>{props.authors}</h4>
                </Card.Title>
                <div className="col-4 row">
                    <Button>view</Button>
                    <Button>save</Button>
                </div>
            </div>
            <Card.Body>
                <Card.Img className="col-lg-2" src={`${props.image}`} />
                <Card.Text className="col-lg-10">{props.description}</Card.Text>
            </Card.Body>
        </Card >
    )
}
export default BookCard;