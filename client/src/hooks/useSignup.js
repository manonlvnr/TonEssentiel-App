import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (userName, email, password) => {
        setError(null);
        setLoading(true);

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, email, password }),
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.message);
            setLoading(false);
            return;
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json));

            dispatch({ type: 'SIGNIN', payload: json });

            setLoading(false);
        }
    }

    return { signup, error, loading };
}
