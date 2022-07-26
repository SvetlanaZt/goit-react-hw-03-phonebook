import React from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import css from './form.module.css'

export default class Form extends React.Component {
state = {
   name: '',
  number: '',
    }
      onChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value })
    }

    onSuubmit = evt => {
        evt.preventDefault();
        this.props.onClick(this.state)

        this.reset()
        
    }
    reset = () => {
        this.setState({name: '', number: '',})
    }
  render() {
      const idName = nanoid()
      const idNumber = nanoid()
    return (
      <>
      <form onSubmit={this.onSuubmit}>
          <label className={css.label}>
      Name <input className={css.input}
        type="text"
            name="name"
            id={idName}
        value={this.state.name}
        onChange={this.onChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
            /> </label>
          <label className={css.label}>Number 
            <input className={css.input}
   onChange={this.onChange}
  type="tel"
  name="number"
  id={idNumber}
   value={this.state.number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/></label>
      <button type='submit'>Add Contact</button>
      </form>
        </>)
   }
}

Form.propTypes = {
    onClick: PropTypes.func.isRequired,
};