import { flattenedError } from "../../../schemas/loginSchema";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  label?: string;
  placeholder?: string;
  valueGetter: (e: HTMLInputElement | HTMLTextAreaElement) => void;
  errors?: flattenedError | null;
  type: string;
  validator?: string;
  id: string;
  name: string;
  className?: string;
}

export const BaseInput = ({
  label,
  placeholder,
  valueGetter,
  errors,
  id,
  type = "text",
  validator,
  name,
  className,
}: IProps) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  // const errorStyling = "outline-red-500 focus:outline-red-500";
  const [styling, setStyling] = useState<string>("");
  const { t } = useTranslation();
  const inputEmitter = (e: HTMLInputElement | HTMLTextAreaElement) => {
    valueGetter(e);
  };

  useEffect(() => {
    if (!errors?.fieldErrors[validator as keyof typeof errors.fieldErrors]) {
      setStyling(
        "w-full p-4 rounded-lg bg-gray-white placeholder:text-gray outline-none focus:outline-none"
      );
      setErrorMessage(undefined);
    } else {
      const { fieldErrors } = errors;
      if (fieldErrors) {
        const errorField =
          fieldErrors[validator as keyof typeof errors.fieldErrors];
        setErrorMessage(errorField?.shift());
        setStyling(
          "w-full p-4 rounded-lg bg-gray-white outline placeholder:text-gray outline-red-300 focus:outline-red"
        );
      }
    }
  }, [validator, errors]);

  const Component =
    type === "textarea" ? (
      <textarea
        maxLength={400}
        rows={4}
        id={id}
        name={name}
        className={styling}
        onChange={(event) => inputEmitter(event.target)}
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input
        type="text"
        id={id}
        name={name}
        onChange={(event) => inputEmitter(event.target)}
        className={styling}
        placeholder={placeholder}
      />
    );
  const Label = label ? <label htmlFor={id}> {label}</label> : null;

  return (
    <div className={`flex flex-col gap-y-3 ${className} min-h-max`}>
      {Label}
      {Component}
      <span className="text-red-300 text-[12px]">
        {t(errorMessage as string)}
      </span>
    </div>
  );
};
