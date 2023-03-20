import "@/styles/globals.scss";
import AppContext from "@/components/context/App";

export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />;
    </AppContext>
  );
}
