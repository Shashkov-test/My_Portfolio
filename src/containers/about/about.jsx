import React from 'react'
import './about.scss';
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeader/pageHeader';
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

const personaDetails = [
  {
    label: "Name",
    value: "Shashkov Victor",
  },

  {
    label: "Age",
    value: "21",
  },

  {
    label: "Address",
    value: "Rivne, Rivnens'ka Oblast', Ukraine",
  },

  {
    label: "Email",
    value: "deduxes@gmail.com",
  },

  {
    label: "Contact phone number",
    value: "+380931005141",
  }
];

const personaInfo = "I am looking for a Front End Developer position. I have been learning and improving my skills for overa year. When I wrote my first landing page using javascript, looking at the result, I can say withconfidence that I am very enthusiastic and I like to create the client side of the interface. Currently, I really want to develop in this area and grow technically. Thus, I would like to contribute to the company's projects. About myself, I can add that I am diligent, persistent, and ready to work for results.";

const About = () => {
  return (
    <section className='about'>
      <PageHeaderContent headerText='About me' icon={<BsInfoCircleFill size={40}/>} />

      <div className="about__content">

        <div className='about__content__personalWrapper'>

          <Animate 
            play={true} 
            duration={1.5} 
            delay={0.5} 
            start={{
              transform: 'translateX(-1000px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}>

              <h3>Front End Developer</h3>

              <p>{personaInfo}</p>
          </Animate>

          <Animate 
            play={true} 
            duration={1.5} 
            delay={1.5} 
            start={{
              transform: 'translateX(-500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}>

              <h3 className='personalInfoText'>Personal Inormation</h3>

              <ul>
                {
                  personaDetails.map((item, key) => (
                    <li key={key}>
                      <span className='title'>
                        {item.label}
                      </span>

                      <span className='value'>
                        {item.value}
                      </span>
                    </li>
                  ))
                }
              </ul>
              
          </Animate>
        </div>

        <div className='about__content__servicesWrapper'>
        <Animate 
            play={true} 
            duration={1.5} 
            delay={1} 
            start={{
              transform: 'translateX(700px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}>
              <div className="about__content__servicesWrapper__innerContent">
                <div>
                  <FaDev size={60} color="var(--theme-main-color)"/>
                </div>

                <div>
                <FaDatabase size={60} color="var(--theme-main-color)"/>  
                </div>

                <div>
                  <DiAndroid size={60} color="var(--theme-main-color)"/>
                </div>

                <div>
                  <DiApple size={60} color="var(--theme-main-color)"/>
                </div>
              </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default About;