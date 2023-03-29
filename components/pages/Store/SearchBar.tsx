import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSearch() {
    router.push({
      pathname: "/",
      query: { query },
    });
  }

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleQuery} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
