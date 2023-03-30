import { useKeyToSearch } from "@/hooks/useKeyToSearch";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const SearchBar: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>(router.query.query as string);
  const ref = useRef(null);

  useKeyToSearch(ref);
  function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSearch() {
    router.push({
      pathname: "/[page]",
      query: { ...router.query, query },
    });
  }

  return (
    <div className="mb-5 flex w-full md:w-1/3">
      <input
        ref={ref}
        className="mr-4 w-full border-2 border-gray-300 p-2"
        type="text"
        value={query}
        placeholder="Search or press '/'"
        onChange={handleQuery}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        onClick={handleSearch}
        className="border-2 border-gray-300 bg-gray-300 p-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
