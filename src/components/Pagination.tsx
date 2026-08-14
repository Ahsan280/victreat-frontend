interface PaginationProps {
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  onPageChange: (page: number) => void;
}

function Pagination({
  page,
  totalPages,
  hasNext,
  hasPrev,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return;
  }
  return (
    <div className="flex items-center gap-5">
      <button
        disabled={!hasPrev}
        className={`disabled:opacity-20 bg-red-400 rounded-sm px-2 py-1 cursor-pointer`}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </button>
      <span>{page}</span>
      <button
        disabled={!hasNext}
        className={`disabled:opacity-20 bg-green-400 text-white rounded-sm px-2 py-1 cursor-pointer`}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
