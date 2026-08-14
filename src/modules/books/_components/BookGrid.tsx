import type { Book } from "../../../types/books";
import BookCard from "./BookCard";

function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
      {books.map((book) => {
        return <BookCard book={book} />;
      })}
    </div>
  );
}

export default BookGrid;
