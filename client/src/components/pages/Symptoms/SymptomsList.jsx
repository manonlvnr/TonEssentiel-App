import "./SymptomsList.scss";
import AlphabeticalList from "../../molecules/AlphabeticalList/AlphabeticalList";

const symptoms = ["Aérophargie", "Angine", "Aphte", "Ballonement", "Bronchite", "Constipation", "Courbature", "Diarrhée", "Douleur dentaire", "Engelure", "Grippe", "Hématome", "Hoquet", "Insomnie", "Jambes lourdes", "Mal de dos", "Mal des transports", "Mal de tête", "Nausée", "Vomissement", "Poux", "Rhinopharyngite", "Rhumatisme", "Sciatique", "Stress", "Toux", "Verrue", "Virus", "Varice"];

function SymptomsList() {
    return (
        <div className="symptoms__wrapper">
            <h2>Symptoms</h2>
            <div>
                <AlphabeticalList words={symptoms} link="symptoms"/>
            </div>
        </div>
    )
}

export default SymptomsList;
