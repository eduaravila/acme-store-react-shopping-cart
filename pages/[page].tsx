import { ApiItemsResponse } from "@/common/types";
import Home from "@/components/pages/Store";
import { PAGE_SIZE } from "@/constants";
import { GetServerSideProps } from "next";

interface PageProps {
  itemsResponse: ApiItemsResponse;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const { API_URL } = process.env;
  const { page = 1, query = "" } = context.query;
  const actualPage = Number(page) - 1 || 0;

  const host = context.req.headers.host;
  const apiHost = API_URL || `http://${host}`;

  const resItems = await fetch(
    `${apiHost}/api/items?limit=${PAGE_SIZE}&offset=${actualPage}&query=${query}`
  );
  const resCurrency = await fetch(`${apiHost}/api/currencies`);

  const itemsResponse: ApiItemsResponse = await resItems.json();
  const currencies = await resCurrency.json();

  return {
    props: {
      itemsResponse,
      currencies,
    },
  };
};

export default Home;
