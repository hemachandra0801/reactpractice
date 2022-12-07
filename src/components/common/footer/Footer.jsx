import React from "react"
import { blog } from "../../../dummydata"
import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tuned for the latest updates</h1>
            <span>Dummy Text</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>METSA</h1>
            <span>META STUDENT ASSOCIATION</span>
            <p>Dummy Text</p>

            <i className='fab fa-youtube icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/pricing'>Register</Link></li>
              <li><Link to='/courses'>Events</Link></li>
              <li><Link to='/journal'>Blog</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Posts</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have some Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                New Academic Complex, IIT Madras, 600036
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 1234567890
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                example@domain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Hemachandra
        </p>
      </div>
    </>
  )
}

export default Footer