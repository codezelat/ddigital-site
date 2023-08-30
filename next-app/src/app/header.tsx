"use client";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";

const navigationLinks = [
  { url: "/", title: "Home", isActive: true },
  { url: "/services", title: "Services" },
  { url: "/projects", title: "Work" },
  { url: "/contact", title: "Contact" },
];

export default function Header() {
  const [isHideOnMobileVisible, setIsHideOnMobileVisible] = useState(false);
  const toggleHideOnMobile = () => {
    setIsHideOnMobileVisible(!isHideOnMobileVisible);
  };

  useEffect(() => {
    const handleScrollToElement = (
      e: MouseEvent<HTMLAnchorElement>,
      id: string,
    ) => {
      e.preventDefault();
      const targetElement = document.querySelector(`#${id}`);
      if (targetElement instanceof Element) {
        const topOffset = (targetElement as HTMLElement).offsetTop;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    };

    const scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e: any) => {
        e.preventDefault();
        const targetId = (link as HTMLAnchorElement)
          .getAttribute("href")
          ?.substring(1);
        if (targetId) {
          handleScrollToElement(e, targetId);
        }
      });
    });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 items-center rounded-3xl bg-white backdrop-blur-10 m-5 shadow-2xl mx-12 ${
        isHideOnMobileVisible ? "bg-opacity-100" : "bg-opacity-80"
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="flex items-center justify-center m-5">
          <Link href="./">
            <div className="text-4xl font-bold mr-4 font-kalam">DDigital</div>
          </Link>
          <Link
            href="#"
            className="md:hidden p-4 ml-4 text-lg text-white font-semibold bg-black rounded-full flex items-center justify-center"
            style={{ width: "48px", height: "48px" }}
          >
            <FontAwesomeIcon
              icon={faPlus}
              height={24}
              width={24}
              className="text-white"
            />
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start mb-2 md:m-5">
          <div
            className={`md:flex flex flex-wrap items-center justify-center lg:justify-start ${
              isHideOnMobileVisible ? "block" : "hidden"
            }`}
          >
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                className={`m-2 py-2 text-lg font-semibold rounded-lg text-center ${
                  link.isActive ? "bg-black text-white" : "text-black"
                } scroll-link`}
                style={{ width: "110px" }}
                href={link.url}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="relative">
            <Link
              href="#"
              className="p-4 ml-8 hidden md:flex text-lg text-white font-semibold bg-black rounded-full items-center justify-center"
              style={{ width: "48px", height: "48px" }}
            >
              <FontAwesomeIcon
                icon={faPlus}
                height={24}
                width={24}
                className="text-white"
              />
            </Link>
            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 bg-white w-24 h-7 rounded-full flex md:hidden items-center justify-center -mt-3 ${
                isHideOnMobileVisible ? "rotate-up" : "rotate-down"
              }`}
              onClick={toggleHideOnMobile}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                height={18}
                width={18}
                className="text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
