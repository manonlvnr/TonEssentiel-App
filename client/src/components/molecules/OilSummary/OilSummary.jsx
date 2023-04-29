import './OilSummary.scss';
import bain from '../../../icons/bain.png';
import diffusion from '../../../icons/diffusion.png';
import massage from '../../../icons/massage.png';
import oral from '../../../icons/voie-orale.png';
import cosmetique from '../../../icons/cosmétique.png';
import inhalation from '../../../icons/inhalation.png';


function OilSummary (oilInfo) {
    const themes = Array.from(new Set(oilInfo.oilInfo.symptoms.map(e => e.theme)));
    const diffusionsNames = Array.from(new Set(oilInfo.oilInfo.symptoms.flatMap(e => e.diffusions?.map(d => d.name)).filter(Boolean)));

    return (
        <div className='card'>
            <img className='card__img' src={oilInfo.oilInfo.image} alt={oilInfo.oilInfo.name}/>
            <div className='card__body'>
                <h2 className='card__body__name'>{oilInfo.oilInfo.name}</h2>
                <div className='card__body__categories'>
                    <ul className='categories__diffusions'>
                        {diffusionsNames.map(diffusionName => (
                            <li key={diffusionName} className='categories__diffusion'>
                                {(() => {
                                    switch (diffusionName) {
                                    case 'bain':
                                        return <img src={bain} alt="bain" />;
                                    case 'diffusion':
                                        return <img src={diffusion} alt="diffusion" />;
                                    case 'massage':
                                        return <img src={massage} alt="massage" />;
                                    case 'voie orale':
                                        return <img src={oral} alt="voie orale" />;
                                    case 'cosmétique':
                                        return <img src={cosmetique} alt="cosmétique" />;
                                    case 'inhalation':
                                        return <img src={inhalation} alt="inhalation" />;
                                    default:
                                        return null;
                                    }
                                })()}
                            </li>
                        ))}
                    </ul>
                    <ul className='categories__themes'>
                        {themes.map(theme => (
                            <li key={theme} className='categories__theme'>{theme}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OilSummary
