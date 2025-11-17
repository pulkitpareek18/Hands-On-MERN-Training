import express from 'express'; // Importing express module

const app = express();  // Creating an express application
const PORT = 3000; // Defining the port number

// Middlewares

app.use(express.json());  // Middleware to parse JSON request bodies

// Routes
app.get("/", (req, res)=>{  // Get Route for the root path
    res.json("Hello Guys!!")
})

app.post("/post-endpoint", (req, res)=>{  // Post Route for /post-endpoint
    const data = req.body;
    res.json({
        message: "Data received successfully",
        receivedData: data
    });
})

app.listen(PORT, ()=>{  // Starting the server
    console.log(`Server is Running on localhost:${PORT}`);
})
