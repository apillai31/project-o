const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({origin: true, credentials: true})); // Enable CORS
app.use(express.json()); // To parse JSON bodies (if needed)

// Configure multer to save uploaded files
const storage = multer.memoryStorage(); // Keep file in memory
const upload = multer({ storage });

// An endpoint to upload a CSV file
app.post('http://localhost:5000/api/upload', upload.single('file'), (req, res) => {
    // Check if a file is uploaded
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    // Return the uploaded file back to the client
    res.set('Content-Type', req.file.mimetype);
    res.set('Content-Disposition', 'attachment; filename=' + req.file.originalname);
    res.send(req.file.buffer); // Send the file buffer
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});