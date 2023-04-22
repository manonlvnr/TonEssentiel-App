import { Link } from "react-router-dom";
import Title from '../../atoms/Title';

const Diffusions = ["voie orale", "diffusion", "massage", "bain", "cosmétique", "inhalation"]

function DiffusionsList() {
    return (
        <div className="diffusions__wrapper">
            <Title children={"Diffusions"} />
            <div>
                <lu>
                    {Diffusions.map((diffusion) => (
                        <li key={diffusion.id}>
                            <Link to={`/diffusions/${diffusion}`}>{diffusion}</Link>
                        </li>
                    ))}
                </lu>
            </div>
        </div>
    )
}

export default DiffusionsList;
