import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OilSummary from '../../molecules/OilSummary/OilSummary';
import Title from "../../atoms/Title/Title";
import './DiffusionsResult.scss'
import Sheet from 'react-modal-sheet';
import Header from "../../organisms/Header/Header";




function DiffusionsResult() {
    const routeParams = useParams();

    const [diffusions, setDiffusions] = useState([]);
    const [isOpen, setOpen] = useState(false);


    const themes = []

    useEffect(() => {
        const fetchDiffusions = async () => {
        const response = await fetch(`/api/oils/diffusions/${routeParams.name}`);
        const json = await response.json();

            if (response.ok) {
                setDiffusions(json);
            }
        };

        fetchDiffusions();
    }, [ routeParams.name ]);

    // console.log(diffusions)
    // diffusions && diffusions.map((oil) => {
    //     oil.symptoms.map((theme) => {
    //         themes.push(theme.theme)
    //     })
    // })

    // console.log(themes)

    const handleFilter = async (e) => {
        e.preventDefault();

        const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
        const checkedBoxesValues = Array.from(checkedBoxes).map(cb => cb.value);

        console.log(checkedBoxesValues)

        const response = await fetch(`/api/oils/diffusions/${routeParams.name}`);
        const json = await response.json();

        if (response.ok) {
            setDiffusions(json);
            console.log("theme", json);
        }

        if(checkedBoxesValues.length > 0) {
            const filteredDiffusions = diffusions.filter((oil) => {
                return oil.symptoms.some((theme) => {
                    return checkedBoxesValues.includes(theme.theme)
                })
            })
            setDiffusions(filteredDiffusions)
        } else {
            setDiffusions(json);
        }
    }


    return (
        <>
        <Header />
        <div>
            <Title children={routeParams.name} />
            <div className="diffusion-results__wrapper">
                {diffusions.map((oil) => (
                    <Link to={`/allOils/${oil.name}`} key={oil._id}>
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
                            <label for="theme">Thème :</label>
                            <input type="checkbox" id="beauté" name="beauté" value="beauté" />
                            <label for="beauté">Beauté</label>
                            <input type="checkbox" id="bien-être" name="bien-être" value="bien-être" />
                            <label for="bien-être">Bien-être</label>
                            <input type="checkbox" id="cuisine" name="cuisine" value="cuisine" />
                            <label for="cuisine">Cuisine</label>
                            <input type="checkbox" id="maison" name="maison" value="maison" />
                            <label for="maison">Maison</label>
                            <input type="checkbox" id="parfum" name="parfum" value="parfum" />
                            <label for="parfum">Parfum</label>
                            <input type="checkbox" id="santé" name="santé" value="santé" />
                            <label for="santé">Santé</label>
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

export default DiffusionsResult;
