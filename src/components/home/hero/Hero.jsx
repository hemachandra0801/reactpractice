import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO METSA' title='We are one of the best' />
            <p>Dummy Text</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW EVENTS <i className='fa fa-long-arrow-alt-right'></i>
              </button>

              

            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero