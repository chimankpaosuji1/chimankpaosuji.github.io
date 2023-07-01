import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'
import AnimatedLetters from '../AnimatedLetters'
import Marquee from 'react-fast-marquee'
import 'animate.css'
import experienceData from '../../data/experience.json'
import './index.scss'
import { StarsCanvas } from '../canvas'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillBoxStyle = {
    backgroundColor: '#000',
    boxShadow: `0px 0px 30px rgb(58, 58, 58)`,
    // border: `2px solid #4db5ff`,
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

   const renderExperience = (experience) => {
     return (
       <div>
         {experience.map((exp, idx) => {
           return (
             <div className="exp-box " key={idx}>
               <div className="details">
                 <span className="title">{exp.title}</span>
                 <span className="company">{exp.company}</span>
               </div>
               <span className="year">{exp.years}</span>
             </div>
           )
         })}
       </div>
     )
   }
  return (
    <>
      <div className="container skill-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'M',
                'y',
                ' ',
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
                ' ',
                '&',
                ' ',
                'E',
                'x',
                'p',
                'e',
                'r',
                'i',
                'e',
                'n',
                'c',
                'e',
              ]}
              idx={8}
            />
          </h1>
          <p>
            Expert in both front-end and back-end development including
            technologies like{' '}
            <span className="skill-set">
              HTML5, CSS3, JavaScript, Query, Angular2, React, React-Native
              TypeScript, Jasmine, Node, PHP, Laravel Bootstrap, Sass, Git,
            </span>{' '}
            etc. I'm a UI/UX designer and have a good sense of aesthetics, and
            experience in responsive, mobile-first web/Mobile design. I put
            special effort into optimizing my code and providing the best user
            experience: I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
          </p>
          <div className="skill--scroll">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {skillsData.map((skill, id) => (
                <div className="skill--box" key={id} style={skillBoxStyle}>
                  <img src={skillsImage(skill)} alt={skill} />
                  <h3 style={{ color: '#4db5ff' }}>{skill}</h3>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="stage-cube-contS">
          <div>{renderExperience(experienceData.experience)}</div>
          <br />
          <br />
          <StarsCanvas />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
