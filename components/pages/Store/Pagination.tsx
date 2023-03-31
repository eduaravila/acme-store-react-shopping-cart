import { PAGE_SIZE } from "@/constants";
import { useRouter } from "next/router";

interface Props {
  total: number;
}

function fixPage(page: number): number {
  return page + 1;
}

const Pagination: React.FC<Props> = ({ total }) => {
  const router = useRouter();
  const { page } = router.query;

  const numberOfPages = Math.ceil(total / PAGE_SIZE);
  const currentPage = Number(page) || 1;

  function handlePageChange(page: number) {
    router.push({
      pathname: "/[page]",
      query: { ...router.query, page },
    });
  }
  return (
    <div className="my-5 flex justify-start">
      {currentPage !== 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>←</button>
      )}
      {Array.from({ length: numberOfPages }).map((_, i) => {
        const page = fixPage(i);
        return (
          <button
            disabled={page === currentPage}
            key={i}
            className={`mx-1 rounded-md px-3 py-1 ${page ? "bg-gray-200" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        );
      })}
      {currentPage !== numberOfPages && (
        <button onClick={() => handlePageChange(currentPage + 1)}>→</button>
      )}
    </div>
  );
};

export default Pagination;
