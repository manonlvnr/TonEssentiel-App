import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './AlphabeticalList.scss'

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
        const letterIndex = letterPositions[letter];
        if (letterIndex !== undefined) {
            const listItem = wordListRef.current.children[letterIndex];
            listItem.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='list'>
            <ul ref={wordListRef} className='list__words'>
                {words.map(word => (
                    <li className='list__word'><Link key={word} to={`/${link}/${word}`}>{word}</Link></li>
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
