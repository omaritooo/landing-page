import { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconCheck } from "../../common/Icons/IconCheck";
import { IconClose } from "../../common/Icons/IconClose";

const features = [
  "features.upload",
  "features.schedule",
  "features.rate",
  "features.deals",
  "features.stats",
];

// const activeFeatures = [true, true, true, false, false];

interface IProps {
  activeFeatures: boolean[];
  title: string;
  chosen: boolean;
  id: number;
  chosenEmitter: (id: number, chosen: boolean) => void;
  pricing: {
    month: string;
    annual: string;
  };
  annual: boolean;
}

export const PricingCard = ({
  activeFeatures,
  title,
  pricing,
  chosen,
  chosenEmitter,
  id,
  annual,
}: IProps) => {
  const { t } = useTranslation();

  const price = annual ? pricing.annual : pricing.month;
  const perValue = annual ? "pricing.annual" : "pricing.monthly";

  const packageChanger = () => {
    chosenEmitter(id, chosen);
  };

  return (
    <article
      className={`p-6 shadow-lg rounded-3xl w-fit transition duration-200 ease-in-out  ${
        chosen ? "bg-purple-900 text-white scale-110" : "bg-white"
      }`}
    >
      <h1 className="mb-6 text-2xl font-bold">{t(title)}</h1>
      <PricingCard.List>
        {features.map((el: string, index) => {
          return (
            <PricingCard.Feature
              feature={t(el)}
              key={index}
              state={activeFeatures[index]}
            />
          );
        })}
      </PricingCard.List>
      <div className="flex flex-col mt-6 gap-y-4">
        <span className="flex text-2xl gap-x-1 min-h-max">
          ${t(price)} <span className="self-end text-sm">/ {t(perValue)}</span>
        </span>
        <button
          type="button"
          className="w-full py-3 text-purple-500 bg-purple-300 rounded-lg"
          onClick={packageChanger}
        >
          {!chosen ? "Choose" : "Try for 1 Month"}
        </button>
      </div>
    </article>
  );
};

const Feature = ({ feature, state }: { feature: string; state: boolean }) => {
  const [styling, setStyling] = useState<string>("");
  useEffect(() => {
    if (!state) {
      setStyling(
        "font-thin flex gap-x-1 items-start  sm:max-w-[212px] min-h-max leading-4 text-gray"
      );
    } else {
      setStyling(
        "font-thin flex gap-x-1 items-start align-start sm:max-w-[212px] leading-4"
      );
    }
  }, [state]);

  const Icon: JSX.Element = state ? <IconCheck /> : <IconClose />;

  return (
    <li className={styling}>
      {Icon} <span>{feature}</span>
    </li>
  );
};

PricingCard.Feature = Feature;

const List = ({ children }: { children: ReactElement[] }) => {
  return <ul className="flex flex-col text-base gap-y-4">{children}</ul>;
};

PricingCard.List = List;
