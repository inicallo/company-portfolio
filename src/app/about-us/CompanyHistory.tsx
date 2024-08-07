import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CA Studio | History",
  description:
    "Founded in 2019, CA Studio began as a passion project in street photography, quickly evolving into a global leader in B2B photography services. From humble beginnings to working with multinational companies, CA Studio now boasts a network of over 10,000 photographers worldwide, offering diverse photography and video production services with consistent quality.",
};

const CompanyHistory = () => {
  return (
    <section className="relative flex justify-center pb-5 bg-slate-300">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="max-w-xl mx-auto">
            <div className="w-full px-4 m-5">
              <h3 className="font-semibold italic text-dark1 text-2xl mb-2 lg:text-4xl lg:pt-10 lg:mb-10">
                Our Story
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap m-5 ">
            <p className="font-medium text-justify text-base m-5 lg:text-xl">
              CAStudio was founded in 2019, inspired by a passion for street
              photography. Initially, the focus was on capturing images for
              friends&apos; businesses in food & beverage and product photography.
              As the quality and creativity of the work garnered attention, the
              demand for services grew. <br /> <br />By 2021, CAStudio had expanded its reach, receiving numerous inquiries and forming partnerships with multinational companies and enterprises. This marked a turning point, transforming the company from a small-scale operation into a global photography network.
              <br /><br /> Today, CAStudio offers a comprehensive range of services, including Food & Beverage photography, Health & Beauty photography, Headshots, Event Coverage, Product photography, Property photography, and TVC & Video production. With a network of over 10,000 partner photographers worldwide, CAStudio is committed to delivering
              consistent, high-quality visual content tailored to the unique
              needs of businesses across all industries. <br /><br /> Through a dedicated
              team of internal photo editors and a global network of
              professionals, CAStudio continues to evolve, ensuring that every
              project aligns with the distinct vision and brand of its clients.
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
