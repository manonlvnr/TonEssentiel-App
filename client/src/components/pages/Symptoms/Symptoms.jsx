import "./Symptoms.scss";
import AlphabeticalList from "../../molecules/AlphabeticalList/AlphabeticalList";

const symptomsList = ["Aérophargie", "Angine", "Aphte", "Ballonement", "Bronchite", "Constipation", "Courbature", "Diarrhée", "Douleur dentaire", "Engelure", "Grippe", "Hématome", "Hoquet", "Insomnie", "Jambes lourdes", "Mal de dos", "Mal des transports", "Mal de tête", "Nausée", "Vomissement", "Poux", "Rhinopharyngite", "Rhumatisme", "Sciatique", "Stress", "Toux", "Verrue", "Virus", "Varice"];

function Symptoms() {
    return (
        <div className="symptoms__wrapper">
            <h2>Symptoms</h2>
            <div>
                <AlphabeticalList words={symptomsList} link="symptoms"/>
            </div>
        </div>
    )
}

export default Symptoms;
