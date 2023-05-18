import { useEffect, useState } from "react";
import Title from "../../atoms/Title/Title";
import Header from "../../organisms/Header/Header";
import "./Faq.scss";
import faqInfo from "../../../faqInfo.json"; // Importez le fichier JSON
import { IconPlus, IconMinus } from "@tabler/icons-react";

function Faq() {
    const [faqData, setFaqData] = useState(null);
    const [opened, setOpened] = useState([]);

    useEffect(() => {
        setFaqData(faqInfo.faq); // Stockez les données dans le state
    }, []);

    console.log(faqData);

    const handleToggle = (index) => {
        setOpened((prevOpened) => {
            const newOpened = [...prevOpened];
            newOpened[index] = !newOpened[index];
            return newOpened;
        });
    };

    return (
        <>
        <Header />
        <Title children="FAQ" />
        <div className="faq__wrapper">
            {faqData && (
                <ul className="faq__accordion">
                    <h2 className="faq__accordion__title">Les questions les plus fréquements posées sur les huiles essentielles :</h2>
                    {faqData.map((item, index) => (
                        <li key={index} className={`faq__accordion__item ${ opened[index] ? "open" : ""}`}>
                            <button onClick={() => handleToggle(index)} className="faq__accordion__question">
                                {item.question}
                                <span className="item__control">
                                    {opened[index] ? (
                                        <IconMinus />
                                    ) : (
                                        <IconPlus />
                                    )}
                                </span>
                            </button>
                            <p className={`faq__accordion__answer ${ opened[index] ? "open" : ""}`}>{item.réponse}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    );
}

export default Faq;
