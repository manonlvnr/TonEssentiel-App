import { createContext, useReducer } from "react";

export const ToggleModeContext = createContext();

const initialState = { darkMode: false };

export const toggleModeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHTMODE":
            return { darkMode: false };
        case "DARKMODE":
            return { darkMode: true };
        default:
            return state;
    }
};

export const ToggleModeContextProvider = ({ children }) => {
    const [toggleModeState, dispatch] = useReducer(toggleModeReducer, initialState);

    console.log("ToggleModeContext:", toggleModeState);
    return (
        <ToggleModeContext.Provider value={{...toggleModeState, dispatch}}>
            {children}
        </ToggleModeContext.Provider>
    );
}
