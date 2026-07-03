import './MainHeader.css';
import logo from '../../imgs/icons/Logo.svg';
import { NavLink, Link } from 'react-router-dom';

function MainHeader(){
        return(
            <header className="header-main">
                <Link to="/" className="header-logo">
                        <img className='header-img' src={logo} alt="logo-currix"/>
                        <span className='header-title'><span className='header-title_C'>C</span>urrix</span>
                </Link>

                <nav className="header-nav">
                    <NavLink className={({isActive}) => isActive ? "header-nav_item active" : "header-nav_item"} to="/templates">Templates</NavLink>
                    <NavLink className={({isActive}) => isActive ? "header-nav_item active" : "header-nav_item"} to="/editor">Editor</NavLink>
                </nav>
            </header>
        );
}

export default MainHeader;