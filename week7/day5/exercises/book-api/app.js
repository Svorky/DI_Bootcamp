import express from "express";
const app = express();
const port = 5000;

let books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    }
];

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.get("/api/books/:bookID", (req, res) => {
    const id = Number(req.params.bookID);
    const book = books.find((book) => book.id === id);

    if (!book) {
        return res.status(404).send("Book not found");
    }
    res.json(book);
})

app.use(express.json())

app.post("/api/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body?.title,
        author: req.body?.author,
        publishedYear: req.body?.publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});