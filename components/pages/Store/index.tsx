import { ApiCurrenciesResponse, ApiItemsResponse, Item } from "@/common/types";
import Card from "@/components/Card";
import { ErrorMessage } from "@/components/ErrorMessage";

import Cart from "@/components/pages/Store/Cart";
import Footer from "@/components/pages/Store/Footer";
import Header from "@/components/pages/Store/Header";
import Pagination from "@/components/pages/Store/Pagination";
import SearchBar from "@/components/pages/Store/SearchBar";
import { NextPage } from "next";
import Image from "next/image";

interface HomeProps {
  itemsResponse: ApiItemsResponse;
  currencies: ApiCurrenciesResponse;
}

const Home: NextPage<HomeProps> = ({ itemsResponse, currencies }) => {
  const Items = itemsResponse.items.map((item: Item) => (
    <div key={item.id} className={"w-full"}>
      <Card.Vertical
        Header={
          <Image
            src={item.imageSrc}
            alt={item.title}
            width={300}
            height={300}
          />
        }
        Body={
          <>
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </>
        }
      />
    </div>
  ));

  if (!itemsResponse.items.length) {
    return <ErrorMessage message="Oops, no items found." />;
  }

  return (
    <div className="mx-auto">
      <div>
        <Header />
        <div>
          <SearchBar />
          <div className="flex flex-wrap md:grid md:grid-cols-4 md:gap-4">
            {Items}
          </div>
          <Pagination total={itemsResponse.total} />
        </div>
        <Cart />
      </div>
      <Footer currencies={currencies} />
    </div>
  );
};

export default Home;
