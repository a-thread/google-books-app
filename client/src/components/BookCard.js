import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const BookCard = ({ title, subtitle, link, authors, description, image }) => {

    // function deleteBook(event) {
    //     event.preventDefault();
    //     if (book.title) {
    //         API.deleteBook(book.id)
    //             .then(res => console.log("Success!" + res))
    //             .catch(err => console.log(err));
    //     }
    // }

    return (
        <Card className="book">
            <Card.Body>
                <Row className="titleRow">
                    <Col>
                        <h3>{title}</h3>
                        <h4>Written by {authors}</h4>
                        <h5><i>{subtitle}</i></h5>
                    </Col>
                    <Col className="btnRow">
                        <a href={link}><Button variant="outline-dark">view</Button></a>
                        <Button variant="outline-dark" >save</Button>
                    </Col>
                </Row>

                <Row>
                    <Card.Img className="col-lg-4" src={`${image}`} />
                    <Card.Text className="col-lg-8">{description}</Card.Text>
                </Row>
            </Card.Body>
        </Card >
    )
}
export default BookCard;