const axios = require("axios");

export default {
  // Gets all books
  getBooks: function(search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // NOT IN WORKING ORDER
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
  