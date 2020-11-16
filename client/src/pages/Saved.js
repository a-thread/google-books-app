import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import API from "../utils/API";
import Container from "../components/Container";

function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([]);
    const [search] = useState("Cemetary Boys");


    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks();
    }, []);

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks(search)
            .then(res => setBooks(res.data.items)
            )
            .catch(err => console.log(err));
    };

    // // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => loadBooks())
    //         .catch(err => console.log(err));
    // }


    return (
        <>
            <Container>
                <h1>Saved Books</h1>
                {books
                    ? books.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book.volumeInfo} />
                    ))
                    : null}
            </Container>
        </>
    );
};

export default Search;