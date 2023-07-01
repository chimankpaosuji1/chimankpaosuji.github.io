import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StarsCanvas } from '../canvas'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [
    'h',
    'i',
    'm',
    'a',
    'n',
    'k',
    'p',
    'a',
    ' ',
    'O',
    's',
    'u',
    'j',
    'i',
  ]
  const jobArray = [
    'S',
    'e',
    'n',
    'i',
    'o',
    'r',
    ' ',
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

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
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={10}
            />
          </h1>
          <h2>
            Front End Developer / Back End Developer / JavaScript Expert /
            Youtuber
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="info-test">
          <span>
            <FontAwesomeIcon icon={faStar} color="#4db5ff" />
            <FontAwesomeIcon icon={faStar} color="#4db5ff" />
            <FontAwesomeIcon icon={faStar} color="#4db5ff" />
            <FontAwesomeIcon icon={faStar} color="#4db5ff" />
            <FontAwesomeIcon icon={faStar} color="#4db5ff" />
          </span>
          <span className="test">Chima is an incredible Developer</span>
          <span>Deborah Etta</span>
        </div>
        <Logo />
        <StarsCanvas />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
