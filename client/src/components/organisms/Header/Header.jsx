import { useNavigate } from 'react-router-dom';
import BackButton from '../../atoms/BackButton/BackButton';
import './Header.scss';


function Header() {
    const navigate = useNavigate();
	const handleback = () => {
		navigate(-1, {replace: true});
	}

    return (
        <header className="header">
            <h1 className='header__name'>Ton Essentiel</h1>
            <BackButton handleback={handleback} />
        </header>
    )
}

export default Header;
