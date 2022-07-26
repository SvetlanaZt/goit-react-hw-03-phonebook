import React from 'react';
import Form from './Form/form'
import Filter from './Filter/filter';
import { nanoid } from 'nanoid'
import Contacts from './Contacts/contacts';


export class App extends React.Component {
  
  state = {
    contacts: [],
    filter: '',
 }
  
  takeData = (evt) => {
    const { name, number } = evt;

    const takeContactName = this.state.contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())
    if (takeContactName) {
      alert(`${name} is already in contacts`)
      return
     }
      this.setState(prevState => {
        return {
          contacts: [{id: nanoid(), name, number }, ...prevState.contacts]
        }
      })
  }

  changeInput = (evt) => { 
    this.setState({ filter: evt.currentTarget.value})
  }

   onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== id),
      };
    });
   };
  
  
  
  componentDidMount() {
    console.log('didMount')
    const contactsLocalStore = localStorage.getItem('contacts');
    const getContacts = JSON.parse(contactsLocalStore)
    if (getContacts) {
      this.setState({contacts : getContacts})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('didUpdate')
    console.log(prevState.contacts)
    console.log(this.state.contacts)
    if (this.state.contacts !== prevState.contacts) {
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}
  }



  render() {
  const onChangeInput = this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    return (
      <div>
         <h1>Phonebook</h1>
        <Form onClick={this.takeData} />
        
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeInput} />
        <Contacts value={onChangeInput} onDelete={this.onDelete} />
        </div>
    )
   }
}