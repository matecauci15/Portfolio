import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
    <p className='font-md sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
    {btnText}
    <img className='w-4 h-4 object-contain' src={arrow} />
    </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5' >
            Hi, I am <span className='font-semibold'>Mateo</span> 👋
            <br/>
            An Argentinian Full stack developer
        </h1>
    ),
    2: (
        <InfoBox 
            text='Just finished soyHenry Bootcamp, where I worked in many full stack projects and also in a project as a team'
            link='/about'
            btnText="Learn more"
        />
    ),
    3: (

        <InfoBox 
            text='Here you can find out all of my projects where I have been working'
            link='/projects'
            btnText="Visist my portfolio"
        />

    ),
    4: (
        <InfoBox 
            text='Wanna contact with me? I will be pleased'
            link='/contact'
            btnText="Find me out"
        />
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo