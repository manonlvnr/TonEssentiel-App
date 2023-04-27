import './OilSummary.scss';

function OilSummary (oilInfo) {
    const themes = Array.from(new Set(oilInfo.oilInfo.symptoms.map(e => e.theme)));
    const diffusionsNames = Array.from(new Set(oilInfo.oilInfo.symptoms.flatMap(e => e.diffusions?.map(d => d.name)).filter(Boolean)));

    return (
        <div className='card'>
            <img className='card__img' src={oilInfo.oilInfo.image} alt={oilInfo.oilInfo.name}/>
            <div className='card__body'>
                <h2 className='card__body__name'>{oilInfo.oilInfo.name}</h2>
                <div className='card__body__categories'>
                    <ul className='categories__themes'>
                        {themes.map(theme => (
                            <li key={theme} className='categories__theme'>{theme}</li>
                        ))}
                    </ul>
                    <ul className='categories__diffusions'>
                        {diffusionsNames.map(diffusionName => (
                            <li key={diffusionName} className='categories__diffusion'>{diffusionName}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OilSummary
