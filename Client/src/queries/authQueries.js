import { queryClient, axios } from "../config/config";
import { useMutation, useQuery } from "@tanstack/react-query";


//const ME_KEY = ["Me"];

const myProfile = async () => {
    try {
        const { data } = await axios.get("/myProfile");
        return data;
    } catch (e) {
        return { authed: false };
    }
};

const useMyProfile = () => 
    useQuery({
        queryKey: ME_KEY,
        staleTime: Infinity,
        retry: false,
        queryFn: myProfile,
        onError:(error) => {
            return error;
        },
    });

    const login = async (body) => {
        const { data } = await axios.post("/login", body);
        return data;
    };
/*
    const useLogin = () => useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            queryClient.invalidateQueries(ME_KEY);
            return data;
        },
    });

    const logout = async () => {
        const { data } = await axios.post("/logout");
        return data;    
    };

    const useLogout = () => useMutation({
        mutationFn: logout,
        onSuccess: (data) => {
            queryClient.setQueriesData(ME_KEY, { authed: false });
            return data;
        },
        onError: (error) => {
            queryClient.setQueriesData(ME_KEY, { authed: false })
        }
    });

    const register = async (body) => {
        try{
            const { data } = await axios.post("/register", body);
            return data;
        }catch (e){
            throw e?.response?.data?.message;
        }
    };

    const useRegister = () => useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            queryClient.invalidateQueries(ME_KEY);
            return data;
        },
    });
*/
    export { useMyProfile, /*useLogin, useLogout, useRegister*/ };