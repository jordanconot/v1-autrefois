import React from 'react';
import PizzaLeft from '../asset/pistacio.png';
// import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div
        className='leftSide'
        style={{ backgroundImage: `url(${PizzaLeft})` }}>
      </div>
      <div className='rightSide'>
        <h1>Contactez nous</h1>

        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Nom</label>
          <input name='name' placeholder='Entrez votre nom...' type='text' required />
          <label htmlFor='email'>Email</label>
          <input name='email' placeholder='Entrez votre email...' type='email' required />
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Entrez votre message...'
            required
          ></textarea>
          <button type='submit'> Envoyer votre message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;