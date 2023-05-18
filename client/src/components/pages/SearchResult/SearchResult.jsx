import { Suspense, lazy, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import Title from "../../atoms/Title/Title";
import "./SearchResult.scss";
import API_URL from "../../../config";
import SyncLoader from "react-spinners/SyncLoader";

const OilSummary = lazy(() => import('../../molecules/OilSummary/OilSummary'));

function SearchResult() {
    const [searchResult, setSearchResult] = useState([]);
    const search = useLocation().search
    const searchParams = new URLSearchParams(search)
    const searchState = searchParams.get("keyword");
    const [loadingSearch, setLoadingSearch] = useState(true)


    useEffect(() => {
        const fetchSearch = async () => {
            const response = await fetch(`${API_URL}/api/oils/search?keyword=${searchState}`);
            const json = await response.json();

            if (response.ok) {
                console.log(json);
                setSearchResult(json);
            }
            setLoadingSearch(false)
        };

        fetchSearch();
    }, [searchState]);

    console.log(searchResult);

    const override = {
        display: "block",
        margin: "2rem",
        textAlign: "center",
    };

    return (
        <>
        <Header />
        <Title children={`${searchState}`} />
        <div className="search-result__wrapper">
            {loadingSearch ? (
                    <SyncLoader cssOverride={override} color={'#809D75'}/>
                ) : (
                    <Suspense fallback={<SyncLoader cssOverride={override} color={'#809D75'}/>}>
                        {searchResult.length === 0 ? (
                            <p>Aucun résultat ne correspondant à votre demande ... &#128533;</p>
                        ) : (
                            searchResult.map((result) => (
                                <Link to={`/allOils/${result.name}`} key={result._id}>
                                    <OilSummary oilInfo={result} />
                                </Link>
                            ))
                        )}
                    </Suspense>
                )}
        
        </div>
        </>
    );
}

export default SearchResult;
