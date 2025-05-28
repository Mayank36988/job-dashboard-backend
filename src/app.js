require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// MongoDB Connection with updated options
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    ssl: true,
    retryWrites: true,
    w: 'majority'
})
.then(() => {
    console.log('🌟 Connected to MongoDB Atlas successfully!');
})
.catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
});

// Connection event handlers
mongoose.connection.on('connected', () => {
    console.log('🔗 MongoDB connected');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('📴 MongoDB disconnected');
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/jobs'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});