import { FaStar } from "react-icons/fa";

function BookCard() {
  return (
    <div className="flex flex-col bg-gray-200/10 border border-gray-100 shadow-sm rounded-sm p-4">
      <div className="flex w-full items-center justify-between">
        <p>Title:</p>
        <p>The Night Fury</p>
      </div>
      <hr className="my-3 text-gray-200" />
      <div className="flex w-full items-center justify-between gap-5">
        <p>Authors:</p>
        <div className="flex flex-wrap gap-1">
          <p className="bg-green-700 rounded-2xl text-sm text-white px-2">The Night Fury</p>
          <p className="bg-green-700 rounded-2xl text-sm text-white px-2">The Night Fury</p>
          <p className="bg-green-700 rounded-2xl text-sm text-white px-2">The Night Fury</p>
          
        </div>
      </div>
      <hr className="my-3 text-gray-200" />
      <div className="flex items-center gap-2">
        <p>Average Rating:</p>
        <FaStar fill="yellow"/>
        <span>4.5</span>
        <p>Rating Count</p>
        <span>1</span>
      </div>
    </div>
  );
}

export default BookCard;
