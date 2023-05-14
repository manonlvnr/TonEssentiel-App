import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import toast from 'react-hot-toast';
import API_URL from "../config";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (userName, email, password) => {
        setError(null);
        setLoading(true);

        const response = await fetch(`${API_URL}/api/users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, email, password }),
        });

        const json = await response.json();

        if (!response.ok) {
            toast.error(json.message, { duration: 6000});
            setError(json.message);
            setLoading(false);
            return;
        }
        if (response.ok) {
            toast.success('Inscription réussie !');
            localStorage.setItem('user', JSON.stringify(json));

            dispatch({ type: 'SIGNIN', payload: json });

            setLoading(false);
        }
    }

    return { signup, error, loading };
}
