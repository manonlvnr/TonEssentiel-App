import { useContext } from 'react';
import { ToggleModeContext } from '../context/ToggleModeContext';

export const useToggleModeContext = () => {
    const context = useContext(ToggleModeContext);
    if (!context) {
        throw new Error('darkModeContext must be used within an toggleModeProvider');
    }
    return context;
};
