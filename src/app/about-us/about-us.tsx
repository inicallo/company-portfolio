import React from "react";
import GetConnected from "./GetConnected";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CA Studio | About Us",
  description:
    "Discover CA Studio, a global leader in B2B photography services, offering tailored visual content through our network of professional photographers and videographers in over 500 cities worldwide.",
};

const AboutUs = () => {
  return (
    <section>
      <div className="relative flex justify-center pt-28 lg:pt-10 bg-slate-100">
        <div className="container">
          <div className="flex flex-wrap m-5 lg:mb-24 lg:mt-24">
            <div className="mx-auto text-center mb-3 w-full lg:w-1/2">
              <h4 className="font-bold bg-gradient-to-br text-dark1 text-2xl mb-3 max-w-xl lg:text-4xl">
                Capture Every Moment
                <br />
                with
                <span className="pb-5 text-primary">
                  {" "}
                  Professional Precision
                </span>
              </h4>
            </div>
            <div className="flex flex-wrap mx-auto">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src="/images/photographers.webp"
                    alt="Photography1"
                    width={800}
                    height={800}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title lg:pb-8 lg:mt-3">
                    Capture Every Moment with{" "}
                    <span className="text-primary font-bold">CAStudio</span>
                  </h2>
                  <p>
                    In today&apos;s fast-paced business world, every moment counts.{" "}
                    <br />
                    CAStudio offers expert B2B photography for Food & Beverages,
                    Health & Beauty, Property, Events, Products, Headshots, and
                    Videography & TVC.
                    <br />
                    We provide quick, seamless solutions to showcase your brand
                    with exceptional professionalism and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
