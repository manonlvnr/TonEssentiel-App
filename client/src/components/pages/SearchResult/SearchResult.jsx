import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import OilSummary from "../../molecules/OilSummary/OilSummary";
import Header from "../../organisms/Header/Header";
import Title from "../../atoms/Title/Title";
import "./SearchResult.scss";

function SearchResult() {
    // const [searchParams, setSearchParams] = useSearchParams()
    const [searchResult, setSearchResult] = useState([]);
    const search = useLocation().search
    const searchParams = new URLSearchParams(search)
    const searchState = searchParams.get("keyword");

    useEffect(() => {
        const fetchSearch = async () => {
            const response = await fetch(`/api/oils/search?keyword=${searchState}`);
            const json = await response.json();

            if (response.ok) {
                console.log(json);
                setSearchResult(json);
            }
        };

        fetchSearch();
    }, [searchState]);

    console.log(searchResult);

    return (
        <>
        <Header />
        <Title children={`${searchState}`} />
        <div className="search-result__wrapper">
        {searchResult.length === 0 ? (
            <p>Aucun résultat ne correspondant à votre demande ... &#128533;</p>
        ) : (
            searchResult.map((result) => (
                <Link to={`/allOils/${result.name}`} key={result._id}>
                    <OilSummary oilInfo={result} />
                </Link>
            ))
        )}
        </div>
        </>
    );
}

export default SearchResult;
