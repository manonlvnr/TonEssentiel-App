import { Link } from "react-router-dom";

const symptomsList = ["Aérophargie", "Angine", "Aphte", "Ballonement", "Bronchite", "Constipation", "Courbature", "Diarrhée", "Douleur dentaire", "Engelure", "Grippe", "Hématome", "Hoquet", "Insomnie", "Jambes lourdes", "Mal de dos", "Mal des transports", "mal de tête", "Nausée", "Vomissement", "Poux", "Rhinopharyngite", "Rhumatisme", "Sciatique", "Stress", "Toux", "Verrue", "Virus", "Varice"];

function Symptoms() {
    const listElement = symptomsList.map(symptom => {
        return (
            <Link to={`/symptoms/${symptom}`} className="symptom__container">
                <li className="symptom__title">{symptom}</li>
            </Link>
        )})

    return (
        <>
            <h2>Symptoms</h2>
            <ul className="symptoms__wrapper">
                {listElement}
            </ul>
        </>
    )
}

export default Symptoms;
