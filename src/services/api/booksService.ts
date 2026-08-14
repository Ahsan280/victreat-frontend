import axiosInstance from "../../hooks/axios/axiosInstance";

const BOOKS_ENDPOINTS = {
  BASE: "/books",
};

export async function getAllBooks(params: {
  page: number;
  limit: number;
  q?: string;
}) {
  const response = await axiosInstance.get(BOOKS_ENDPOINTS.BASE, { params });
  return response.data;
}
