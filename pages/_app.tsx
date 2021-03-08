import { ItemContextProvider } from "../context/items";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ItemContextProvider>
      <Component {...pageProps} />
    </ItemContextProvider>
  );
}

export default MyApp;
