import Search from '../../molecules/Search/Search';
import Categories from "../../molecules/Categories/Categories";
import MostWanted from "../../molecules/MostWanted/MostWanted";
import FamousOils from "../../organisms/FamousOils/FamousOils";

const homeCategories = [{name: "Toutes les huiles", path: "/allOils"}, {name: "Symptômes", path: "/symptoms"}, {name: "Diffusons", path: "/diffusions"}, {name: "Thèmes", path: "/themes"}];

function Homepage() {
    
    return (
        <div className='homepage'>
            <Search />
            <Categories categories={homeCategories}/>
            <MostWanted />
            <FamousOils />
        </div>
    );
}

export default Homepage;
