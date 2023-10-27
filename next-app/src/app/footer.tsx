import Link from "next/link";

export default function Footer() {
  return (
    <footer className="items-center bg-black text-white mt-32 px-10">
      <div className="lg:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          <div className="text-center sm:text-start col-span-3">
            <ul className="list-none text-4xl p-8 m-0">
              We dedicate ourselves to helping
              <br />
              <span className="font-bold">Businesses </span>
              to achieve <span className="font-bold">Excellence</span>
              <br />
              with their brand.
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-4 text-xl">
                <Link href="#services">Services</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="#work">Work</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="#about">About</Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              {/* <li className="mb-4 text-xl">
                <Link href="#">Blog</Link>
              </li> */}
              <li className="mb-4 text-xl">
                <Link href="#contact">Contact</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link
                  href="https://codezela.com/privacy-policy"
                  target="_blank"
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
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              {/* <li className="mb-2 text-xl">
                <Link href="#">Join Our Team</Link>
              </li> */}
              <li className="mb-2 text-xl">
                <Link href="https://codezela.com">Codezela Tech.</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="https://sparks.codezela.com">
                  Sparks by Codezela
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">
                <Link href="https://twitter.com/ddigital_lk/">X</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="https://www.instagram.com/ddigital.lk/">
                  Instagram
                </Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="https://www.facebook.com/ddigital.lk/">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <Link href="https://maps.app.goo.gl/y5d1XGWWeN8Q2qFB8">
                <li className="mb-2 text-xl">
                  36, Brahmanagama,
                  <br />
                  Pannipitiya, 10230,
                  <br />
                  LK
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="p-8 text-center sm:text-center">
          <div className="text-6xl font-bold text-white mb-6">Ddigital</div>
          <div className="text-sm text-white mb-6">
            Copyright &copy; {new Date().getFullYear()} | Ddigital
          </div>
        </div>
      </div>
    </footer>
  );
}
