import Title from "../../atoms/Title/Title";
import Header from "../../organisms/Header/Header";
import "./Uses.scss";

function Uses() {
    return (
        <>
        <Header />
        <Title children="Précautions d'utilisations" />
        <div className="uses__wrapper">
            <div className="uses__content">
                Les huiles essentielles sont de puissants produits naturels aux propriétés bénéfiques pour la santé.<br/><br/>
                Cependant, il est important de les utiliser avec précaution. Certaines huiles essentielles peuvent causer des réactions allergiques, irritations ou brûlures si elles sont appliquées directement sur la peau sans dilution.<br/><br/>
                Il est également important de tenir compte des interactions possibles avec les médicaments et de ne pas ingérer d'huiles essentielles sans l'avis d'un professionnel de la santé.<br/><br/>
                Il est recommandé de suivre les instructions spécifiques pour chaque huile essentielle et de consulter un professionnel de la santé avant de les utiliser pour des problèmes de santé spécifiques.
            </div>
        </div>
        </>
    );
}

export default Uses;
