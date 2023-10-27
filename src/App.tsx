import { useEffect } from "react";
import "./App.css";
import { TheFooter } from "./components/TheFooter";
import { TheHeader } from "./components/TheHeader";
import { BlockContact } from "./components/common/Block/BlockContact";
import { useTranslation } from "react-i18next";
import "./locales";
import { BlockPackages } from "./components/common/Block/BlockPackages";
import { Pricing } from "./components/modules/Pricing";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <>
      {/* <TheHeader /> */}
      {/* <BlockPackages /> */}
      <Pricing />
      <BlockContact />
      <TheFooter />
    </>
  );
}

export default App;
