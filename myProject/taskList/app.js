// Import required modules
const express = require('express');

// Define a simple database object
const database = {
    records: [],

    // Function to add a record to the database
    addRecord: function(record) {
        this.records.push(record);
    },

    // Function to retrieve all records from the database
    getAllRecords: function() {
        return this.records;
    },

    // Function to retrieve a record by its ID
    getRecordById: function(id) {
        return this.records.find(record => record.id === id);
    },

    // Function to update a record
    updateRecord: function(id, newData) {
        const index = this.records.findIndex(record => record.id === id);
        if (index !== -1) {
            this.records[index] = { ...this.records[index], ...newData };
            return true; // Updated successfully
        }
        return false; // Record not found
    },

    // Function to delete a record by its ID
    deleteRecord: function(id) {
        const index = this.records.findIndex(record => record.id === id);
        if (index !== -1) {
            this.records.splice(index, 1);
            return true; // Deleted successfully
        }
        return false; // Record not found
    }
};

// Create an Express application
const app = express();
const port = 3000; // Port on which the server will run

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to get all records
app.get('/records', (req, res) => {
    res.json(database.getAllRecords());
});

// Route to get a record by ID
app.get('/records/:id', (req, res) => {
    const record = database.getRecordById(parseInt(req.params.id));
    if (record) {
        res.json(record);
    } else {
        res.status(404).json({ error: 'Record not found' });
    }
});

// Route to add a record
app.post('/records', (req, res) => {
    const record = req.body;
    database.addRecord(record);
    res.status(201).json(record);
});

// Route to update a record
app.put('/records/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newData = req.body;
    const updated = database.updateRecord(id, newData);
    if (updated) {
        res.json({ message: 'Record updated successfully' });
    } else {
        res.status(404).json({ error: 'Record not found' });
    }
});

// Route to delete a record
app.delete('/records/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = database.deleteRecord(id);
    if (deleted) {
        res.json({ message: 'Record deleted successfully' });
    } else {
        res.status(404).json({ error: 'Record not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
