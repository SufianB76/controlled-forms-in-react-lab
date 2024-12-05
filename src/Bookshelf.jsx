import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value }); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (newBook.title.trim() && newBook.author.trim()) {
      setBooks([...books, newBook]); // Add the new book to the books array
      setNewBook({ title: "", author: "" }); // Clear form fields
    }
  };

  return (
    <div className="bookshelfDiv">
      {}
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              placeholder="Book title"
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              id="author"
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              placeholder="Book author"
              required
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      {}
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
