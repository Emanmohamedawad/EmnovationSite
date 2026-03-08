import "../styles/tailwind.css";
import "../styles/slick.css";
import { LanguageProvider } from "../utils/LanguageContext";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
