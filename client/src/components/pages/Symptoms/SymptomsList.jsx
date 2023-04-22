import "./SymptomsList.scss";
import AlphabeticalList from "../../molecules/AlphabeticalList/AlphabeticalList";
import Title from '../../atoms/Title';

const symptoms = ["Aérophargie", "Angine", "Aphte", "Ballonement", "Bronchite", "Constipation", "Courbature", "Diarrhée", "Douleur dentaire", "Engelure", "Grippe", "Hématome", "Hoquet", "Insomnie", "Jambes lourdes", "Mal de dos", "Mal des transports", "Mal de tête", "Nausée", "Vomissement", "Poux", "Rhinopharyngite", "Rhumatisme", "Sciatique", "Stress", "Toux", "Verrue", "Virus", "Varice"];

function SymptomsList() {
    return (
        <div className="symptoms__wrapper">
            <Title children={"Symptômes"} />
            <div>
                <AlphabeticalList words={symptoms} link="symptoms"/>
            </div>
        </div>
    )
}

export default SymptomsList;
