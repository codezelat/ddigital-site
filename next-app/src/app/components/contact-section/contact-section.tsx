import Link from "next/link";

export default function ContactSection() {
  return (
    <div id="contact" className="lg:p-5 m-2 sm:m-5 mt-24 md:mt-28 lg:mt-32">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 ">
          <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
            Let&rsquo;s Talk
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-8">
        <div className="lg:w-3/5 bg-black text-white rounded-xl m-0 sm:mr-12  p-5 shadow-2xl">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form action="#" className="space-y-12">
              <div>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 sm:p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 sm:p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="phone"
                  id="phone"
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 sm:p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                  placeholder="Phone"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  className="block p-1.5 sm:p-2.5 w-full text-sm sm:text-md text-black bg-white rounded-lg border border-gray-300 shadow-md focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="message"
                  rows={6}
                  className="block p-1.5 sm:p-2.5 w-full text-sm sm:text-md text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                  placeholder="Comment"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-3 px-5 text-sm font-semibold text-center text-black rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-gray-900 focus:ring-black block lg:hidden"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-2/5 bg-black hover:bg-green text-white rounded-xl ml-0 sm:ml-12 p-5 shadow-2xl justify-center items-center lg:block align-middle block hidden lg:block">
          <div className="w-full h-full flex flex-col justify-center items-center align-middle">
            <div className="w-full flex justify-center mb-16 mt-24">
              <h2 className="text-4xl lg:text-5xl font-semibold">
                Have an Idea?
              </h2>
            </div>
            <div className="w-full flex justify-center mb-16">
              <Link
                href="/add"
                className="p-2 mx-4 text-4xl lg:text-7xl text-black font-semibold bg-white rounded-full flex items-center justify-center lg:float-right w-24 h-24 lg:w-48 lg:h-48 mt-6 lg:mt-0 float-right"
              >
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="w-full flex justify-center h-full ">
              <h2 className="text-4xl lg:text-5xl font-semibold">
                Let&rsquo;s Talk
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
