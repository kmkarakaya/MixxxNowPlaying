const path = require('path');
const express = require('express');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose(); // Include sqlite3

const app = express();
const port = process.env.PORT || 3001; // Port number

// Serve static files (e.g., images, CSS) from the directory where server.js is located
app.use(express.static(__dirname));

// Define the database file name
const dbFileName = 'mixxxdb.sqlite';

// Get database path from environment variable, console argument, or default to local directory
const dbPath = process.env.MIXXX_DB_PATH 
    ? path.join(process.env.MIXXX_DB_PATH, dbFileName) 
    : process.argv[2] 
        ? path.join(process.argv[2], dbFileName) 
        : path.join(__dirname, dbFileName);

if (!dbPath) {
    console.error('No database path provided via environment variable.');
    process.exit(1);
} else {
    console.log('Database path:', dbPath);
}

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
        process.exit(1);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/now-playing', (req, res) => {
    db.get('SELECT * FROM v_NowPlaying', (err, row) => {
        if (err) {
            console.error('Error fetching now playing data:', err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(row || {});
        }
    });
});

app.get('/next-playing', (req, res) => {
    db.get('SELECT * FROM v_NextPlaying', (err, row) => {
        if (err) {
            console.error('Error fetching next playing data:', err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(row || {});
        }
    });
});

// Start the server and handle errors
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
}).on('error', (err) => {
    console.error('Error starting server:', err.message);
});
