import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.668502262062!2d80.2280083!3d12.9930419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677f103957db%3A0x4a32b8c8b504a9b9!2sNew%20Academic%20Complex!5e0!3m2!1sen!2sin!4v1670410830161!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map} title="randtitle"></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open to any suggestions</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>New Academic Complex, IIT Madras, 600036</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> exampleemail@domain.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 1234567890</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact