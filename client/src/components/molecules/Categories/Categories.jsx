import { Link } from "react-router-dom";
import "./Categories.scss";

const homeCategories = [{name: "Toutes les huiles", path: "/allOils"}, {name: "Symptômes", path: "/symptoms"}, {name: "Diffusons", path: "/diffusions"}, {name: "Thèmes", path: "/themes"}];

function Categories() {
    const categoryElements = homeCategories.map(category => {
        return (
            <Link to={category.path} className="category__container">
                <h2 className="category__title">{category.name}</h2>
            </Link>
        )
    });

    return (
        <div className="categories__wrapper">
            {categoryElements}
        </div>
    )
}

export default Categories;
