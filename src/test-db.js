require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
    try {
        console.log('Connecting to:', process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Database connection successful!');
        
        // Test the connection
        const collections = await mongoose.connection.db.collections();
        console.log('📁 Collections:', collections.map(c => c.collectionName));
        
    } catch (error) {
        console.error('❌ Connection error:', error);
    } finally {
        await mongoose.connection.close();
        console.log('🔌 Connection closed');
    }
}

testConnection();