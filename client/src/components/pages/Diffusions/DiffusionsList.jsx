import { Link } from "react-router-dom";

const Diffusions = ["voie orale", "diffusion", "massage", "bain", "cosmétique", "inhalation"]

function DiffusionsList() {
    return (
        <div className="diffusions__wrapper">
            <h2>Diffusions</h2>
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
