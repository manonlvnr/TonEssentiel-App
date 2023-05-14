import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OilSummary from '../../molecules/OilSummary/OilSummary';
import Title from '../../atoms/Title/Title'
import './ThemesResult.scss';
import Sheet from 'react-modal-sheet';
import Header from "../../organisms/Header/Header";
import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import FilterButton from "../../atoms/FilterButton/FilterButton";
import API_URL from "../../../config";

function ThemesResult() {
    const routeParams = useParams();

    const [themes, setThemes] = useState([]);
    const [isOpen, setOpen] = useState(false);


    useEffect(() => {
        const fetchThemes = async () => {
        const response = await fetch(`$${API_URL}/api/oils/themes/${routeParams.theme}`);
        const json = await response.json();

            if (response.ok) {
                setThemes(json);
                console.log(json);
            }
        };

        fetchThemes();
    }, [ routeParams.theme ]);

    const handleFilter = async (e) => {
        e.preventDefault();

        const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
        const checkedBoxesValues = Array.from(checkedBoxes).map(cb => cb.value);

        console.log(checkedBoxesValues)

        const response = await fetch(`/api/oils/themes/${routeParams.theme}`);
        const json = await response.json();

        if (response.ok) {
            setThemes(json);
            console.log("diffusion", json);
        }

        if(checkedBoxesValues.length > 0) {
            const filteredthemes = themes.filter((oil) => {
                return oil.symptoms.some((diffusion) => {
                    return diffusion.diffusions.some((diffusion) => {
                        return checkedBoxesValues.includes(diffusion.name)
                    })    
                })
            })
            setThemes(filteredthemes)
            setOpen(false);
        } else {
            setThemes(json);
        }
    }


    return (
        <>
            <Header />
            <div>
                <Title children={routeParams.theme} />
                <div className="themes-results__wrapper">
                    {themes.map((oil) => (
                        <Link to={`/allOils/${oil.name}`} key={oil.id}>
                            <OilSummary oilInfo={oil}/>
                        </Link>
                    ))}

                <FilterButton onClick={() => setOpen(true)} />

                <Sheet isOpen={isOpen} onClose={() => setOpen(false)} detent='content-height'>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <div style={{ height: 630 }} className="themes-results__filters">
                            <IconSquareRoundedXFilled size={32} stroke={1.5} onClick={() => setOpen(false)} aria-controls="close" className="themes-results__close-btn"/>
                            <h2 className="themes-results__filters__title">Diffusions :</h2>
                            <form type="submit" onSubmit={handleFilter} className="themes-results__filters__form">
                                <div className="themes-results__filters__item">
                                    <label for="voie orale">Voie orale</label>
                                    <input type="checkbox" id="voie orale" name="voie orale" value="voie orale" />
                                </div>
                                <div className="themes-results__filters__item">
                                    <label for="diffusion">Diffusion</label>
                                    <input type="checkbox" id="diffusion" name="diffusion" value="diffusion" />
                                </div>
                                <div className="themes-results__filters__item">
                                    <label for="massage">Massage</label>
                                    <input type="checkbox" id="massage" name="massage" value="massage" />
                                </div>
                                <div className="themes-results__filters__item">
                                    <label for="bain">Bain</label>
                                    <input type="checkbox" id="bain" name="bain" value="bain" />
                                </div>
                                <div className="themes-results__filters__item">
                                    <label for="cosmétique">Cosmétique</label>
                                    <input type="checkbox" id="cosmétique" name="cosmétique" value="cosmétique" />
                                </div>
                                <div className="themes-results__filters__item">
                                    <label for="inhalation">Inhalation</label>
                                    <input type="checkbox" id="inhalation" name="inhalation" value="inhalation" />
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

export default ThemesResult;
