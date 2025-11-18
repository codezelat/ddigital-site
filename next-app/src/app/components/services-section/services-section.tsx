"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./services-section.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const servicesData = [
  {
    title: "Branding",
    imageUrl1: "/img/services-hover/1.jpg",
    imageUrl2: "/img/services/1.svg",
    blurUrl:
      "data:image/jpeg;base64,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",
    link: "https://bit.ly/branding-with-ddigital",
    isHovered: false,
  },
  {
    title: "Graphic Design",
    imageUrl1: "/img/services-hover/2.jpg",
    imageUrl2: "/img/services/2.svg",
    blurUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACMAPUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDEop2KMVkajaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdiigBcUYp2KMUxDcUYp2KMUANxRinYoxQA3FGKdijFADcUYp2KMUANxRinYoxQA3FGKdijFADcUYp2KMUANxRinYoxQA3FGKdijFADcUYp2KMUANxRinYoxQA3FGKdijFADcUYp2KMUANxRinYoxQA3FFOxRQAtFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUUUhhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBKKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q==",
    link: "https://bit.ly/graphic-design-with-ddigital",
    isHovered: false,
  },
  {
    title: "Packaging Design",
    imageUrl1: "/img/services-hover/3.jpg",
    imageUrl2: "/img/services/3.svg",
    blurUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABiAJMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC/RTc0ZqiR1FNzRmgB1FNzRmgB1FNzRmgB1FNzRmgB1FNzRmgB1FNzRmgB1FNzRmgB1FNzRmgB1FNzRQA3NGabRQMdmjNNooAdmjNNooAdmjNNooAdmjNNooAdmjNNooAdmjNNooAdmjNNooAdmjNNooAdmim0UAOxRipNtG2kMjxRipNtG2gCPFGKk20baAI8UYqTbRtoAjxRipNtG2gCPFGKk20baAI8UYqTbRtoAjxRipNtG2gCPFGKk20baAI8UVJtooAfijFLmjNAhMUYpc0ZoATFGKXNGaAExRilzRmgBMUYpc0ZoATFGKXNGaAExRilzRmgBMUYpc0ZoATFGKXNGaAExRS5ooAZuo3VDvo30DJt1G6od9G+gCbdRuqHfRvoAm3Ubqh30b6AJt1G6od9G+gCbdRuqHfRvoAm3Ubqh30b6AJt1G6od9G+gCbdRuqHfRvoAm3UVDvooAr76N9V91G6gZY30b6r7qN1AFjfRvqvuo3UAWN9G+q+6jdQBY30b6r7qN1AFjfRvqvuo3UAWN9G+q+6jdQBY30b6r7qN1AFjfRvqvuo3UAWN9FV91FADaKKKYwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==",
    link: "https://bit.ly/packaging-design-with-ddigital",
    isHovered: false,
  },
  {
    title: "Creative Content",
    imageUrl1: "/img/services-hover/4.jpg",
    imageUrl2: "/img/services/4.svg",
    blurUrl:
      "data:image/jpeg;base64,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",
    link: "https://bit.ly/creative-content-with-ddigital",
    isHovered: false,
  },
  {
    title: "Photography and Videography",
    imageUrl1: "/img/services-hover/5.jpg",
    imageUrl2: "/img/services/5.svg",
    blurUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACMAPUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmKKfijFQaDKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfiigB+KMU/FGKYhmKMU/FGKAGYoxT8UYoAZijFPxRigBmKMU/FGKAGYoxT8UYoAZijFPxRigBmKMU/FGKAGYoxT8UYoAZijFPxRigBmKMU/FGKAGYoxT8UYoAZijFPxRigBmKMU/FGKAGYoxT8UYoAZiin4ooAWilooEJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aM03NGaAHZozTc0ZoAdmim5ooAbmjNJRQMXNGaSigBc0ZpKKAFzRmkooAXNGaSigBc0ZpKKAFzRmkooAXNGaSigBc0ZpKKAFzRmkooAXNGaSigBc0ZpKKAFzRmkooAXNGaSigBc0ZpKKAFzRSUUAJRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooASikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRQAlFJRSGLRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUAf//Z",
    link: "https://bit.ly/photography-and-videography-with-ddigital",
    isHovered: false,
  },
];

