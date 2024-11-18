import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <div className='form'>
    <div class="contact-form">
    <h2>LET'S CONNECT!</h2>
    <form action="#" method="post">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
</div>
</div>

  )
}

export default contact