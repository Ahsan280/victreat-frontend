import { CiSearch } from "react-icons/ci";

function Search({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <div className="relative p-2 rounded-md border border-gray-200">
      <CiSearch
        className={`${value.length >= 1 && "hidden"} absolute top-2.5 text-gray-500`}
      />
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className="border-none outline-none w-full "
      />
    </div>
  );
}

export default Search;
