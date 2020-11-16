import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import API from "../utils/API";

const BookCard = ({ book, saveBook }) => {

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
                        <h3>{book.title}</h3>
                        <h4>Written by {book.authors}</h4>
                        <h5><i>{book.categories}</i></h5>
                    </Col>
                    <Col className="btnRow">
                        <Button variant="outline-dark">view</Button>
                        <Button variant="outline-dark" value={book} onClick={saveBook}>save</Button>
                    </Col>
                </Row>

                <Row>
                    <Card.Img className="col-lg-4" src={`${book.imageLinks.thumbnail}`} />
                    <Card.Text className="col-lg-8">{book.description}</Card.Text>
                </Row>
            </Card.Body>
        </Card >
    )
}
export default BookCard;