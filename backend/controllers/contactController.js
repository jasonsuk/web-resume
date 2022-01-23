import express from 'express';
import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js';

// DESC: Get all contacts
// ROUTE: GET /api/contacts
// ACCESS: Private

export const getContacts = asyncHandler(async (req, res) => {
  const skills = await Contact.find({}).sort({ timestamp: -1 });
  res.status(200).json(skills);
});

// DESC: Create/Make a contact
// ROUTE: POST /api/contacts
// ACCESS: Public

export const makeContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (email && email.length > 0) {
    const contact = new Contact();
    contact.name = name;
    contact.email = email;
    contact.message = message;

    const createdContact = await contact.save();
    res.status(201).json(createdContact);
  } else {
    res.status(400);
    throw new Error('No email address found.');
  }
});

// DESC: Delete a contact (housekeeping purpose)
// ROUTE: DELETE /api/contacts/:id
// ACCESS: Private

export const deleteContact = asyncHandler(async (req, res) => {
  const contactId = req.params.id;
  const contact = await Contact.findById(contactId);

  if (contact) {
    await contact.remove();
    res.json({
      message: `Successfully deleted the contact ${contactId}`,
    });
  } else {
    res.status(400);
    throw new Error(`Portfolio ${portfolioId} not found.`);
  }
});

// DESC: Archive a contact
// ROUTE: PATCH /api/contacts/:id
// ACCESS: Private

export const archiveContact = asyncHandler(async (req, res) => {
  const contactId = req.params.id;
  const contact = await Contact.findById(contactId);

  if (contact) {
    contact.archived = true;
    await contact.save();

    res.json({
      message: `Successfully archived the contact ${contactId}`,
    });
  } else {
    res.status(400);
    throw new Error(`Portfolio ${portfolioId} not found.`);
  }
});
