import { Link } from 'react-router-dom';
import './Header.scss';

function HomeHeader() {
    return (
        <header className="header home">
            <Link to="/">  
                <h1 className='header__name'>Ton Essentiel</h1>
            </Link>
        </header>
    )
}

export default HomeHeader;
