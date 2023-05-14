import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import toast from 'react-hot-toast';
import API_URL from "../config";

export const useUpdateProfile = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const updateProfile = async (userName, newEmail, password) => {
        setError(null);
        setLoading(true);
        const localInfo = localStorage.getItem("user");
            const actualEmail = JSON.parse(localInfo).email;

        const response = await fetch(`${API_URL}/api/users/profile/${actualEmail}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, newEmail, password }),
        });

        const json = await response.json();

        if (!response.ok) {
            toast.error(json.message, { duration: 6000});
            setError(json.message);
            setLoading(false);
            return;
        }
        if (response.ok) {
            toast.success('Profile mis à jour !');
            localStorage.setItem('user', JSON.stringify(json));

            dispatch({ type: 'SIGNIN', payload: json });
            setLoading(false);
        }
    }

    return { updateProfile, error, loading };
}
