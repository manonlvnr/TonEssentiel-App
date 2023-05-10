import { Link } from 'react-router-dom';
import './NotFound.scss'
import { IconArrowLeft } from '@tabler/icons-react';

function NotFound() {
    return (
        <div className="not-found__wrapper">
            <h1 className="not-found__error">404</h1>
            <h3 className="not-found__description">Oups... Cette page n'existe pas</h3>
            <Link to="/" className="not-found__btn">
                <IconArrowLeft />    
                <div>Accueil</div>
            </Link>
        </div>
    );
}

export default NotFound;
