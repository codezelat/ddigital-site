import Link from "next/link";

export default function Footer() {
  return (
    <footer className="items-center bg-black text-white mt-32 px-10">
      <div className="lg:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          <div className="text-center sm:text-start col-span-3">
            <ul className="list-none text-4xl p-8 m-0">
              We liberate our clients
              <br />
              to dream big with their
              <br /> brand.
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-4 text-xl">
                <Link href="#">Services</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="#">Work</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="#">About</Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-4 text-xl">
                <Link href="#">Blog</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="#">Contact</Link>
              </li>
              <li className="mb-4 text-xl">
                <Link href="#">Privacy Policy</Link>
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
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">
                <Link href="#">Join Our Team</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="#">Cookies Settings</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="#">Codezela Group</Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">
                <Link href="#">Facebook</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="#">Instagram</Link>
              </li>
              <li className="mb-2 text-xl">
                <Link href="#">Flicker</Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">
                FLönnrotinkatu 18
                <br />
                00120 Helsinki
                <br />
                Yliopistonkatu 31
                <br />
                20100 Turku
              </li>
            </ul>
          </div>
        </div>
        <div className="p-8 text-center sm:text-center">
          <div className="text-6xl font-bold text-white mb-6">DDigital</div>
          <div className="text-sm text-white mb-6">
            Copyright &copy; {new Date().getFullYear()} | DDigital Designs
          </div>
        </div>
      </div>
    </footer>
  );
}
