// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory data store for products
let products = [];

// Route to get all products (User  Role)
app.get('/products', (req, res) => {
    res.json(products);
});

// Route to get a single product by ID (User  Role)
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

// Route to add a new product (Admin Role)
app.post('/products', (req, res) => {
    const { name, description, price } = req.body;

    // Simple validation
    if (!name || !description || !price) {
        return res.status(400).send('All fields are required');
    }

    const newProduct = {
        id: products.length + 1,
        name,
        description,
        price,
        available: true
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
