import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };


  handleAddContact = (newContact) => {
    const { contacts } = this.state;

    // Перевіряємо, чи існує контакт з таким іменем вже в книзі
    const isContactExists = contacts.some((contact) => contact.name === newContact.name);

    if (isContactExists) {
      alert(`${newContact.name} вже є у вашій книзі!`);
      return;
    }

    const contactToAdd = {
      ...newContact,
      id: nanoid(),
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contactToAdd],
    }));
  };

  addFilterContact = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.handleAddContact}/>
        <h2>Contacts</h2>
        <Filter contact={this.filter}
                addFilterContact={this.addFilterContact}/>
        <ContactList onDeleteContact={this.onDeleteContact}
                     getFilteredContacts={this.getFilteredContacts()}/>
      </>
    );
  }

}

export default App;
