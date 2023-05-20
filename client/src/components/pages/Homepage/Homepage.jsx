import Search from '../../molecules/Search/Search';
import Categories from "../../molecules/Categories/Categories";
import MostWanted from "../../molecules/MostWanted/MostWanted";
import FamousOils from "../../organisms/FamousOils/FamousOils";
import HomeHeader from "../../organisms/Header/HomeHeader";


const homeCategories = [{name: "Toutes les huiles", path: "/allOils"}, {name: "Symptômes", path: "/symptoms"}, {name: "Diffusions", path: "/diffusions"}, {name: "Thèmes", path: "/themes"}];

function Homepage() {
    
    return (
        <>
        <HomeHeader />
        <div className='homepage'>
            <Search />
            <Categories categories={homeCategories}/>
            <MostWanted />
            <FamousOils />
        </div>
        </>
    );
}

export default Homepage;
