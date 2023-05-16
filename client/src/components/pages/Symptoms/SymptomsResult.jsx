import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SymptomsResult.scss";
import OilSummary from "../../molecules/OilSummary/OilSummary";
import Title from "../../atoms/Title/Title";
import Sheet from "react-modal-sheet";
import Header from "../../organisms/Header/Header";
import FilterButton from "../../atoms/FilterButton/FilterButton";
import API_URL from '../../../config';
import { IconSquareRoundedXFilled } from "@tabler/icons-react";

function SymptomsResult() {
    const routeParams = useParams();

    const [symptoms, setSymptoms] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    useEffect(() => {
        const fetchSymptoms = async () => {
            const response = await fetch(
                `${API_URL}/api/oils/symptoms/${routeParams.name}`
            );
            const json = await response.json();

            if (response.ok) {
                setSymptoms(json);
            }
        };

        fetchSymptoms();
    }, [routeParams.name]);

    const handleCheckboxChange = (e) => {
        const checkboxValue = e.target.value;
        if (e.target.checked) {
            setSelectedCheckboxes((prevSelectedCheckboxes) => [
                ...prevSelectedCheckboxes,
                checkboxValue,
            ]);
            } else {
            setSelectedCheckboxes((prevSelectedCheckboxes) =>
                prevSelectedCheckboxes.filter((value) => value !== checkboxValue)
            );
        }
    };

    const handleFilter = async (e) => {
        e.preventDefault();

        const response = await fetch(`${API_URL}/api/oils/symptoms/${routeParams.name}`);
        const json = await response.json();

        if (response.ok) {
            setSymptoms(json);
            console.log("diffusion+themes", json);
        }

        if (selectedCheckboxes.length > 0) {
            const filteredSymptoms = symptoms.filter((oil) => {
                return (
                    oil.symptoms.some((diffusion) => {
                        return diffusion.diffusions.some((diffusion) => {
                            return selectedCheckboxes.includes(diffusion.name);
                        });
                    }) ||
                    oil.symptoms.some((theme) => {
                        return selectedCheckboxes.includes(theme.theme);
                    })
                );
            });
            setSymptoms(filteredSymptoms);
            setOpen(false);
        } else {
            setSymptoms(json);
            setOpen(false);
        }
    };

    return (
        <>
        <Header />
        <div>
            <Title children={routeParams.name} />
            <div className="symptoms-results__wrapper">
                {symptoms.map((oil) => (
                    <Link to={`/allOils/${oil.name}`} key={oil._id}>
                        <OilSummary oilInfo={oil} />
                    </Link>
                ))}

                <FilterButton onClick={() => setOpen(true)} />

                <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                    <Sheet.Container>
                        <Sheet.Header />
                        <Sheet.Content>
                            <div style={{ height: 630 }} className="symptom-results__filters">
                                <IconSquareRoundedXFilled size={32} stroke={1.5} onClick={() => setOpen(false)} aria-controls="close" className="themes-results__close-btn"/>
                                <form type="submit" onSubmit={handleFilter} className="symptom-results__filters__form">
                                    <h2 className="symptom-results__filters__title">Themes :</h2>
                                    <div className="symptom-results__filters__item">
                                        <label for="beauté">Beauté</label>
                                        <input type="checkbox" id="beauté" name="beauté" value="beauté" checked={selectedCheckboxes.includes("beauté")} onChange={handleCheckboxChange}/>
                                    </div>
                                    <div className="symptom-results__filters__item">
                                        <label for="bien-être">Bien-être</label>
                                        <input type="checkbox" id="bien-être" name="bien-être" value="bien-être" checked={selectedCheckboxes.includes("bien-être")} onChange={handleCheckboxChange}/>
                                    </div>
                                    <div className="symptom-results__filters__item">
                                        <label for="cuisine">Cuisine</label>
                                        <input type="checkbox" id="cuisine" name="cuisine" value="cuisine" checked={selectedCheckboxes.includes("cuisine")} onChange={handleCheckboxChange}/>
                                    </div>
                                    <div className="symptom-results__filters__item">
                                        <label for="maison">Maison</label>
                                        <input type="checkbox" id="maison" name="maison" value="maison" checked={selectedCheckboxes.includes("maison")} onChange={handleCheckboxChange}/>
                                    </div>
                                    <div className="symptom-results__filters__item">
                                        <label for="parfum">Parfum</label>
                                        <input type="checkbox" id="parfum" name="parfum" value="parfum" checked={selectedCheckboxes.includes("parfum")} onChange={handleCheckboxChange}/>
                                    </div>
                                    <div className="symptom-results__filters__item">
                                        <label for="santé">Santé</label>
                                        <input type="checkbox" id="santé" name="santé" value="santé" checked={selectedCheckboxes.includes("santé")} onChange={handleCheckboxChange}/>
                                    </div>

                                    <h2 className="symptom-results__filters__title">Diffusions :</h2>
                                    <div className="symptom-results__filters__item">
                                        <label for="voie orale">Voie orale</label>
                                        <input type="checkbox" id="voie orale" name="voie orale" value="voie orale" checked={selectedCheckboxes.includes("voie orale")} onChange={handleCheckboxChange}/>
                                    </div>
                                    <div className="symptom-results__filters__item">
                                        <label for="diffusion">Diffusion</label>
                                        <input type="checkbox" id="diffusion" name="diffusion" value="diffusion" checked={selectedCheckboxes.includes("diffusion")} onChange={handleCheckboxChange}/>
                                    </div>
                                    <div className="symptom-results__filters__item">
                                        <label for="massage">Massage</label>
                                        <input type="checkbox" id="massage" name="massage" value="massage" checked={selectedCheckboxes.includes("massage")} onChange={handleCheckboxChange}/>
                                    </div>
                                    <div className="symptom-results__filters__item">
                                        <label for="bain">Bain</label>
                                        <input type="checkbox" id="bain" name="bain" value="bain" checked={selectedCheckboxes.includes("bain")} onChange={handleCheckboxChange}/>
                                    </div>
                                    <div className="symptom-results__filters__item">
                                        <label for="cosmétique">Cosmétique</label>
                                        <input type="checkbox" id="cosmétique" name="cosmétique" value="cosmétique" checked={selectedCheckboxes.includes("cosmétique")} onChange={handleCheckboxChange}/>
                                    </div>
                                    <div className="symptom-results__filters__item">
                                        <label for="inhalation">Inhalation</label>
                                        <input type="checkbox" id="inhalation" name="inhalation" value="inhalation" checked={selectedCheckboxes.includes("inhalation")} onChange={handleCheckboxChange}/>
                                    </div>

                                    <button type="submit">Filtrer</button>
                                </form>
                            </div>
                        </Sheet.Content>
                    </Sheet.Container>

                    <Sheet.Backdrop />
                </Sheet>
            </div>
        </div>
        </>
    );
}

export default SymptomsResult;
