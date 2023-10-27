export const BlockPackages = () => {
  return (
    <section id="package-section" className="container mx-auto my-[150px] py-4">
      <h1 className="text-sm font-light text-center text-gray">الاسعار</h1>
      <h2 className="mt-4 text-3xl font-bold mx-auto my-4 text-green md:max-w-[613px] w-full text-center">
        الباقات المتوفرة من تطبيق TracklyMate لحلول إدارة الموارد البشرية
        الرقمية
      </h2>
      <div className="flex flex-col items-start justify-center mx-auto w-fit gap-y-2 md:flex-row gap-x-8">
        <div className="flex flex-row items-center gap-x-2">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5.5" cy="5.5" r="5.5" fill="#088C7F" />
          </svg>
          <span className="text-2xl"> تحديد الأولويات </span>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5.5" cy="5.5" r="5.5" fill="#088C7F" />
          </svg>
          <span className="text-2xl"> إدارة الموارد البشرية </span>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5.5" cy="5.5" r="5.5" fill="#088C7F" />
          </svg>
          <span className="text-2xl"> تحسين الإنتاجية </span>
        </div>
      </div>
      <div className="p-4 mx-auto mt-6 bg-white sm:p-8 rounded-site w-fit shadow-1">
        <div className="w-[80vw] max-w-[380px] sm:max-w-[401px] sm:w-[401px] bg-green items-center text-white p-7 flex flex-col rounded-site justify-center gap-y-7">
          <span className="text-2xl text-left rtl:text-right"> باقتي </span>
          <span className="flex items-center text-xl gap-x-1">
            <span>سنة</span>
            <span> / </span>
            <span className="text-2xl font-bold" id="package-value"></span>
          </span>
        </div>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            1-3 موظف
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            نظام شؤون الموظفين
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            نظام حضور و انصراف
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            تطبيق للموظفين
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            دعم كامل و متقدم
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            تحقق من الوج
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                stroke="#4CD964"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            تطبيق للموظفين
          </li>
        </ul>
        <div className="flex flex-col my-8 gap-y-5">
          <div className="text-sm font-bold text-black value"></div>
          <input
            id="range"
            type="range"
            className="slider"
            value="3"
            step="1"
            min="3"
            max="100"
          />
        </div>
        <button className="w-full py-5 text-sm text-white rounded-2xl bg-green">
          تجربه مجاني
        </button>
      </div>
    </section>
  );
};
