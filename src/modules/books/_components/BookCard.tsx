import { FaStar } from "react-icons/fa";
import type { Book } from "../../../types/books";

function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col bg-gray-200/10 border border-gray-100 shadow-sm rounded-sm p-4">
      <div className="flex w-full items-center justify-between">
        <p>Title:</p>
        <p>{book.title}</p>
      </div>
      <hr className="my-3 text-gray-200" />
      <div className="flex w-full items-center justify-between gap-5">
        <p>Authors:</p>
        <div className="flex flex-wrap gap-1">
          {book.authorNames.map((name) => {
            return (
              <p
                key={name}
                className="bg-green-700 rounded-2xl text-sm text-white px-2"
              >
                {name}
              </p>
            );
          })}
        </div>
      </div>
      <hr className="my-3 text-gray-200" />
      <div className="flex items-center gap-2">
        <p>Average Rating:</p>
        <FaStar fill="yellow" />
        <span>{book.averageRating ? book.averageRating : 0}</span>
        <p>Rating Count</p>
        <span>{book.ratingsCount ? book.ratingsCount : 0}</span>
      </div>
    </div>
  );
}

export default BookCard;
