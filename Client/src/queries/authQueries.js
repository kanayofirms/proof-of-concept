import { queryClient, axios } from "../config/config";
import { useMutation, useQuery } from "@tanstack/react-query";

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
        queryKey: ["Me"],
        staleTime: Infinity,
        retry: false,
        queryFn: myProfile,
        onError:(error) => {
            return error;
        },
    });

    export { useMyProfile };