import React, { Component } from "react";
import BookComponent from "./Book";

class BookList extends Component {
  render() {
    return (
      <div>
        <BookComponent />
        <BookComponent />
        <BookComponent />
      </div>
    );
  }
}

export default BookList;
