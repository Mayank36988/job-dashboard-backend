# README for Job Board Server

## Overview
This is the server-side application for the Mini Job Board project. It is built using Node.js and Express, and it connects to a MongoDB database to manage job listings.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the server directory:
   ```
   cd job-board/server
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the `server` directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

### Running the Server
To start the server, run:
```
npm start
```
The server will run on `http://localhost:5000`.

### API Endpoints
- **GET /api/jobs**: Fetch all job listings.
- **GET /api/jobs/:id**: Fetch a job by its ID.
- **POST /api/jobs**: Add a new job listing.

## Testing
You can run tests using:
```
npm test
```

## License
This project is licensed under the MIT License.