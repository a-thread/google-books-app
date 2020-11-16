import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function BookCard(props) {
    return (
        <Card className="book">
            <Card.Body>
                <Row className="titleRow">
                    <Col>
                    <h3>{props.title}</h3>
                    <h4>Written by {props.authors}</h4>
                    <h5><i>{props.categories}</i></h5>
                    </Col>
                    <Col className="btnRow">
                        <Button variant="outline-dark">view</Button>
                        <Button variant="outline-dark">save</Button>
                    </Col>
                </Row>
            
                <Row>
                    <Card.Img className="col-lg-4" src={`${props.image}`} />
                    <Card.Text className="col-lg-8">{props.description}</Card.Text>
                </Row>
            </Card.Body>
        </Card >
    )
}
export default BookCard;