import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/services.module.css";

const services = [
  {
    title: "Poster Designing",
    imageUrl1:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80",
    imageUrl2:
      "https://img.freepik.com/free-vector/website-interface-development-planning-devops-team-flat-characters-working-ui-ux-content-design-computer-software-creation-web-development_335657-2645.jpg?w=740&t=st=1688927928~exp=1688928528~hmac=ec2bf68fb2551a3d937c04571991b7edc8ecccef4978fe5f186ea6424dabb6ea",
    link: "/service1",
    isHovered: false,
  },
  {
    title: "Cartoon Designing",
    imageUrl1:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80",
    imageUrl2:
      "https://img.freepik.com/free-vector/website-interface-development-planning-devops-team-flat-characters-working-ui-ux-content-design-computer-software-creation-web-development_335657-2645.jpg?w=740&t=st=1688927928~exp=1688928528~hmac=ec2bf68fb2551a3d937c04571991b7edc8ecccef4978fe5f186ea6424dabb6ea",
    link: "/service2",
    isHovered: false,
  },
  {
    title: "Web Designing",
    imageUrl1:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80",
    imageUrl2:
      "https://img.freepik.com/free-vector/website-interface-development-planning-devops-team-flat-characters-working-ui-ux-content-design-computer-software-creation-web-development_335657-2645.jpg?w=740&t=st=1688927928~exp=1688928528~hmac=ec2bf68fb2551a3d937c04571991b7edc8ecccef4978fe5f186ea6424dabb6ea",
    link: "/service3",
    isHovered: false,
  },
];

const Services: React.FC = () => {
  const [showInnerDiv, setShowInnerDiv] = useState(false);

  const handleMouseEnter = () => {
    setShowInnerDiv(true);
  };

  const handleMouseLeave = () => {
    setShowInnerDiv(false);
  };

  return (
    <div id="services" className="lg:p-5 m-2 sm:m-5 mt-24 md:mt-28 lg:mt-32">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 ">
          <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
            Our Services
          </h1>
        </div>
        <div className="lg:w-1/3">
          <div className=" text-lg lg:text-3xl text-black font-semibold flex items-center justify-center float-left lg:float-right">
            <Link href="/all-services">
              <i className="fas fa-arrow-right bg-black text-white rounded-2xl p-3 lg:p-4 mr-4"></i>{" "}
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
      {services.map((service, index) => (
        <div className="mt-20 text-white relative overflow-hidden" key={index}>
          <div
            className={`outer-service-div flex flex-col lg:flex-row bg-white rounded-xl p-8 w-full h-96 bg-no-repeat bg-cover bg-center`}
            style={{
              backgroundImage: `url("${service.imageUrl1}")`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="lg:w-2/3 flex flex-col items-center justify-center bg-black bg-opacity-50 p-10 rounded-xl w-fit">
              <span className="text-5xl lg:text-7xl font-semibold text-center text-white mb-8">
                {service.title}
              </span>
              <Link
                href={`${service.link}`}
                className="text-xl lg:text-2xl font-semibold flex items-center text-center text-white"
              >
                <i className="fas fa-arrow-right bg-white rounded-md text-black p-3 lg:p-4 mr-4"></i>{" "}
                Learn More
              </Link>
            </div>
          </div>

          <div
            className={`inner-service-div absolute top-0 left-0 flex flex-col lg:flex-row bg-black rounded-xl items-center content-center p-4 md:p-8 border-0 w-full h-96 ${
              !showInnerDiv ? styles.showInnerDiv : styles.hideInnerDiv
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="lg:w-1/3 justify-center items-center m-2 rounded-xl content-center flex">
              <Image
                className="rounded-xl"
                src={`${service.imageUrl2}`}
                alt="Image Description"
                width={300}
                height={300}
              />
            </div>
            <div className="lg:w-2/3 flex flex-col justify-center items-center">
              <span className="text-2xl lg:text-7xl font-semibold text-center text-white mb-5">
                {service.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
