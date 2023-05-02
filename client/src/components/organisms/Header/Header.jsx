import { useNavigate } from 'react-router-dom';
import './Header.scss';
import { IconArrowUpLeft } from '@tabler/icons-react';

function Header() {
    const navigate = useNavigate();
	const handleback = () => {
		navigate(-1, {replace: true});
	}

    return (
        <header className="header">
            <h1 className='header__name'>Ton Essentiel</h1>
            <button className='header__btn' onClick={handleback}>
                <IconArrowUpLeft size={40} />
            </button>
        </header>
    )
}

export default Header;
