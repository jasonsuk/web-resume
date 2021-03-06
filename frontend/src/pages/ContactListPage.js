import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';

import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import {
  listContacts,
  archiveContact,
  deleteContact,
} from '../redux/actions/contactActions.js';

import {
  CONTACT_ARCHIVE_RESET,
  CONTACT_DELETE_RESET,
} from '../redux/constants/contactConstants.js';

const PortfolioListPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const contactList = useSelector((state) => state.contactList);
  const { loading, error, contacts } = contactList;

  const contactArchive = useSelector((state) => state.contactArchive);
  const {
    success: successArchive,
    loading: loadingArchive,
    error: errorArchive,
  } = contactArchive;

  const contactDelete = useSelector((state) => state.contactDelete);
  const {
    success: successDelete,
    loading: loadingDelete,
    error: errorDelete,
  } = contactDelete;

  useEffect(() => {
    dispatch({ type: CONTACT_ARCHIVE_RESET });
    dispatch({ type: CONTACT_DELETE_RESET });

    dispatch(listContacts());
  }, [dispatch, history, successArchive, successDelete]);

  const archiveContactHandler = (contactId) => {
    if (window.confirm(`Archiving a contact ${contactId}. Are you sure?`)) {
      dispatch(archiveContact(contactId));
    }
  };

  const deleteContactHandler = (contactId) => {
    if (window.confirm(`Deleting a contact ${contactId}. Are you sure?`)) {
      dispatch(deleteContact(contactId));
    }
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='warning'>{error}</Message>
  ) : (
    <Container className='my-5'>
      <h2>List contacts</h2>

      <Table
        striped
        bordered
        hover
        style={{
          verticalAlign: 'middle',
          textAlign: 'center',
          marginTop: '1.6rem',
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Contact sender</th>
            <th>Archive</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts
            .filter((contact) => contact.archived === false)
            .map((contact) => (
              <tr key={contact._id}>
                <td>{contact._id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td style={{ textAlign: 'left' }}>
                  {contact.message.length > 50
                    ? contact.message.substring(0, 35) + '...'
                    : contact.message}
                </td>
                <td>
                  <a href={`mailto:${contact.email}`}>
                    <Button className='btn-icon' variant='success' size='md'>
                      <i className='far fa-envelope'></i>
                    </Button>
                  </a>
                </td>
                <td>
                  {loadingArchive && <Loader />}
                  {errorArchive && (
                    <Message varian='warning'>{errorArchive}</Message>
                  )}
                  <Button
                    className='btn-icon'
                    variant='secondary'
                    size='md'
                    onClick={() => archiveContactHandler(contact._id)}
                  >
                    <i className='far fa-folder-open'></i>
                  </Button>
                </td>
                <td>
                  {loadingDelete && <Loader />}
                  {errorDelete && (
                    <Message varian='warning'>{errorDelete}</Message>
                  )}
                  <Button
                    className='btn-icon'
                    variant='danger'
                    size='md'
                    onClick={() => deleteContactHandler(contact._id)}
                  >
                    <i className='far fa-trash-alt'></i>
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PortfolioListPage;
