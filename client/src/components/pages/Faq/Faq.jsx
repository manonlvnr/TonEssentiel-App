import { useState } from "react";
import Title from "../../atoms/Title/Title";
import Header from "../../organisms/Header/Header";
import "./Faq.scss";
import { IconPlus, IconMinus } from "@tabler/icons-react";

function Faq() {
    const [opened, setOpened] = useState(null);

    const handleToggle = (id) => {
        setOpened((prevOpened) => (prevOpened === id ? null : id));
    };

    return (
        <>
        <Header />
        <Title children="FAQ" />
        <div className="faq__wrapper">
            <ul className="faq__accordion">
                <h2 className="faq__accordion__title">Les questions les plus fréquements posées sur les huiles essentielles :</h2>
                    <li key={"question1"} className={`faq__accordion__item ${ opened === "question1" ? "open" : ""}`}>
                        <button onClick={() => handleToggle("question1")} className="faq__accordion__question">
                        <div>Comment conserver les huiles essentielles pour préserver leur efficacité ?</div>
                            <span className="item__control">
                                {opened === "question1" ? ( <IconMinus /> ) : ( <IconPlus /> )}
                            </span>
                        </button>
                        <p className={`faq__accordion__answer ${ opened === "question1" ? "open" : ""}`}>Pour préserver l'efficacité des huiles essentielles, conservez-les dans des flacons en verre teinté, à l'abri de la lumière et de la chaleur. Rangez-les dans un endroit frais, sec et sombre, en veillant à bien refermer les bouchons après utilisation.</p>
                    </li>
                    <li key={"question2"} className={`faq__accordion__item ${ opened === "question2" ? "open" : ""}`}>
                        <button onClick={() => handleToggle("question2")} className="faq__accordion__question">
                        <div>Quelles sont les huiles essentielles déconseillées pour une utilisation chez les enfants et les bébés ?</div>
                            <span className="item__control">
                                {opened === "question2" ? ( <IconMinus /> ) : ( <IconPlus /> )}
                            </span>
                        </button>
                        <p className={`faq__accordion__answer ${ opened === "question2" ? "open" : ""}`}>Certaines huiles essentielles peuvent être trop puissantes pour les enfants et les bébés, et il est recommandé de les éviter. Parmi celles-ci, on trouve l'eucalyptus, le romarin, la menthe poivrée et le thym. Il est préférable de consulter un professionnel de la santé avant d'utiliser des huiles essentielles sur les enfants ou les bébés.</p>
                    </li>
                    <li key={"question3"} className={`faq__accordion__item ${ opened === "question3" ? "open" : ""}`}>
                        <button onClick={() => handleToggle("question2")} className="faq__accordion__question">
                        <div>Qu'est-ce qu'une huile essentielle et comment est-elle produite ?</div>
                            <span className="item__control">
                                {opened === "question3" ? ( <IconMinus /> ) : ( <IconPlus /> )}
                            </span>
                        </button>
                        <p className={`faq__accordion__answer ${ opened === "question3" ? "open" : ""}`}>Une huile essentielle est un extrait concentré de plantes, obtenu par distillation à la vapeur d'eau ou par pression à froid. Elle contient les composés aromatiques volatils de la plante, ce qui lui confère ses propriétés thérapeutiques. Les huiles essentielles peuvent être extraites de différentes parties des plantes, comme les feuilles, les fleurs, les écorces ou les racines</p>
                    </li>
                    <li key={"question4"} className={`faq__accordion__item ${ opened === "question4" ? "open" : ""}`}>
                        <button onClick={() => handleToggle("question4")} className="faq__accordion__question">
                        <div>Comment choisir et acheter des huiles essentielles de qualité ?</div>
                            <span className="item__control">
                                {opened === "question4" ? ( <IconMinus /> ) : ( <IconPlus /> )}
                            </span>
                        </button>
                        <p className={`faq__accordion__answer ${ opened === "question4" ? "open" : ""}`}>Pour choisir des huiles essentielles de qualité, il est important de rechercher des marques réputées et fiables. Vérifiez les informations sur l'étiquette, telles que le nom botanique de la plante, le pays d'origine, la méthode d'extraction et les certifications de pureté. Privilégiez les huiles essentielles biologiques, 100% pures et naturelles, sans additifs ni diluants.</p>
                    </li>
                    <li key={"question5"} className={`faq__accordion__item ${ opened === "question5" ? "open" : ""}`}>
                        <button onClick={() => handleToggle("question5")} className="faq__accordion__question">
                        <div>Y a-t-il des précautions à prendre lors de l'utilisation des huiles essentielles ?</div>
                            <span className="item__control">
                                {opened === "question5" ? ( <IconMinus /> ) : ( <IconPlus /> )}
                            </span>
                        </button>
                        <p className={`faq__accordion__answer ${ opened === "question5" ? "open" : ""}`}>Oui, il est essentiel de prendre certaines précautions lors de l'utilisation des huiles essentielles. Diluez toujours les huiles essentielles dans une huile porteuse avant de les appliquer sur la peau. Effectuez un test de sensibilité cutanée avant une utilisation plus étendue. Évitez le contact direct avec les yeux, les muqueuses et les zones sensibles. Respectez les dosages recommandés et suivez les conseils d'un professionnel de la santé.</p>
                    </li>
                    <li key={"question6"} className={`faq__accordion__item ${ opened === "question6" ? "open" : ""}`}>
                        <button onClick={() => handleToggle("question6")} className="faq__accordion__question">
                        <div>Les huiles essentielles sont-elles sûres à utiliser pendant la grossesse et l'allaitement ?</div>
                            <span className="item__control">
                                {opened === "question6" ? ( <IconMinus /> ) : ( <IconPlus /> )}
                            </span>
                        </button>
                        <p className={`faq__accordion__answer ${ opened === "question6" ? "open" : ""}`}>L'utilisation des huiles essentielles pendant la grossesse et l'allaitement nécessite une prudence particulière. Certaines huiles essentielles peuvent être contre-indiquées ou nécessiter des précautions spécifiques. Il est recommandé de consulter un professionnel de la santé, tel qu'un médecin ou un aromathérapeute, avant d'utiliser des huiles essentielles pendant cette période, afin d'obtenir des conseils personnalisés et adaptés à votre situation.</p>
                    </li>
                    <li key={"question7"} className={`faq__accordion__item ${ opened === "question7" ? "open" : ""}`}>
                        <button onClick={() => handleToggle("question7")} className="faq__accordion__question">
                        <div>Existe-t-il des contre-indications ou des interactions avec les médicaments pour l'utilisation des huiles essentielles ?</div>
                            <span className="item__control">
                                {opened === "question7" ? ( <IconMinus /> ) : ( <IconPlus /> )}
                            </span>
                        </button>
                        <p className={`faq__accordion__answer ${ opened === "question7" ? "open" : ""}`}>Oui, certaines huiles essentielles peuvent présenter des contre-indications ou interagir avec certains médicaments. Il est important d'informer votre professionnel de la santé, y compris votre médecin et votre pharmacien, de toute utilisation d'huiles essentielles afin d'éviter d'éventuelles interactions indésirables. Ils pourront vous conseiller sur les précautions à prendre et vous indiquer si certaines huiles essentielles sont contre-indiquées en fonction de votre état de santé et des médicaments que vous prenez.</p>
                    </li>
            </ul>
        </div>
        </>
    );
}

export default Faq;
