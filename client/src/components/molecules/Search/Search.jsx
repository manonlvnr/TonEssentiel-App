import { IconSearch } from "@tabler/icons-react";
import './Search.scss';

function Search() {
    return (
        <div className="search">
            <input type="text" className="search__input" placeholder="Rechercher un symptôme, une huile ..." />
            <button className="search__button">
                <IconSearch color="#1D6D1D" size={24} />
            </button>
        </div>
    )
}

export default Search;
