import { IconHome, IconListSearch, IconHeart } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import './BottomBar.scss';

function BottomBar() {

    return (
        <div className="bottom-bar__wrapper">
            <NavLink to="/" className={({isActive}) => (isActive ? 'bottom-bar__link active' : 'bottom-bar__link')}><IconHome color="#1D6D1D" size={24} /></NavLink >
            <NavLink to="/menu" className={({isActive}) => (isActive ? 'bottom-bar__link active' : 'bottom-bar__link')}><IconListSearch color="#1D6D1D" size={24} /></NavLink >
            <NavLink to="/favorites" className={({isActive}) => (isActive ? 'bottom-bar__link active' : 'bottom-bar__link')}><IconHeart color="#1D6D1D" size={24} /></NavLink >
        </div>
    )
}

export default BottomBar;
