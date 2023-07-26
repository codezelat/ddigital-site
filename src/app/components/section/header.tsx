"use client";
import Link from "next/link";
import { MouseEvent, useEffect } from "react";

function Header() {
  const navigationLinks = [
    { url: "/", title: "Home", isActive: true },
    { url: "/services", title: "Services" },
    { url: "/projects", title: "Projects" },
    { url: "/contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScrollToElement = (
      e: MouseEvent<HTMLAnchorElement>,
      id: string
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
    <header className="items-center rounded-3xl bg-white bg-opacity-30 backdrop-blur-10 m-5 shadow-2xl mx-12">
      <div className="flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="flex items-center justify-center m-5">
          <div className="text-4xl font-bold font-kalam">DDigital</div>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start m-5">
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
          <div className="relative">
            <Link
              href="/add"
              className="p-4 ml-0 sm:ml-6 text-lg text-white font-semibold bg-black rounded-full flex items-center justify-center"
              style={{ width: "48px", height: "48px" }}
            >
              <i className="fas fa-plus"></i>
            </Link>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white w-24 h-7 rounded-full flex lg:hidden items-center justify-center mt-2">
              <i className="fas fa-chevron-down text-black"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
