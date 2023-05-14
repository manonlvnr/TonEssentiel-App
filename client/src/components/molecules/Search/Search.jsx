import { IconSearch } from "@tabler/icons-react";
import './Search.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    const [searchState, setSearchState] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search?keyword=${searchState}`);
    };

    return (
        <div className="search">
            <input type="text" className="search__input" placeholder="Rechercher un symptôme, une huile ..." onChange={(e) => setSearchState(e.target.value)}/>
            <button className="search__button" onClick={handleSearch}>
                <IconSearch size={24} />
            </button>
        </div>
    )
}

export default Search;
