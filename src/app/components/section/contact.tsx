import React, { useState, useEffect } from "react";
import Link from "next/link"

const Contact: React.FC = () => {

  return (
    <div id="contact" className="p-5 m-2 sm:m-5 lg:mt-20">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 ">
            <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
              Let&rsquo;s Talk
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-16 m-0 sm:m-5">
          <div className="lg:w-3/5 bg-black text-white rounded-xl m-0 sm:m-5 p-5 shadow-2xl">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <form action="#" className="space-y-12">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-3 text-lg sm:text-2xl font-bold text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-white border border-gray-300 text-black text-sm sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 sm:p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-3 text-lg sm:text-2xl font-bold text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-white border border-gray-300 text-black text-sm sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 sm:p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-3 text-lg sm:text-2xl font-bold text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-1.5 sm:p-2.5 w-full text-sm sm:text-md text-black bg-white rounded-lg border border-gray-300 shadow-md focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-3 text-lg sm:text-2xl font-bold text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-1.5 sm:p-2.5 w-full text-sm sm:text-md text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                    placeholder="Leave a comment..."
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
          <div className="lg:w-2/5 bg-black hover:bg-green text-white rounded-xl m-0 sm:m-5 p-5 shadow-2xl flex flex-col justify-center items-center h-full lg:block">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-full flex justify-center mb-24 mt-36">
                <h1 className="text-4xl lg:text-5xl font-semibold">
                  Have an Idea?
                </h1>
              </div>
              <div className="w-full flex justify-center mb-24">
                <Link
                  href="/add"
                  className="p-2 mx-4 text-4xl lg:text-7xl text-black font-semibold bg-white rounded-full flex items-center justify-center lg:float-right w-24 h-24 lg:w-48 lg:h-48 mt-6 lg:mt-0 float-right"
                >
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div className="w-full flex justify-center h-full mb-28">
                <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
                  Let&rsquo;s Talk
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;