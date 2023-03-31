import { ApiCurrenciesResponse, ApiItemsResponse } from "@/common/types";
import { ErrorMessage } from "@/components/ErrorMessage";

import Cart from "@/components/pages/Store/Cart";
import Footer from "@/components/pages/Store/Footer";
import Header from "@/components/pages/Store/Header";
import Pagination from "@/components/pages/Store/Pagination";
import SearchBar from "@/components/pages/Store/SearchBar";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Items from "./Items";

interface HomeProps {
  itemsResponse: ApiItemsResponse;
  currencies: ApiCurrenciesResponse;
}

const Home: NextPage<HomeProps> = ({ itemsResponse, currencies }) => {
  const router = useRouter();

  const { cur } = router.query;

  if (currencies.length === 0) {
    return <ErrorMessage message="Oops, something went wrong." />;
  }

  let currency = currencies.find((currency) => currency.key === cur);

  if (!currency) {
    currency = currencies[0];
  }

  return (
    <div className="container mx-auto">
      <div className="mb-28 flex flex-col lg:flex-row">
        <div className="flex-1">
          <Header />
          <div className="flex flex-col p-8">
            <SearchBar />
            <Items
              items={itemsResponse.items}
              currency={currency}
              currencies={currencies}
            />
            <Pagination total={itemsResponse.total} />
          </div>
        </div>
        <Cart currencies={currencies} currency={currency} />
      </div>
      <Footer currencies={currencies} />
    </div>
  );
};

export default Home;
