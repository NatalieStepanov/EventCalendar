import { NavLink } from 'react-router-dom'
import './../css/Navigation.css'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from './../images/core-img/logo.png'




const Navigation = () => {
    return (
        <div className='wrapper-main'>
            <div className='top-nav-container'>
                <div className='top-nav-content'>
                    <p>Welcome to beauty salon!</p>
                    <div className='top-nav-text'>
                        <div className='top-nav-time'>
                            <FontAwesomeIcon icon={faClock} className='icon-clock-nav' />
                            <p>Mon-Sat: 8.00 to 17.00</p>
                        </div>
                        <p>|</p>
                        <div className='top-nav-tel'>
                            <FontAwesomeIcon icon={faPhone} className='icon-phone-nav' />
                            <p>Call us: (+12)-345-6789</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-container'>
                <div className='nav-logo'>
                      <img src={logo} alt='logo' />
                </div>
                <div className='nav-btns'>
                      <div>
                        <NavLink exact to = '/'>Home</NavLink>
                      </div>
                      <div>
                        <p>Pages</p>
                      </div>
                      <div>
                        <NavLink exact to = '/portfolio'>Portfolio</NavLink>
                      </div>
                      <div>
                        <NavLink exact to = '/services'>Services</NavLink>
                      </div>
                      <div>
                        <NavLink exact to = '/aboutUs'>About us</NavLink>
                      </div>
                      <div>
                        <NavLink exact to = '/blog'>Blog</NavLink>
                      </div>
                      <div>
                        <NavLink exact to = '/contact'>Contact</NavLink>
                      </div>
                      <div>
                        <button>BOOK NOW</button>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation