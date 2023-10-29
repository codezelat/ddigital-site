"use client";
import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");

  const handleSubmission = () => {
    const data = {
      name,
      email,
      subject,
      messageBody,
    };

    if (name === "" || name === null) {
      toast.error("Please enter your name");
      return;
    } else if (
      email === "" ||
      email === null ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      toast.error("Please enter a valid email");
      return;
    } else if (subject === "" || subject === null) {
      toast.error("Please enter the subject");
      return;
    } else if (messageBody === "" || messageBody === null) {
      toast.error("Please enter your message");
      return;
    }
    toast.promise(
      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to send your message");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setName("");
          setEmail("");
          setSubject("");
          setMessageBody("");
        })
        .catch((err) => {
          console.log(err);
        }),
      {
        loading: "Sending...",
        success: "Message sent successfully",
        error: "Failed to send your message",
      }
    );
  };

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
        <div className="lg:w-3/5 bg-[#222222] text-white rounded-xl m-0 sm:mr-12  p-5 shadow-2xl">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <div className="space-y-12">
              <div>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-5 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-5 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div>
                <input
                  type="phone"
                  id="phone"
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm sm:text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-5 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div> */}
              <div>
                <input
                  type="text"
                  id="subject"
                  className="block p-5 w-full text-sm sm:text-md text-black bg-white rounded-lg border border-gray-300 shadow-md focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="message"
                  rows={6}
                  className="block p-5 w-full text-sm sm:text-md text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:shadow-sm-light"
                  placeholder="Message"
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-8 px-5 text-sm font-semibold text-center text-black rounded-lg bg-white hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-white hover:border-b-2 hover:bg-gray-900 focus:ring-black block lg:hidden"
                onClick={handleSubmission}
              >
                Send message
              </button>
              <Toaster />
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 bg-black hover:bg-green text-white rounded-xl ml-0 sm:ml-12 p-5 shadow-2xl justify-center items-center align-middle hidden lg:block">
          <div className="w-full h-full flex flex-col justify-center items-center align-middle">
            <div className="w-full flex flex-col h-full justify-center items-center">
              <h2 className="text-4xl lg:text-5xl font-semibold">
                Have a Project?
              </h2>
              <div className="w-full flex justify-center my-16">
                <button
                  type="button"
                  onClick={handleSubmission}
                  className="text-4xl lg:text-7xl text-black font-semibold bg-white rounded-full flex items-center justify-center lg:float-right w-24 h-24 lg:w-48 lg:h-48 float-right"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-black"
                    width={100}
                    height={100}
                  />
                </button>
              </div>
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
