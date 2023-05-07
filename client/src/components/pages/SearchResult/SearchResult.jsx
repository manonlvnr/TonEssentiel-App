import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OilSummary from "../../molecules/OilSummary/OilSummary";
import Header from "../../organisms/Header/Header";

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
        <div>
            <h1>Search Result</h1>
            {searchResult.map((result) => (
                <div>
                    <OilSummary oilInfo={result} />
                </div>
            ))}
        </div>
        </>
    );
}

export default SearchResult;