export default function ServicesSection() {
  const [showInnerDiv, setShowInnerDiv] = useState(null as any);

  const handleMouseEnter = (index: number) => {
    setShowInnerDiv(index);
  };

  const handleMouseLeave = () => {
    setShowInnerDiv(null);
  };

  return (
    <div id="services" className="lg:p-5 m-2 sm:mx-5 mt-24 lg:mt-32">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 ">
          <h1 className="text-4xl lg:text-5xl mb-4 font-semibold">
            Our Services
          </h1>
        </div>
        <div className="lg:w-1/3">
          <div className=" text-lg lg:text-3xl text-black font-semibold flex items-center justify-center float-left lg:float-right">
            {/* <Link href="/all-services">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-black rounded-2xl text-white p-3 lg:p-4 mr-4"
                height={24}
                width={24}
              />
              Explore All Services
            </Link> */}
          </div>
        </div>
      </div>
      {servicesData.map((service, index) => (
        <div
          className="mt-20 text-white relative overflow-hidden"
          key={index + 1}
        >
          <div
            className={`outer-service-div relative flex flex-col justify-end lg:justify-start items-center lg:flex-row bg-white rounded-xl w-full h-96`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <Image
              className="rounded-xl object-cover"
              src={`${service.imageUrl1}`}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
              placeholder="blur"
              blurDataURL={service.blurUrl}
            />
            <div className="z-20 h-fit md:w-2/3 flex flex-col items-center justify-center bg-black bg-opacity-50 px-10 py-16 rounded-xl w-fit">
              <span className="text-3xl md:text-4xl lg:text-7xl font-semibold text-center text-white mb-8">
                {service.title}
              </span>
              <Link
                href={`${service.link}`}
                className="text-md lg:text-2xl font-semibold flex items-center text-center text-white"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="bg-white rounded-md text-black p-3 lg:p-4 mr-4"
                  height={18}
                  width={18}
                />
                Learn More
              </Link>
            </div>
          </div>

          <div
            className={`z-30 inner-service-div absolute top-0 left-0 flex flex-col lg:flex-row bg-[#222222] rounded-xl items-center justify-center content-center p-4 md:p-8 border-0 w-full h-96 ${
              showInnerDiv === index ? styles.hideInnerDiv : styles.showInnerDiv
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div className="lg:w-1/3 justify-center items-center m-2 rounded-xl content-center flex p-4">
              <Image
                className="rounded-xl w-80 h-56 lg:h-72 object-contain"
                src={`${service.imageUrl2}`}
                alt={service.title}
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAJfAt8DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDjKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopaKAEpaKKACiiigAooooAKKKKACiiigAopaKYCUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUUUAFFFFABRRRSAKSlooASilpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKWigBKKWimAlFLRQAUUUUAFFFFABRRRQAlFFLSASilooAKKKKACiiigAooooAKKKKACilooASloopgFFFFABRRS0AJRS0UAJRS0UAFFFFABRRRQAUUUUAFFFFMAooopAFFFFABSUtFACUUtFACUUtFACUUUUAFFFFACUUtFACUUUUAFFFFIApKWigBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopaACiiimAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUgCiiigAooooAKKKKACiiigApaKKYBRRRQAUUUtABRRRQAUUUUAFFFLTASilooAKKKKACiiigAooooAKKKKACiiigAooooAKSlooASilooASiiigAooopAJRS0UAJRRRQAUlLRQAlFFFABRRRSASilpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKYBRRRQAUUUUAFFFFABRS0UAFFFFABRRRQAUUUUwEoooqQCiiigAooooAKKKKAClpKWgAooopgFFFLQAUUUUAFFFFABRRS0wCiiigAooooAKKWigBKWiigAooooAKKKKACiiigBKKWigBKKWkoAKKKKACkpaKAEooooAKKKKQBSUtJQAUUUUAJRS0lABRRRQAUlLSUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKWmAUUUUAFFFFABRRRQAUtJS0AFFFFABRRRTAKKKKACiiigBKKKKkAooooAKKKKACiiigApaSlpgFFFFABS0lLQAUUUUAFFFFAC0UUUAFFFFMApaSigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKAEooooAKKKKACkpaSgAooopAFJS0lABRRRQAUlLSUAFFFFABSUtJSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaYBRRRQAUUUUAFFFFABS0lLQAUUUUAFFFFABRRRQAUUUUwEoooqQCiiigAooooAKKKKAClpKKAFooopgFLSUUALRRRQAUUUUAFLSUUALRRRQAUUUUAFLSUUALRSUUwFooooAKKKKACiikoAWikooAWkoooAKKKKQBRRSUAFFFFABRRRQAUlLSUAFFFFABSUUUAFFFFABSUtJSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFooopgFFFFABRRRQAUtJRQAtFFFABRRRQAUUUUAFFFFACUUUUgCiiigAooooAKKKKACiiigBaKSigBaKKKYBRRRQAtFJRQAtFFFABRRRQAtFJRQAtFJS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUlFAC0lFFABRRRQAUUUUAFFJRQAUUUUAFJRRQAUUUUAFFFFIApKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKSloAKKKKACiiimAUUUUAFFFFAC0UlFAC0UlFAC0UlFABRSUUgFopKWgAooooAKKKKACiiigAooooAKWkooAWikooAWiiimAUUUUAFLSUUALRSUUALRSUUALRSUUALRSUUALRRRQAUUUlAC0UlFAC0UlFAC0UlFAC0lFFABRRSUALRSUUAFFFFABRRRSAKKKKACiikoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWikpaACiiigAooooAKKKKACiiigAooooAKKKKAEooooAKKKKAClpKKAFopKKAFopKWgAooooAKKKKACiiigAooooAKKKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFpKKKACiiigAooooAKKKKACiiigAopKKAFpKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopKKAFopKKAFopKWgAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWkoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopaAEopaKAEopaKAEpaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlooASilooASilooASilpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiloASloooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWigBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopaAEopaKAEpaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopKAFpKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikooAWikooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKSgBaKSigBaKSigBaSiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKSigBaSiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopKKAFopKKAFopKKAFopKKAFopKWgAooooAKKKKACkpaKAEopaKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWikpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlooASilooASilooASilooASilpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlooASilooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopaAEopaKAEopaKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKSigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWiigAooooAKKKKACiiigBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSigBaKSigBaKSigBaKSigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigBKKWigBKKWigBKKWigBKKWigBKKWigBKKWigBKKWigBKKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASilooASilooASilpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooopgFJS0UgEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q=="
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
}
