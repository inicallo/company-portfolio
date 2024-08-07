import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "CA Studio | Company Overview",
  description: "Overview",
};

const ComOverview = () => {
  return (
    <section className="relative flex justify-center min-h-screen pt-28 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="font-bold text-dark1 text-3xl mb-1 sm:text-4xl lg:text-5xl">
              Company Overview
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap px-4">
          <div className="w-full self-center lg:pt-5 px-4 lg:w-1/2 mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 uppercase lg:text-xl">
              CAStudio
            </h4>
            <p className="font-medium text-justify m-5 text-md text-secondary md:text-lg">
              CAStudio is a global leader in B2B photography services, offering
              unparalleled convenience and expertise with our extensive network
              of professional photographers and videographers in over 500 cities
              worldwide. Specializing in commercial photography and video
              production, we deliver high-quality solutions for headshots, food,
              product, and real estate needs. Our commitment to consistent
              quality is underscored by our dedicated team of editors, who
              enhance each project to align perfectly with your brand, style,
              and personality. Whether you&apos;re an SME, SMB, or enterprise, CAStudio provides tailored, local expertise without the need for
              travel. Though we are a new company, our global reach and
              dedication to excellence position us as a trusted partner for all
              your visual content needs.
            </p>
            <div className="flex flex-col items-center justify-center h-full w-full pt-10 mb-5 lg:flex-row-reverse lg:mb-20">
              <Link href={"/about-us"}>
                <Button
                  type="button"
                  title="About Us"
                  variant="btn_dark_red"
                />
              </Link>
            </div>
          </div>

          <div className="w-full pb-1 lg:mb-1 mb-8 md:mb-1 px-4 lg:w-1/2">
            <div className="relative mt-0">
              <Image
                src="/images/network.jpg"
                alt="Photography1"
                width={800}
                height={800}
                className="w-full object-cover mt-0 rounded-lg"
              />
            </div>
            <div className="relative mt-0">
              <Image
                src="/images/photography2.webp"
                alt="Photography1"
                width={800}
                height={800}
                className="w-full object-cover mt-5 sm:mt-3 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComOverview;
