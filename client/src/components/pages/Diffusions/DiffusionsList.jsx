import Title from '../../atoms/Title/Title';
import Categories from "../../molecules/Categories/Categories";

const diffusionsCategories = [{name: "Voie orale", path: "/diffusions/voie-orale"}, {name: "Diffusion", path: "/diffusions/diffusion"}, {name: "Massage", path: "/diffusions/massage"}, {name: "Bain", path: "/diffusions/bain"}, {name: "Cosmétique", path: "/diffusions/cosmetique"}, {name: "Inhalation", path: "/diffusions/inhalation"}]

function DiffusionsList() {
    return (
        <div className="diffusions">
            <Title children={"Diffusions"} />
            <Categories categories={diffusionsCategories} />
        </div>
    )
}

export default DiffusionsList;
