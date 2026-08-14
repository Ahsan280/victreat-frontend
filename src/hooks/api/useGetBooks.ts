import { useQuery } from "@tanstack/react-query";

export function useGetBooks(params: {
  page: number;
  limit: number;
  q?: string;
}){
    return useQuery({
        queryKey: ['books', params]
    })
};
