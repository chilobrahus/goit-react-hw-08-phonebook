import React from 'react';
import { ContactStyled } from './ContactsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredTerm } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterTerm = useSelector(selectFilteredTerm);
  // const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactStyled>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className="contactItem">
            <span>{contact.name} </span>
            <span> {contact.number} </span>
            <Tooltip title="Delete">
              <IconButton
                onClick={() => {
                  onDeleteContact(contact.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </li>
        );
      })}
    </ContactStyled>
  );
};