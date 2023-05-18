import { Suspense, lazy, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../../atoms/Title/Title";
import './DiffusionsResult.scss'
import Sheet from 'react-modal-sheet';
import Header from "../../organisms/Header/Header";
import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import FilterButton from "../../atoms/FilterButton/FilterButton";
import API_URL from "../../../config";
import SyncLoader from "react-spinners/SyncLoader";

const OilSummary = lazy(() => import('../../molecules/OilSummary/OilSummary'));


function DiffusionsResult() {
    const routeParams = useParams();

    const [diffusions, setDiffusions] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [loadingDiffusions, setLoadingDiffusions] = useState(true)

    useEffect(() => {
        const fetchDiffusions = async () => {
        const response = await fetch(`${API_URL}/api/oils/diffusions/${routeParams.name}`);
        const json = await response.json();

            if (response.ok) {
                setDiffusions(json);
            }
            setLoadingDiffusions(false)
        };

        fetchDiffusions();
    }, [ routeParams.name ]);

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

        const response = await fetch(`${API_URL}/api/oils/diffusions/${routeParams.name}`);
        const json = await response.json();

        if (response.ok) {
            setDiffusions(json);
            console.log("theme", json);
        }

        if(selectedCheckboxes.length > 0) {
            const filteredDiffusions = diffusions.filter((oil) => {
                return oil.symptoms.some((theme) => {
                    return selectedCheckboxes.includes(theme.theme)
                })
            })
            setDiffusions(filteredDiffusions)
            setOpen(false);
        } else {
            setDiffusions(json);
            setOpen(false);
        }
    }

    const override = {
        display: "block",
        margin: "2rem",
        textAlign: "center",
    };

    return (
        <>
        <Header />
        <div>
            <Title children={routeParams.name} />
            <div className="diffusion-results__wrapper">
                {loadingDiffusions ? (
                    <SyncLoader cssOverride={override} color={'#809D75'} />
                ) : (
                    <Suspense fallback={<SyncLoader cssOverride={override} color={'#809D75'} />}>
                        {diffusions.map((oil) => (
                            <Link to={`/allOils/${oil.name}`} key={oil.id}>
                                <OilSummary oilInfo={oil} />
                            </Link>
                        ))}
                    </Suspense>
                )}

            <FilterButton onClick={() => setOpen(true)} />

            <Sheet isOpen={isOpen} onClose={() => setOpen(false)} >
            <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                    <div style={{ height: 630 }} className="diffusion-results__filters">
                        <IconSquareRoundedXFilled size={32} stroke={1.5} onClick={() => setOpen(false)} aria-controls="close" className="themes-results__close-btn"/>
                        <h2 className="diffusion-results__filters__title">Themes :</h2>
                        <form type="submit" onSubmit={handleFilter} className="diffusion-results__filters__form">
                        <div className="diffusion-results__filters__item">
                            <label for="beauté">Beauté</label>
                            <input type="checkbox" id="beauté" name="beauté" value="beauté" checked={selectedCheckboxes.includes("beauté")} onChange={handleCheckboxChange}/>
                        </div>
                        <div className="diffusion-results__filters__item">
                            <label for="bien-être">Bien-être</label>
                            <input type="checkbox" id="bien-être" name="bien-être" value="bien-être" checked={selectedCheckboxes.includes("bien-être")} onChange={handleCheckboxChange}/>
                        </div>
                        <div className="diffusion-results__filters__item">
                            <label for="cuisine">Cuisine</label>
                            <input type="checkbox" id="cuisine" name="cuisine" value="cuisine" checked={selectedCheckboxes.includes("cuisine")} onChange={handleCheckboxChange}/>
                        </div>
                        <div className="diffusion-results__filters__item">
                            <label for="maison">Maison</label>
                            <input type="checkbox" id="maison" name="maison" value="maison" checked={selectedCheckboxes.includes("maison")} onChange={handleCheckboxChange}/>
                        </div>
                        <div className="diffusion-results__filters__item">
                            <label for="parfum">Parfum</label>
                            <input type="checkbox" id="parfum" name="parfum" value="parfum" checked={selectedCheckboxes.includes("parfum")} onChange={handleCheckboxChange}/>
                        </div>
                        <div className="diffusion-results__filters__item">
                            <label for="santé">Santé</label>
                            <input type="checkbox" id="santé" name="santé" value="santé" checked={selectedCheckboxes.includes("santé")} onChange={handleCheckboxChange}/>
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

export default DiffusionsResult;
