import CurrencyConfigProvider from "@/context/currencyConfig";
import ShoppingCartProvider from "@/context/shoppingCart";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <CurrencyConfigProvider>
        <Component {...pageProps} />
      </CurrencyConfigProvider>
    </ShoppingCartProvider>
  );
}

export default MyApp;
