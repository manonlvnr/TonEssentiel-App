import { useEffect, useState } from "react";
import Search from '../../molecules/Search/Search';
import Categories from "../../molecules/Categories/Categories";
import MostWanted from "../../molecules/MostWanted/MostWanted";
import FamousOils from "../../organisms/FamousOils/FamousOils";


function Homepage() {
    
    return (
        <div className='Homepage'>
            <Search />
            <Categories />
            <MostWanted />
            <FamousOils />
        </div>
    );
}

export default Homepage;
