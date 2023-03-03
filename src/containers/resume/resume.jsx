import React from 'react'
import {FaAddressCard} from 'react-icons/fa';
import PageHeaderContent from '../../components/pageHeader/pageHeader';
import './resume.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {data} from './myResume';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa'

const Resume = () => {
  return (
    <section className='resume'>
      <PageHeaderContent headerText='My Resume' icon={<FaAddressCard size={40}/>} />


      <div className="timeline">
        <div className="timeline__experience">
          <h3 className='timeline__experience__header-text'>
            Experience
          </h3>

          <VerticalTimeline 
            layout='1-column'
            lineColor='var(--theme-main-color)'
          >
            {
              data.experience.map((item, key) => (
                <VerticalTimelineElement
                  key={key}
                  className='timeline__experience__vertical-timeline-element'
                  contentStyle={{
                    background: "none",
                    color: "var(--theme-sub-color)",
                    border: "1.5px solid var(--theme-main-color)",
                  }}
                  icon={<MdWork/>}
                  iconStyle={{
                    background: '#181818',
                    color: 'var(--theme-main-color)',
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>
                  </div>

                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>

                  <p className='p'>
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>

        <div className="timeline__education">
          <h3 className='timeline__education__header-text'>
            Education
          </h3>

          <VerticalTimeline 
            layout='1-column'
            lineColor='var(--theme-main-color)'
          >
            {
              data.education.map((item, key) => (
                <VerticalTimelineElement
                  key={key}
                  className='timeline__experience__vertical-timeline-element'
                  contentStyle={{
                    background: "none",
                    color: "var(--theme-sub-color)",
                    border: "1.5px solid var(--theme-main-color)",
                  }}
                  icon={<FaUniversity/>}
                  iconStyle={{
                    background: '#181818',
                    color: 'var(--theme-main-color)',
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>
                  </div>

                  <h4 className="vertical-timeline-element-subtitle">
                      {item.subTitle}
                  </h4>

                  <p className='p'>
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Resume;