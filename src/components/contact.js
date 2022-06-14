import React from 'react'
import '../contact.css'

function Contact() {


  return (
    <div>
      <form className ="form" action="https://formspree.io/f/mdobgell" method="post">
          <label>Full Name</label>
          <input type="text" name="name" id="name" placeholder="John Doe" required maxLength={30} />
          <label>Email Address</label>
          <input type="email" name="email" id="email" required placeholder="example@johndoe.com" />
          <textarea name="message" id="messagebox" cols="10" rows="10" placeholder="Enter text here"
            required maxLength={500}></textarea>
          <button type="submit" className ="touchbtn">Get in touch with me</button>
        <span className ="error-message"></span>
      </form>
    </div>
  )
}

export default Contact