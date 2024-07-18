import express from "express";
const app = express();
const port = 3000;

let blogPosts = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        content: "Closures are a fundamental concept in JavaScript...",
    },
    {
        id: 2,
        title: "A Guide to CSS Flexbox",
        content: "Flexbox is a powerful layout module in CSS...",
    },
    {
        id: 3,
        title: "Introduction to React Hooks",
        content: "React Hooks allow you to use state and other features...",
    },
];

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/posts", (req, res) => {
    res.json(blogPosts);
});

app.get("/api/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const post = blogPosts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.json(post);
});

app.use(express.json()); // parse json body content

app.post("/api/posts", (req, res) => {
    const newPost = {
        id: blogPosts.length + 1,
        title: req.body.title,
        content: req.body.content,
    };
    blogPosts.push(newPost);
    res.status(201).json(newPost);
});

app.put("/api/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = blogPosts.findIndex((post) => post.id === id);
    if (index === -1) {
        return res.status(404).send("Post not found");
    }
    const updatedPost = {
        ...blogPosts[index],
        ...req.body
    };
    blogPosts[index] = updatedPost;
    res.status(200).json("Post updated");
});

app.delete("/api/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = blogPosts.findIndex((post) => post.id === id);
    if (index === -1) {
        return res.status(404).send("Post not found");
    }
    blogPosts.splice(index, 1);
    res.status(200).json("Post deleted");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
