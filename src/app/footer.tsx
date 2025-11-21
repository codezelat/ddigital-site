import Link from "next/link";

export default function Footer() {
  return (
    <footer className="items-center bg-black text-white mt-32 px-4 lg:px-10">
      <div className="lg:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          <div className="text-center sm:text-start col-span-3">
            <div className="p-8 m-0 text-3xl lg:text-4xl leading-tight">
              <p className="mb-0">
                We dedicate ourselves to helping{" "}
                <span className="font-bold">Businesses</span> achieve{" "}
                <span className="font-bold">Excellence</span> with their brand.
              </p>
            </div>
          </div>
          <div className="text-center sm:text-start col-span-3 md:col-span-1">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-4 text-xl">
                <Link href="/services">Services</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="/#work">Work</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="/#about">About</Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start col-span-3 md:col-span-1">
            <ul className="list-none text-sm p-8 m-0">
              {/* <li className="mb-4 text-xl">
                <Link href="#">Blog</Link>
              </li> */}
              <li className="mb-4 text-xl">
                <Link href="/#contact">Contact</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">
                <Link href="mailto:ddigital.lk@gmail.com">Email Us</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="tel:+94727333577">Call Us</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="https://wa.me/+94727333577/">WhatsApp Us</Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">
                <Link href="https://codezela.com">Codezela Tech.</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="https://sparks.codezela.com">
                  Sparks by Codezela
                </Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="https://www.instagram.com/ddigital.lk/">
                  Instagram
                </Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="https://www.tiktok.com/@ddigital.lk/">TikTok</Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">
                <Link href="https://twitter.com/ddigital_lk/">X</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="https://www.threads.net/@ddigital.lk">Threads</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="https://www.facebook.com/ddigital.lk/">
                  Facebook
                </Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="https://www.youtube.com/@ddigital_lk/">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">
                <Link href="https://www.google.com/maps/search/?api=1&query=345%2F35%2C%20RIT%20Alles%20Mw%2C%20Colombo%2008%2C%20Sri%20Lanka">
                  <span className="block">345/35, RIT Alles Mw,</span>
                  <span className="block">Colombo 08,</span>
                  <span className="block">Sri Lanka</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-8 text-center sm:text-center">
          <Link href="./">
            <div className="text-6xl font-bold text-white mb-6">Ddigital</div>
          </Link>
          <div className="text-sm text-white mb-6">
            &copy; 2025 Ddigital. All rights reserved. A proud product built with
            love by{" "}
            <Link href="https://codezela.com" target="_blank">
              Codezela Technologies
            </Link>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
