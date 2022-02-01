import '../styles/globals.css'
import { useEffect, useState } from "react";
import { classNames } from "../common/utils";

import DocumentHead from "../components/DocumentHead";
import ThemeContext from "../components/helpers/ThemeContext";
import Footer from '../components/layout/Footer';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(false);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    localStorage.theme = !isDarkMode ? "dark" : "light";
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <DocumentHead />
      <div
        className={classNames(
          "wrap flex flex-col h-full",
          isDarkMode ? "dark" : ""
        )}
      >
        <ThemeContext.Provider
            value={{
              enabled: isDarkMode,
              toggle: toggleDarkMode,
            }}
          >
            {/* <Header /> */}
        </ThemeContext.Provider>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp
