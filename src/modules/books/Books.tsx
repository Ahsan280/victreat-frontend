import { useState } from "react";
import BookGrid from "./_components/BookGrid";
import Search from "../../components/Search";

function Books() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-[90%] mx-auto p-2">
      <div className="flex flex-col gap-2 my-5">
        <h1 className="text-2xl font-medium text-gray-500">
          Welome to the books library
        </h1>
        <p>You can search books here</p>
      </div>
      <Search value={search} setValue={setSearch} />
      <BookGrid />
    </div>
  );
}

export default Books;
