import { createContext, useReducer, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return { user: action.payload, isLoading:false }
        case 'SIGNOUT':
            return { user: null, isLoading:false }
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        // user: {email:"", token:""},
        user: null,
        isLoading: true,
        error: false,
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            dispatch({ type: 'SIGNIN', payload: user });
        }
        setIsLoading(false);
    }, []);

    console.log('AuthContext:', authState);
    
    return (
        <AuthContext.Provider value={{ ...authState, dispatch }}>
            {/* {authState.user && !authState.isLoading ? children : <div>loading...</div>} */}
            { isLoading ? <div>loading ...</div> : children}
        </AuthContext.Provider>
    );
}
