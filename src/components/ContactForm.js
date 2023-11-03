import { useState } from 'react';


const ContactForm = ( {addNewContact} ) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
    addNewContact({name, number});
    setName('');
    setNumber('')
  }

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          placeholder="000-00-00"
        />
      </label>
      <button type='button' onClick={handleSubmit}>Add contact</button>
    </form>
  );
}

export default ContactForm;
