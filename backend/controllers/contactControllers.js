const Contact = require('../models/contactModel');

// Add a new contact
const addContact = async (req, res) => {
    try {
        
        console.log(req.body);
        // Create a new contact and save it to the database
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(req.body); // Send back the created contact
    } catch (err) {
        res.status(400).json(req.body);
    }
};

// Get all contacts
const getContacts = async (req, res) => {
    try {
        // Fetch all contacts from the database
        const contacts = await Contact.find();
        res.status(200).json(contacts); // Send back the contacts
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a contact by ID
const updateContact = async (req, res) => {
    try {
        // Find the contact by ID and update it
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Ensure the updated data is validated
        );
        if (!updatedContact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json(updatedContact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addContact, getContacts, updateContact, deleteContact };
