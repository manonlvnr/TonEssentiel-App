import Title from '../../atoms/Title/Title';
import Categories from '../../molecules/Categories/Categories';
import Header from "../../organisms/Header/Header";

const themesCategories = [{name: "Beauté", path: "/themes/beauté"}, {name: "Bien-être", path: "/themes/bien-être"}, {name: "Cuisine", path: "/themes/cuisine"}, {name: "Maison", path: "/themes/maison"}, {name: "Parfum", path: "/themes/parfum"}, {name: "Santé", path: "/themes/santé"}]

function ThemesList() {
    return (
        <>
            <Header />
            <div className="symptoms">
                <Title children={"Thèmes"} />
                <Categories categories={themesCategories} />
            </div>
        </>
    )
}

export default ThemesList;
