import { useState } from "react";
import BookGrid from "./_components/BookGrid";
import Search from "../../components/Search";
import { useGetBooks } from "../../hooks/api/useGetBooks";
import { useDebounce } from "../../hooks/use-debounce";
import Pagination from "../../components/Pagination";

function Books() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [page, setPage] = useState(1);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  const { data, isLoading } = useGetBooks({
    page: page,
    limit: 5,
    q: debouncedSearch,
  });
  console.log(data);
  const books = data?.data?.books;
  const paginationData = data?.data?.pagination;

  return (
    <div className="w-[90%] mx-auto p-2">
      <div className="flex flex-col gap-2 my-5">
        <h1 className="text-2xl font-medium text-gray-500">
          Welome to the books library
        </h1>
        <p>You can search books here</p>
      </div>
      <Search value={search} setValue={setSearch} />

      {isLoading ? (
        <div className="w-full flex justify-center items-center p-5">
          <div className="w-10 h-10 border-4 border-gray-400 border-t-blue-400 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {books && <BookGrid books={books} />}

          <Pagination
            totalPages={paginationData.totalPages}
            hasNext={paginationData.hasNext}
            hasPrev={paginationData.hasPrev}
            onPageChange={onPageChange}
            page={page}
          />
        </>
      )}
    </div>
  );
}

export default Books;
