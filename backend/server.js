// server.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConn'); // MongoDB connection logic
require('dotenv').config(); // Load .env variables

const app = express();
const port = process.env.PORT || 4000;

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use('/image', express.static('uploads'));

// ✅ Connect to MongoDB
connectDB(); // defined in ./config/dbConn.js

// ✅ API Routes
app.use('/api/food', require('./routes/foodRouter'));
app.use('/api/user', require('./routes/userRouter'));
app.use('/api/cart', require('./routes/cartRouter'));
app.use('/api/order', require('./routes/orderRouter'));

// ✅ Root Route (health check)
app.get('/', (req, res) => {
    res.send('✅ API Working');
});

// ✅ Start Server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
