import './index.scss'
import LogoS from '../../../assets/images/logop.HEIC'
import picture from '../../../assets/images/logoP.PNG'

const Logo = () => {

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="S" 
       />
      <img className='svg' src={picture} alt="man" />
    </div>
  )
}

export default Logo