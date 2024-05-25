import "./Navbar.css"
import logo from '../../assets/logo.svg'
import greenArrow from '../../assets/green-arrow.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="dogather-logo" />
                <p>dogather</p>
            </div>
            <div className="navbar-links">
                <div>
                    <ul className="navbar-pages">
                        <li className="navbar-link">
                            <a href=''>about us</a>
                            <img src={greenArrow} alt="green arrow"/>
                        </li>
                        <li className="navbar-link">
                            <a href=''>features</a>
                            <img src={greenArrow} alt="green arrow"/>
                        </li>
                        <li className="navbar-link">
                            <a href=''>contact</a>
                            <img src={greenArrow} alt="green arrow"/>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="navbar-login">
                       <li className="navbar-link">
                            <a href=''>login</a>
                            <img src={greenArrow} alt="green arrow"/>
                        </li> 
                    </ul> 
                </div>
            </div>
            <button className="register-btn">register</button>
        </nav> 
    )
}

export default Navbar