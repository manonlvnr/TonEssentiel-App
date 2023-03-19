import { IconHome, IconListSearch, IconHeart } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import './BottomBar.scss';

const tabs = [{
    route: "/",
    icon: <IconHome color="#1D6D1D" size={24} />,
    label: "Home"
  },{
    route: "/menu",
    icon: <IconListSearch color="#1D6D1D" size={24} />,
    label: "Menu"
  },{
    route: "/favorites",
    icon: <IconHeart color="#1D6D1D" size={24} />,
    label: "Favorites"
  }]

function BottomBar() {
    return (
        <div className="bottom-bar__wrapper">
            {
                tabs.map((tab, index) =>(
                <div key={`tab-${index}`}>
                    <NavLink to={tab.route} className="bottom-bar__links" activeClassName="active">
                        {tab.icon}
                        {/* <div>{tab.label}</div> */}
                    </NavLink >
                </div>
                ))
            }
        </div>
    )
}

export default BottomBar;
