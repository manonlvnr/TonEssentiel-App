import { IconHome, IconListSearch, IconHeart } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import './BottomBar.scss';

function BottomBar() {

    return (
        <div className="bottom-bar__wrapper">
            <NavLink to="/" className={({isActive}) => (isActive ? 'bottom-bar__link active' : 'bottom-bar__link')}><IconHome size={24} /></NavLink >
            <NavLink to="/menu" className={({isActive}) => (isActive ? 'bottom-bar__link active' : 'bottom-bar__link')}><IconListSearch size={24} /></NavLink >
            <NavLink to="/favorites" className={({isActive}) => (isActive ? 'bottom-bar__link active' : 'bottom-bar__link')}><IconHeart size={24} /></NavLink >
        </div>
    )
}

export default BottomBar;
