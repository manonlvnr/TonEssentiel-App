import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SymptomsResult.scss";
import OilSummary from "../../molecules/OilSummary/OilSummary";
import Title from "../../atoms/Title/Title";
import Sheet from "react-modal-sheet";
import Header from "../../organisms/Header/Header";
import FilterButton from "../../atoms/FilterButton/FilterButton";
import API_URL from '../../../config';

function SymptomsResult() {
    const routeParams = useParams();

    const [symptoms, setSymptoms] = useState([]);
    const [isOpen, setOpen] = useState(false);

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

    const handleFilter = async (e) => {
        e.preventDefault();

        const checkedBoxes = document.querySelectorAll(
            "input[type=checkbox]:checked"
        );
        const checkedBoxesValues = Array.from(checkedBoxes).map(
            (cb) => cb.value
        );

        console.log(checkedBoxesValues);

        const response = await fetch(`${API_URL}/api/oils/symptoms/${routeParams.name}`);
        const json = await response.json();

        if (response.ok) {
            setSymptoms(json);
            console.log("diffusion+themes", json);
        }

        if (checkedBoxesValues.length > 0) {
            const filteredSymptoms = symptoms.filter((oil) => {
                return (
                    oil.symptoms.some((diffusion) => {
                        return diffusion.diffusions.some((diffusion) => {
                            return checkedBoxesValues.includes(diffusion.name);
                        });
                    }) ||
                    oil.symptoms.some((theme) => {
                        return checkedBoxesValues.includes(theme.theme);
                    })
                );
            });
            setSymptoms(filteredSymptoms);
        } else {
            setSymptoms(json);
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
                            <div>
                                <form type="submit" onSubmit={handleFilter}>
                                    <label for="theme">Thème :</label>
                                    <input
                                        type="checkbox"
                                        id="beauté"
                                        name="beauté"
                                        value="beauté"
                                    />
                                    <label for="beauté">Beauté</label>
                                    <input
                                        type="checkbox"
                                        id="bien-être"
                                        name="bien-être"
                                        value="bien-être"
                                    />
                                    <label for="bien-être">Bien-être</label>
                                    <input
                                        type="checkbox"
                                        id="cuisine"
                                        name="cuisine"
                                        value="cuisine"
                                    />
                                    <label for="cuisine">Cuisine</label>
                                    <input
                                        type="checkbox"
                                        id="maison"
                                        name="maison"
                                        value="maison"
                                    />
                                    <label for="maison">Maison</label>
                                    <input
                                        type="checkbox"
                                        id="parfum"
                                        name="parfum"
                                        value="parfum"
                                    />
                                    <label for="parfum">Parfum</label>
                                    <input
                                        type="checkbox"
                                        id="santé"
                                        name="santé"
                                        value="santé"
                                    />
                                    <label for="santé">Santé</label>
                                    <label for="diffusions">Diffusions :</label>
                                    <input
                                        type="checkbox"
                                        id="voie orale"
                                        name="voie orale"
                                        value="voie orale"
                                    />
                                    <label for="voie orale">Voie orale</label>
                                    <input
                                        type="checkbox"
                                        id="diffusion"
                                        name="diffusion"
                                        value="diffusion"
                                    />
                                    <label for="diffusion">Diffusion</label>
                                    <input
                                        type="checkbox"
                                        id="massage"
                                        name="massage"
                                        value="massage"
                                    />
                                    <label for="massage">Massage</label>
                                    <input
                                        type="checkbox"
                                        id="bain"
                                        name="bain"
                                        value="bain"
                                    />
                                    <label for="bain">Bain</label>
                                    <input
                                        type="checkbox"
                                        id="cosmétique"
                                        name="cosmétique"
                                        value="cosmétique"
                                    />
                                    <label for="cosmétique">Cosmétique</label>
                                    <input
                                        type="checkbox"
                                        id="inhalation"
                                        name="inhalation"
                                        value="inhalation"
                                    />
                                    <label for="inhalation">Inhalation</label>
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
