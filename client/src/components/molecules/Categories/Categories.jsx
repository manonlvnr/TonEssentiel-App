import { Link } from "react-router-dom";
import "./Categories.scss";

function Categories({categories}) {
    const categoryElements = categories.map(category => {
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
