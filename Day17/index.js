import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {  // Get Request: To fetch data from the server
    res.json("Hello, World!");
});

app.post("/data", (req, res) => {  // Post Request: To send data to the server
    const data = req.body;
    res.json({ receivedData: data });
});

app.put("/data/:id", (req, res) => {  // Put Request: To update existing data on the server
    const id = req.params.id;
    const updatedData = req.body;
    res.json({ message: `Data with id ${id} has been updated`, updatedData });
});

app.delete("/data/:id", (req, res) => {  // Delete Request: To delete data from the server
    const id = req.params.id;
    res.json({ message: `Data with id ${id} has been deleted` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// CRUD APIs:
// Post Request - Create
// Get Request - Read
// Put Request - Update
// Delete Request - Delete