import "../styles/tailwind.css";
import "../styles/slick.css";
import { LanguageProvider } from "../utils/LanguageContext";
import { ThemeProvider } from "../utils/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;
