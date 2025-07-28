import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. You feedback, questions, and suggestions are important to us as we strive to probide exceptional service to our univeristy community</p>
        <ul>
          <li><img src={mail_icon} alt="" /> devnelsonnachi@gmail.com</li>
          <li><img src={phone_icon} alt="" /> +234 8161696393</li>
          <li><img src={location_icon} alt="" />4th Street AMVE Close, Apo Gudu District, NEPA Sub-station, FCT-ABUJA.</li>
        </ul>
      </div>

      <div className="contact-col">
        <form>
          <label htmlFor="">Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label htmlFor="">Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" id="" rows='6' placeholder='Enter your message' required></textarea>
          <button className='btn dark-btn' type='submit'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact