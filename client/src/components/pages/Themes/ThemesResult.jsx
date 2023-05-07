import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OilSummary from '../../molecules/OilSummary/OilSummary';
import Title from '../../atoms/Title/Title'
import './ThemesResult.scss';
import Sheet from 'react-modal-sheet';
import Header from "../../organisms/Header/Header";


function ThemesResult() {
    const routeParams = useParams();

    const [themes, setThemes] = useState([]);
    const [isOpen, setOpen] = useState(false);


    useEffect(() => {
        const fetchThemes = async () => {
        const response = await fetch(`/api/oils/themes/${routeParams.theme}`);
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
                <button onClick={() => setOpen(true)}>Open sheet</button>

                <Sheet isOpen={isOpen} onClose={() => setOpen(false)} >
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <div>
                            <form type="submit" onSubmit={handleFilter}>
                                <label for="diffusions">Diffusions :</label>
                                <input type="checkbox" id="voie orale" name="voie orale" value="voie orale" />
                                <label for="voie orale">Voie orale</label>
                                <input type="checkbox" id="diffusion" name="diffusion" value="diffusion" />
                                <label for="diffusion">Diffusion</label>
                                <input type="checkbox" id="massage" name="massage" value="massage" />
                                <label for="massage">Massage</label>
                                <input type="checkbox" id="bain" name="bain" value="bain" />
                                <label for="bain">Bain</label>
                                <input type="checkbox" id="cosmétique" name="cosmétique" value="cosmétique" />
                                <label for="cosmétique">Cosmétique</label>
                                <input type="checkbox" id="inhalation" name="inhalation" value="inhalation" />
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

export default ThemesResult;
