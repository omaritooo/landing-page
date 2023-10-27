import { PricingCard } from "./PricingCard";
import { Data } from "./DataProvider";
import { ButtonToggle } from "../../common/Buttons/ButtonToggle";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation();
  const [chosenValues, setChosenValues] = useState([true, false, false]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const handleChosenValues = (id: number, state: boolean) => {
    if (state) {
      return;
    } else {
      const arr = chosenValues.map((el, idx) => {
        if (id === idx) {
          return (el = true);
        } else {
          return (el = false);
        }
      });
      setChosenValues(arr);
    }
  };
  return (
    <section className="container flex flex-col items-center justify-center my-32 gap-x-8">
      <h1 className="mb-4 text-lg text-center sm:text-3xl">
        {t("pricing.head")}
      </h1>
      <p className="max-w-[550px] font-light text-center leading-5 sm:mb-10 mb-6">
        {t("pricing.description")}
      </p>
      <div className="flex items-center mb-10 gap-x-4">
        <span>{t("pricing.monthly")}</span>
        <ButtonToggle
          checkEmitter={handleCheckboxChange}
          emitValue={isChecked}
        />
        <span>{t("pricing.annual")}</span>
      </div>
      <div className="flex flex-col justify-center sm:flex-row gap-7">
        {Data.map((el) => {
          return (
            <PricingCard
              key={el.id}
              chosen={chosenValues[el.id]}
              chosenEmitter={handleChosenValues}
              id={el.id}
              annual={isChecked}
              activeFeatures={[...el.features]}
              title={el.title}
              pricing={el.pricing}
            />
          );
        })}
      </div>
    </section>
  );
};
