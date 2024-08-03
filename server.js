const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Serve static files (e.g., images, CSS) from the directory where server.js is located
app.use(express.static(__dirname));

// Define the database file name
const dbFileName = 'mixxxdb.sqlite';

// Get database path from environment variable, append the file name if present
const dbPath = process.env.MIXXX_DB_PATH 
    ? path.join(process.env.MIXXX_DB_PATH, dbFileName) 
    : path.join(__dirname, dbFileName);

if (!dbPath) {
    console.error('No database path provided via environment variable.');
    process.exit(1); // Exit with an error code if no path is provided
} else {
    console.log('Database path:', dbPath);
}

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const nowPlayingSql = `SELECT * FROM v_NowPlaying`;
const nextPlayingSql = `SELECT * FROM v_NextPlaying`;

app.get('/now-playing', (req, res) => {
    db.get(nowPlayingSql, (err, row) => {
        if (err) {
            console.error('Error fetching now playing track:', err.message);
            res.status(500).send(err.message);
        } else {
            res.json(row);
        }
    });
});

app.get('/next-playing', (req, res) => {
    db.get(nextPlayingSql, (err, row) => {
        if (err) {
            console.error('Error fetching next playing track:', err.message);
            res.status(500).send(err.message);
        } else {
            res.json(row);
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
