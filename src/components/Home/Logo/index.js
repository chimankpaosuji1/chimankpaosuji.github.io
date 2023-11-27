import './index.scss'
import LogoS from '../../../assets/images/picture.jpg'
import picture from '../../../assets/images/picture.jpg'

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