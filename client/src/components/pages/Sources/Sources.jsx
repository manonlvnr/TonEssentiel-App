import Header from "../../organisms/Header/Header";
import Title from '../../atoms/Title/Title';
import './Sources.scss';

function Sources() {
    return (
        <>
        <Header />
        <Title children="Sources" />
        <div className="sources__wrapper">
            <div className="sources__item">
                <h2 className="sources__item__title">Mentions</h2>
                <div className="sources__item__content hilight">Icons de types de diffusions :</div>
                <div className="sources__item__content">Toutes les icônes proviennent de Freepik disponible sur la plateforme Flaticon.com</div>
                <div className="sources__item__content hilight">Images d'huiles :</div>
                <div className="sources__item__content">Image de <a href="https://fr.freepik.com/vecteurs-libre/collection-bouteilles-huile-essentielle-aquarelle_12277121.htm#page=2&query=dessinhuilesessentiel&position=45&from_view=search&track=robertav1_2_sidr?log-in=google">Freepik</a></div>
            </div>
            <div className="sources__item">
                <h2 className="sources__item__title">Soucres bibliographques</h2>
                <ul className="sources__item__content">
                    <li>
                        Se soigner avec les huiles essentielles de Françoise Couic-Marinier
                    </li>
                    <li>
                        Ma bible des huiles essentielles de Danièle Festy
                    </li>
                    <li>
                        Le grand livre des huiles essentielles médecine de l'âme et voie d'éveil de Agnès Addey
                    </li>
                    <li>
                        Aromathérapie: 100 huiles essentielles de Dominique Baudoux
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Sources;
