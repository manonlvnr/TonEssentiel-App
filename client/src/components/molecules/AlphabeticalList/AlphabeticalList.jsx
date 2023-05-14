import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './AlphabeticalList.scss'
import {IconChevronRight} from '@tabler/icons-react';

function AlphabeticalList({ words, link }) {
    const wordListRef = useRef(null);

    const letters = [...new Set(words.map(word => word[0]))].sort();

    const letterPositions = letters.reduce((acc, letter) => {
        const letterIndex = words.findIndex(word => word[0] === letter);
        if (letterIndex !== -1) {
            acc[letter] = letterIndex;
        }
        return acc;
    }, {});

    const scrollToLetter = letter => {
        const firstLetterElement = wordListRef.current.querySelector(`[data-letter="${letter}"]`);
        if (firstLetterElement) {
            firstLetterElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='list'>
            <ul ref={wordListRef} className='list__words'>
                {Object.keys(letterPositions).map(letter => (
                    <div key={letter} className='list__words__group'>
                        <span className='list__words__group__letter'>{letter}</span>
                            {words.filter(word => word[0] === letter).sort().map(word => (
                                <li className='list__word' key={word} data-letter={letter}>
                                    <Link key={word} to={`/${link}/${word}`} className='list__word__link'>
                                        {word}
                                        <IconChevronRight/>
                                    </Link>
                                </li>
                            ))}
                    </div>
                ))}
            </ul>
            <div className="list__letters">
                {letters.map(letter => (
                    <button key={letter} onClick={() => scrollToLetter(letter)} className="list__letter">
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AlphabeticalList;
