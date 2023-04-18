import { useAuthContext } from "./useAuthContext";

export const useSignout = () => {
    const { dispatch } = useAuthContext();

    const Signout = () => {
        localStorage.removeItem('user');

        dispatch({
            type: 'SIGNOUT',
        })
    };
    return Signout;
}

