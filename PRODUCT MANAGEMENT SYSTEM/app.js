const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); 

app.use(
  session({
    secret: 'secret-key', 
    resave: false,
    saveUninitialized: true,
  })
);

let products = [
  {
    name: "Laptop",
    id: "1",
    price: "40000",
    category: "Digital",
    manufacturingDate: "2024-06-03",
    expDate: "2035-01-30"
  },
  {
    name: "Mobile",
    id: "2",
    price: "15000",
    category: "Digital",
    manufacturingDate: "2024-11-05",
    expDate: "2028-06-30"
  }
];

// Admin and User credentials
const adminCredentials = { username: 'admin', password: 'admin123' };
const userCredentials = { username: 'user', password: 'user123' };



app.get('/', (req, res) => {
  res.render('home'); 
});


app.get('/login', (req, res) => {
  res.render('login'); 
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === adminCredentials.username && password === adminCredentials.password) {
    req.session.role = 'admin';
    res.redirect('/admin-dashboard');
  } else if (username === userCredentials.username && password === userCredentials.password) {
    req.session.role = 'user';
    res.redirect('/user-dashboard');
  } else {
    res.send('Invalid credentials. Please try again.');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.send('Error logging out.');
    res.redirect('/login');
  });
});

// Admin Dashboard
app.get('/admin-dashboard', (req, res) => {
  if (req.session.role === 'admin') {
    res.render('admin'); 
  } else {
    res.redirect('/login');
  }
});

// Add a New Product
app.post('/add-product', (req, res) => {
  if (req.session.role === 'admin') {
    const { productName, productId, price, category, mfgDate, expDate } = req.body;
    products.push({ productName, productId, price, category, mfgDate, expDate });
    res.redirect('/product-list');
  } else {
    res.redirect('/login');
  }
});

// View Product List
app.get('/product-list', (req, res) => {
  if (req.session.role === 'admin') {
    res.json(products); 
  } else {
    res.redirect('/login');
  }
});

// User Dashboard
app.get('/user-dashboard', (req, res) => {
  if (req.session.role === 'user') {
    res.render('user'); 
  } else {
    res.redirect('/login');
  }
});


// Search Products
app.get('/search-products', (req, res) => {
  const { query = '', category = '' } = req.query; 
  
  
  if (!query && !category) {
    return res.json(products);
  }

  
  const filteredProducts = products.filter((product) => {
    const nameMatches = query ? product.name.toLowerCase().includes(query.toLowerCase()) : true;
    const categoryMatches = category ? product.category.toLowerCase().includes(category.toLowerCase()) : true;
    
    return nameMatches && categoryMatches;
  });

  
  res.json(filteredProducts);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
