import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Input from "../components/Input";
import FormBtn from "../components/FormBtn";
import API from "../utils/API";
import Container from "../components/Container";

function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");


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

    function saveBook(book) {
        // const book = this.state.books.find(book => book.id === id)
        API.saveBook(book)
            .then(res => {
                // const savedBook = res.items;
                console.log("success" + res);
            })
            .catch(err => console.log(err))
    }

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        setSearch(event.target.value);
    };


    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        // if there is a search term
        if (search) {
            // query api
            loadBooks(
                // modifying query for search terms in url
                search.replace("[^\w\d\s]", "").split("").join("+").trim()
            )
        }
    };

    return (
        <>
            <form className="formRow">
                <Input
                    onChange={handleInputChange}
                    name="title"
                    placeholder="book search" />
                <FormBtn
                    disabled={!search}
                    onClick={handleFormSubmit}
                > Search </FormBtn>
            </form>

            <Container>
                <h1>Search Results</h1>
                {books
                    ? books.map((book) => (
                        <BookCard
                            key={book.id}
                            title={book.volumeInfo.title}
                            subtitle={book.volumeInfo.subtitle}
                            link={book.volumeInfo.infoLink}
                            authors={book.volumeInfo.authors.join(", ")}
                            description={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.thumbnail}
                        />
                    ))
                    : null}
            </Container>
        </>
    );
}

export default Search;