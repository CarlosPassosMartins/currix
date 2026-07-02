import './MainHeader.css';
import logo from '../../imgs/icons/Logo.svg';

function MainHeader(){
        return(
            <header className="header-main">
                <a href='/' className="header-logo">
                        <img className='header-img' src={logo} alt="logo-currix"/>
                        <span className='header-title'><span className='header-title_C'>C</span>urrix</span>
                </a>

                <nav className="header-nav">
                    <a className="header-nav_item" href="/templates">Templates</a>
                    <a className="header-nav_item" href="/editor">Editor</a>
                </nav>
            </header>
        );
}

export default MainHeader;