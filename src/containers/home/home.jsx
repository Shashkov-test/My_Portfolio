import React from 'react'
import { Link } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './home.scss';

const Home = () => {
  return (
    <section id='home' className='home'>
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Victor
          <br />
          Front end developer
        </h1>
      </div>

      <Animate 
        play={true} 
        duration={1.5} 
        delay={1} 
        start={{
          transform: 'translateY(550px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}>
        <div className="home__contact-me">
          <Link to={'/contact'}>
            <button>
              Contact me
            </button>
          </Link>
        </div>
      </Animate>
    </section>
  )
}

export default Home;