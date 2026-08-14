import BookCard from "./BookCard";

function BookGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}

export default BookGrid;
