import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import toast from 'react-hot-toast';

export const useSignin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const signin = async (email, password) => {
        setError(null);
        setLoading(true);

        const response = await fetch('/api/users/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const json = await response.json();

        if (!response.ok) {
            toast.error(json.message, { duration: 6000});
            setError(json.message);
            setLoading(false);
            return;
        }
        if (response.ok) {
            toast.success('Connexion réussie !');
            localStorage.setItem('user', JSON.stringify(json));

            dispatch({ type: 'SIGNIN', payload: json });

            setLoading(false);
        }
    }

    return { signin, error, loading };
}
