import { useState } from "react";
import { BaseInput } from "../Base/BaseInput";
import {
  flattenedError,
  formSchema,
  formSchemaType,
} from "../../../schemas/loginSchema";
import i18n from "../../../locales";

const { t } = i18n;
export const BlockContact = () => {
  return (
    <div className="container flex flex-col items-center justify-between mx-auto my-10 lg:my-10 gap-y-5 lg:flex-row">
      <BlockContact.Card />
      <BlockContact.Form />
    </div>
  );
};

const Form = () => {
  const [formData, setFormData] = useState<formSchemaType>({
    name: "",
    email: "",
    subject: "",
  });
  const [errors, setErrors] = useState<flattenedError | null>(null);

  const handleChange = (event: HTMLInputElement | HTMLTextAreaElement) => {
    const { name, value } = event;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitChange = async () => {
    const valid = await formSchema.safeParseAsync(formData);
    console.log(valid);
    if (!valid.success) {
      setErrors({ ...valid.error.flatten() });
    } else {
      console.log("Success!");
    }
  };
  return (
    <form className="w-full lg:w-[413px] sm:max-w-[496px] mt-8 sm:mt-0 lg:max-w-[413px] shadow-1 py-6 px-8 rounded-lg bg-white">
      <h1 className="mb-8 text-base leading-normal text-center text-black-2">
        تحدث إلينا وشاركنا آرائك
      </h1>
      <BaseInput
        className="mt-5"
        id="name-field"
        name="name"
        type="text"
        placeholder={t("form.name")}
        label={t("form.name")}
        errors={errors}
        valueGetter={handleChange}
        validator="name"
      />
      <BaseInput
        className="mt-5"
        id="email-field"
        name="email"
        type="text"
        errors={errors}
        placeholder={t("form.email")}
        label={t("form.email")}
        valueGetter={handleChange}
        validator="email"
      />

      <BaseInput
        className="mt-5"
        id="subject-field"
        errors={errors}
        name="subject"
        type="textarea"
        placeholder={t("form.subject")}
        label={t("form.subject")}
        valueGetter={handleChange}
        validator="subject"
      />

      <button
        className="w-full h-12 mt-6 text-sm font-light text-white rounded-lg bg-green shadow-1"
        type="button"
        onClick={submitChange}
      >
        ارسال
      </button>
    </form>
  );
};

const Card = () => {
  return (
    <div className="w-fit relative h-[530px]">
      <div className="relative mb-10 rtl:text-right ltr:text-left">
        <h1 className="text-sm font-light text-gray">تواصل معنا</h1>
        <h2 className="mt-4 text-3xl font-bold text-black">
          تطبيق TracklyMate
        </h2>
        <img
          alt="message"
          className="absolute hidden sm:block -top-2 ltr:-right-12 rtl:-left-12"
          src="/assets/message.png"
        />
        <p className="text-2xl font-normal rtl:text-right text-left max-w-[495px] mt-4 mb-6 leading-10">
          ابدأ رحلتك الرقمية الآن واستمتع بإنتاجية أكبر وجهد أقل.
        </p>
      </div>
      <div className="relative flex flex-col p-5 text-white h-[264px] max-w-[419px] rounded-[20px] bg-gradient-card gap-y-6">
        <div className="flex h-fit gap-x-3">
          <div className="p-4 bg-white rounded-lg bg-opacity-10 h-fit w-fit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159998 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-normal">موقع مقر الشركة</span>
            <span className="font-light text-white">
              السعودية, الرياض ش7 مبني 6765
            </span>
          </div>
        </div>
        <div className="flex h-fit gap-x-3">
          <div className="p-4 bg-white rounded-lg bg-opacity-10 h-fit w-fit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-normal">رقم التواصل</span>
            <span className="font-light text-white"> +966 123 45 6789 </span>
          </div>
        </div>
        <div className="flex h-fit gap-x-3">
          <div className="p-4 bg-white rounded-lg bg-opacity-10 h-fit w-fit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-normal">فريق الدعم</span>
            <span className="font-light text-white">
              support@TracklyMate.com
            </span>
          </div>
        </div>
        <div className="absolute hidden ltr:right-5 rtl:left-5 bottom-12 xs:block">
          <svg
            width="82"
            height="82"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="41" cy="41" r="41" fill="url(#paint0_linear_1_3032)" />
            <defs>
              <linearGradient
                id="paint0_linear_1_3032"
                x1="82"
                y1="4.88758e-06"
                x2="-16.184"
                y2="31.4092"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#172E36" />
                <stop offset="1" stopColor="#088C7F" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="38"
            height="38"
            className="-translate-y-1 ltr:-translate-x-3 rtl:translate-x-3"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="19" fill="url(#paint0_linear_1_3033)" />
            <defs>
              <linearGradient
                id="paint0_linear_1_3033"
                x1="38"
                y1="2.26498e-06"
                x2="-7.49993"
                y2="14.5555"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#172E36" />
                <stop offset="1" stopColor="#088C7F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

BlockContact.Card = Card;
BlockContact.Form = Form;
