// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="items-center bg-black text-white">
      <div className="p-5">
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
              <li className="mb-4 text-xl">Services</li>
              <li className="mb-4 text-xl">Work</li>
              <li className="mb-4 text-xl">About</li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-4 text-xl">Blog</li>
              <li className="mb-4 text-xl">Contact</li>
              <li className="mb-4 text-xl">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">Contact Us</li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">Join Our Team</li>
              <li className="mb-2 text-xl">Cookies Settings</li>
              <li className="mb-2 text-xl">Cookies Settings</li>
              <li className="mb-2 text-xl">We Are A Part Of Codezela Group</li>
            </ul>
          </div>
          <div className="text-center sm:text-start">
            <ul className="list-none text-sm p-8 m-0">
              <li className="mb-2 text-xl">Facebook</li>
              <li className="mb-2 text-xl">Instagram</li>
              <li className="mb-2 text-xl">Flicker</li>
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
};

export default Footer;
