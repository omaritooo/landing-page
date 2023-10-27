
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ButtonLocale } from "./common/Buttons/ButtonLocale";
import { ButtonHamburger } from "./common/Buttons/ButtonHamburger";

export const TheHeader = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false)
  const { t } = useTranslation();
  const menuToggle = (e:boolean): void =>  {
    setHamburgerToggle(e)
  }

  const hyperLinks = [
    {
      name: t("titles.home"),
      href: "/",
      id: "home-link",
    },
    {
      name: t("titles.info"),
      href: "/",
      id: "phone-link",
    },
    {
      name: t("titles.perks"),
      href: "/",
      id: "app-link",
    },
    {
      name: t("titles.app"),
      href: "/",
      id: "card-link",
    },
    {
      name: t("titles.packages"),
      href: "/",
      id: "package-link",
    },
    {
      name: t("titles.contact"),
      href: "/",
      id: "contact-link",
    },
  ];


  return (
    <header id="header" className="lg:container navbar">
      <nav className="container w-full bg-gray-800">
        <div className="flex items-center justify-center w-full mx-auto">
          <div className="flex items-center justify-between w-full h-fit">
            <div className="flex items-center flex-shrink-0 gap-x-2">
              <a
                href="#"
                className="flex items-center text-xl font-bold text-white"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 239 277"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M235.266 91.1C221.066 28.2 166.866 0 119.266 0C71.7661 0 17.4661 28.1 3.36607 91C-12.2339 160.4 29.3661 218.4 66.9661 255C81.1661 268.8 99.8661 276.4 119.466 276.4C139.166 276.4 157.766 268.8 171.766 255C209.366 218.5 250.866 160.4 235.266 91.1ZM51.5661 35.3C72.5661 23.8 95.4661 18 119.566 18C143.366 18 163.466 23 186.166 34.6C200.366 45.4 212.066 60.4 219.166 79.8C209.166 69.1 197.766 60.2 184.866 53.2C144.866 31.6 93.7661 31.8 53.8661 53.3C40.7661 60.3 29.1661 69.5 19.1661 80.5C26.0661 61.2 37.5661 46.2 51.5661 35.3ZM27.4661 173.3C27.4661 159.4 30.0661 146.8 34.9661 136C44.3661 115.4 60.9661 99.5 80.9661 90.5C76.0661 97.9 73.1661 106.9 73.1661 116.5C73.1661 117.2 73.2661 117.8 73.2661 118.5C57.5661 131.7 47.5661 151.4 47.5661 173.4C47.5661 194.8 52.0661 214.7 60.8661 231.1C48.5661 217.3 36.7661 201.2 27.8661 183.3C27.5661 179.4 27.4661 176.1 27.4661 173.3ZM184.666 199.1C170.066 199.1 158.266 187.5 158.266 173.3C158.266 164.8 155.566 157 150.966 150.6C156.066 145.8 160.066 139.9 162.666 133.2C172.666 143.7 178.766 157.8 178.766 173.3C178.766 174.2 178.866 175 179.166 175.8C179.466 176.6 179.966 177.3 180.566 177.9C181.166 178.5 181.866 179 182.666 179.3C183.466 179.6 184.266 179.8 185.166 179.8C186.066 179.8 186.866 179.6 187.666 179.3C188.466 179 189.166 178.5 189.766 177.9C190.366 177.3 190.866 176.6 191.166 175.8C191.466 175 191.666 174.1 191.566 173.3C191.566 151.2 181.466 131.5 165.766 118.3C165.766 117.7 165.866 117.1 165.866 116.5C165.866 107.1 163.066 98.4 158.366 91.1C189.566 105.7 211.266 137 211.266 173.3C211.066 187.5 199.266 199.1 184.666 199.1ZM85.3661 116.4C85.3661 97.4 100.666 81.9 119.466 81.9C138.266 81.9 153.566 97.4 153.566 116.4C153.566 135.4 138.266 150.9 119.466 150.9C100.566 150.9 85.3661 135.5 85.3661 116.4ZM97.1661 260.1C96.8661 258.9 96.3661 257.8 95.5661 256.8C85.7661 246.4 80.1661 239.9 72.0661 224.6C64.2661 210.2 60.2661 192.5 60.2661 173.3C60.2661 157.9 66.3661 143.8 76.2661 133.4C78.7661 139.8 82.6661 145.6 87.4661 150.3C82.7661 156.8 79.8661 164.7 79.8661 173.4C79.8661 199.8 89.6661 224.4 107.466 242.9C115.766 251.5 123.866 257.7 133.466 262.6C128.866 263.7 124.166 264.3 119.366 264.3C111.666 264.2 104.266 262.7 97.1661 260.1ZM163.166 246.2C159.466 249.9 155.266 253 150.866 255.5C136.866 250.5 126.766 243.9 116.366 233.1C100.966 217.1 92.5661 195.8 92.5661 173C92.5661 167.2 94.5661 161.9 97.7661 157.6C104.166 161 111.466 163 119.266 163C126.866 163 133.966 161.1 140.266 157.8C143.466 162.1 145.366 167.3 145.366 173C145.366 194.6 162.866 212.2 184.466 212.2C187.666 212.2 190.666 211.7 193.666 211C188.866 217.7 183.666 224 178.466 229.9C167.266 229.4 157.766 226.4 149.566 220.6C141.966 215.3 135.766 208.2 131.466 199.9C127.166 191.6 124.966 182.5 124.866 173.1C124.866 172.2 124.766 171.4 124.466 170.6C124.166 169.8 123.666 169.1 123.066 168.4C122.466 167.8 121.766 167.3 120.966 166.9C120.166 166.6 119.366 166.4 118.466 166.4C117.566 166.4 116.766 166.6 115.966 166.9C115.166 167.2 114.466 167.7 113.866 168.4C113.266 169 112.766 169.8 112.466 170.6C112.166 171.4 112.066 172.3 112.066 173.1C112.066 184.6 114.866 195.9 120.166 206.1C125.466 216.3 133.066 225 142.366 231.6C149.566 236.8 157.866 240.3 166.966 242.1C165.866 243.6 164.566 244.9 163.166 246.2ZM221.966 154C212.966 105.6 170.166 68.8 118.966 68.8C77.9661 68.8 40.4661 92.9 23.5661 130.1C20.3661 137.3 17.9661 145.1 16.5661 153.4C12.7661 138.8 11.2661 123.4 13.0661 107.3C13.5661 107.2 13.9661 107 14.3661 106.8C15.2661 106.3 15.9661 105.6 16.4661 104.7C27.8661 87.8999 42.3661 74.6 59.6661 65.3C95.9661 45.6 142.666 45.6 179.066 65.2C196.266 74.3999 210.666 87.6 222.166 104.4C222.666 105.1 223.266 105.7 223.966 106.2C224.466 106.5 225.066 106.8 225.666 107C227.466 123.4 225.966 139.1 221.966 154Z"
                    fill="#222626"
                  />
                </svg>
              </a>
              <span className="text-2xl font-normal"> لوجو </span>
              <div className="hidden h-full align-middle lg:flex md:rtl:mr-10 lg:rtl:mr-14 md:ltr:ml-10 lg:ltr:ml-14">
                <div className="flex items-center h-full font-light align-middle gap-x-8 md:text-sm lg:text-base">
                  {hyperLinks.map((el) => {
                    return (
                      <a
                      key={el.id}
                        id={el.id}
                        href={el.href}
                        className="nav-link nav-link-active"
                      >
                        {el.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex mr-2 lg:hidden">
             <ButtonHamburger menuToggle={menuToggle}/>
            </div>
            <div className="items-center hidden mx-1 lg:flex gap-x-2">
              {/* <button id="localeBtn" className="flex gap-x-2">
                <img alt="locale" id="localeImage" />
                <span id="localeName"></span>
              </button> */}
              <ButtonLocale />

              <button
                id="menu-toggle"
                className="text-black-2 mr-2 hidden lg:block text-sm font-normal rounded-[15px] border-[1px] py-3 lg:px-6 border-black-2"
              >
                تسجيل دخول
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden" id="mobile-menu">
          <div
            className={`${
              hamburgerToggle ? "flex" : "hidden"
            } flex-col items-start mt-5 mr-5 text-lg font-light gap-y-2 md:text-lg`}
          >
            {hyperLinks.map((el) => {
              return <a key={el.id} href={el.href}>{el.name}</a>;
            })}
          </div>
          <ButtonLocale />
        </div>
      </nav>
    </header>
  );
};
