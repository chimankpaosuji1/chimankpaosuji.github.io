import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import picture from '../../assets/images/logoP.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { StarsCanvas } from '../canvas'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Senior Software Engineer with 7+ years in analysis, design,
            development, testing and implementation of various Internet-based
            applications. Experienced with all stages of development cycle for
            dynamic web projects. Solutions are based on the Microsoft stack
            including SQL Server, C#, Visual Studio, HTML5, CSS3 etc. while
            leveraging the open source technologies such as JQuery, Bootstrap,
            Less and others. Strong background in management and Leadership.
            Proved leader with excellent interpersonal and motivational
            abilities to develop collaborative relationship among
            high-functioning teams. Exceptional problem solver with an aptitude
            for troubleshooting and the ability to quickly master new skill,
            technology or role.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
          <a
            href="https://drive.google.com/file/d/1mwzsk4baQLMQz7K-Xfm8c14eVry-6P7x/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            download
            className="flat-button"
          >
            DOWNLOAD CV
          </a>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          <StarsCanvas />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
