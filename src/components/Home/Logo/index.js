import './index.scss'
import LogoS from '../../../assets/images/logop.HEIC'
import picture from '../../../assets/images/logoP.PNG'
import { useRef } from 'react'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="S" 
       />
      <img className='svg' src={picture} alt="picture" />
    </div>
  )
}

export default Logo