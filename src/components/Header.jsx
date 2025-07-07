import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
        <div className="header-container">
            <p className="logo">EcoFood</p>
            <nav className="navigation">
            <div className="nav-links">
                <a href="#somos-ecofood" className="nav-link">Quiénes Somos</a>
                <a href="#que-hacemos" className="nav-link">Qué Hacemos</a>
            </div>
            <div className="nav-buttons">
                <Link to="/login"><button className="nav-button">Iniciar Sesión</button></Link>
            </div>
            </nav>
        </div>
        </header>
    );
}

export default Header;
