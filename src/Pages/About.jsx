import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {CTA} from '../Components/CTA';

import { skills, experiences } from '../constants'

const About = () => {
  return (
    <section className='max-container'>
    <h1 className='head-text'>
      Hello, I am <span className='blue-gradient_text font-semibold drop-shadow'>Mateo</span>
      </h1>
      <div className='mt-5 flex-col gap-3 text-slate-500'>
        <p>
          Full stack developer based in Argentina. Since I discovered my interest in programming and technology, I have given myself fully to explore and go to deep into this amazing world. During my academic and personal career, I have had the opportunity to work on various projects and face challenges that have allowed me to develop my skills as a programmer 
        </p>
      </div>
      <div className='py-10 flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl} 
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>My experience</h3>
        <div className='mt-5 flex-col gap-3 text-slate-500'>
        <p>
          I have been working with different sort of tecnologies and frameworks. But it will continue growing...
          Here's the rundown:</p>
      </div> 
      <div className="mt-12 flex">
          <VerticalTimeline>
          {experiences.map((exp) => (
            <VerticalTimelineElement 
            key={exp.company_name}
            date={exp.date}
            icon={
            <div className="flex justify-center items-center w-full h-full">
              <img src={exp.icon} alt={exp.company_name} className="w-[60%] h-[60%] object-contain" />
            </div>}
            iconStyle={{
              background: exp.iconBg
            }}
            contentStyle={{
              borderBottom: '8px',
              borderStyle: 'solid',
              borderBottomColor: exp.iconBg,
              boxShadow: 'none'
            }}
            >
              <div>
              <h3 className="text-black text-xl font-poppins"
              style={{margin:0}}>
                {exp.title}
              </h3>
              <p className="text-black-500 font-medium font-base">
                {exp.company_name}
              </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {exp.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
            </VerticalTimelineElement>
          ))}
          </VerticalTimeline>
      </div>
      </div>
      <hr className="border-slate-200"/>
      <CTA></CTA>
    </section>
  )
}     

export default About

