import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../../services/api/booksService";

export function useGetBooks(params: {
  page: number;
  limit: number;
  q?: string;
}) {
  return useQuery({
    queryKey: ["books", params],
    queryFn: () => getAllBooks(params),
  });
}
