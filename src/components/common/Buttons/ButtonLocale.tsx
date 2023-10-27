import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ButtonLocale = () => {
  const { i18n } = useTranslation();
//   const [flag, setFlag] = useState(i18n.language);
  const changer = () => {
    if (i18n.language == "en") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };
  const flag = i18n.language == 'en' ? <img src="/flags/us.png" alt="en"/> : <img src="/flags/ksa.png" alt="ar"/>
  return (
    <button className="flex gap-x-1" type="button" onClick={changer}>
     {flag}
    </button>
  );
};
