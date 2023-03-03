import React from 'react'
import {GiSkills} from 'react-icons/gi';
import PageHeaderContent from '../../components/pageHeader/pageHeader';
import './skills.scss';
import { skillsData } from './mySkills';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';


const Skills = () => {
  return (
    <section className='skills'>
      <PageHeaderContent headerText='My skills' icon={<GiSkills size={40}/>} />

      <div className="skills__content-wrapper">
        {
          skillsData.map(item => (
            <div key={item.label} className="skills__content-wrapper__inner-content">
              <div className='justForWidth'>
                <Animate
                  key={item.label}
                  play
                  duration={1}
                  delay={0.3}
                  start={{
                    transform: "translateX(-400px)"
                  }}
                  end={{
                    transform: "translateX(0px)"
                  }}>

                    <h3 className='skills__content-wrapper__inner-content__category-text'>
                      {item.label}
                    </h3>

                    <div className='skills__content-wrapper__inner-content__progressbar-container'>
                      {item.data.map(skillsItem => (
                        <AnimateKeyframes
                          key={skillsItem.skillName}
                          play
                          duration={1}
                          keyframes={["opacity: 1", "opacity: 0"]}
                          iterationCount="1"
                        >

                          <div className="progressbar-wrapper" key={skillsItem.skillName}>

                            <div className="justForFlex">
                              <p>
                                {skillsItem.skillName}
                              </p>

                              {skillsItem.icon}
                            </div>

                            <Line 
                              percent={skillsItem.percentageOfKnowledge}
                              strokeColor="var(--theme-main-color)"
                              strokeWidth="2"
                              trailWidth={"2"}
                              strokeLinecap="square"
                            />

                          </div>

                        </AnimateKeyframes>
                      ))}
                    </div>

                </Animate>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills;