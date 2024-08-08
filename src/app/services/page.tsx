import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import Testimonial from "../home/Testimonial";
import Clients from "../client/page";

export const metadata: Metadata = {
  title: "CA Studio | Our Services",
  description:
    "Explore the diverse range of professional photography and video production services offered by CA Studio. From commercial photography to tailored editing solutions, we provide high-quality, consistent results to businesses across all industries, worldwide.",
};

const Services = () => {
  return (
    <section>
      <div className="relative flex justify-center min-h-screen pt-32 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-bold text-primary text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Photography{" "}
                <span className="text-black">
                  for <br />
                  All Businesses
                </span>
              </h4>
              <p className="font-medium italic text-md text-secondary md:text-lg">
                Explore the diverse range of professional photography and video
              </p>
              <div
                id="custom-controls-gallery"
                className="relative w-full"
                data-carousel="slide"
              ></div>
            </div>

            <div className="w-full px-4 gap-3 flex flex-wrap items-center justify-center mb-10">
              {[
                {
                  src: "/images/Card/FnB1.webp",
                  alt: "Food & Beverages",
                  title: "Food & Beverages",
                  description: "Elevating Your Gastronomic Creations",
                },
                {
                  src: "/images/Card/Property1.webp",
                  alt: "Property",
                  title: "Property",
                  description: "Showcasing Properties to Perfection",
                },
                {
                  src: "/images/Card/Headshots1.webp",
                  alt: "Headshots",
                  title: "Headshots",
                  description: "Professional Headshots for Every Need",
                },
                {
                  src: "/images/Card/Events1.webp",
                  alt: "Events",
                  title: "Events",
                  description: "Preserving Moments, Creating Memories",
                },
                {
                  src: "/images/Card/Beauty1.webp",
                  alt: "Health & Beauty",
                  title: "Health & Beauty",
                  description: "Highlighting Natural Beauty and Wellness",
                },
                {
                  src: "/images/Card/Products1.webp",
                  alt: "Products",
                  title: "Products",
                  description: "Capturing the Essence of Your Brand",
                },
                {
                  src: "/images/Card/TVC1.webp",
                  alt: "Videography & TVC",
                  title: "Videography & TVC",
                  description: "Capturing Stories with Precision",
                },
                {
                  src: "/images/Card/OSB.webp",
                  alt: "Browse All",
                  title: "Browse All",
                  description: "Explore All Our Services",
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="card bg-base-100 w-64 shadow-xl">
                    <figure>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={800}
                        height={533}
                        priority={index < 2} // Prioritize the first two images
                        sizes="(max-width: 768px) 100vw, 50vw" // Ensure appropriate sizing for responsiveness
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.title}</h2>
                      <p className="pb-1">{item.description}</p>
                      <div className="card-actions justify-center">
                        <button className="btn btn_dark_red">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <Clients />
    </section>
  );
};

export default Services;
