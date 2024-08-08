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
              Photography <span className="text-black">for <br />
              All Businesses</span>
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
            <div>
              <div>
                <div className="card bg-base-100 w-64 shadow-xl">
                  <figure>
                    <Image
                      src="/images/food_b.webp"
                      alt="Food & Beverages"
                      width={800}
                      height={533}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Food & Beverages</h2>
                    <p className="pb-1">Elevating Your Gastronomic Creations</p>
                    <div className="card-actions justify-center">
                      <button className="btn btn_dark_red">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="card bg-base-100 w-64 shadow-xl">
                  <figure>
                    <Image
                      src="/images/Card/Property.webp"
                      alt="Property"
                      width={800}
                      height={533}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Property</h2>
                    <p className="pb-1">Showcasing Properties to Perfection</p>
                    <div className="card-actions justify-center">
                      <button className="btn btn_dark_red">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="card bg-base-100 w-64 shadow-xl">
                  <figure>
                    <Image
                      src="/images/Card/Headshots.webp"
                      alt="Headshots"
                      width={800}
                      height={533}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Headshots</h2>
                    <p className="pb-1">
                      Professional Headshots for Every Need
                    </p>
                    <div className="card-actions justify-center">
                      <button className="btn btn_dark_red">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="card bg-base-100 w-64 shadow-xl">
                  <figure>
                    <Image
                      src="/images/Card/Events.webp"
                      alt="Events"
                      width={800}
                      height={533}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Events</h2>
                    <p className="pb-1">
                      Preserving Moments, Creating Memories
                    </p>
                    <div className="card-actions justify-center">
                      <button className="btn btn_dark_red">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="card bg-base-100 w-64 shadow-xl">
                  <figure>
                    <Image
                      src="/images/Card/Beauty.webp"
                      alt="Beauty"
                      width={800}
                      height={533}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Health & Beauty</h2>
                    <p className="pb-1">
                      Highlighting Natural Beauty and Wellness
                    </p>
                    <div className="card-actions justify-center">
                      <button className="btn btn_dark_red">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="card bg-base-100 w-64 shadow-xl">
                  <figure>
                    <Image
                      src="/images/Card/Products.webp"
                      alt="Products"
                      width={800}
                      height={533}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Products</h2>
                    <p className="pb-1">Capturing the Essence of Your Brand</p>
                    <div className="card-actions justify-center">
                      <button className="btn btn_dark_red hover:opacity-65 hover:text-black">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="card bg-base-100 w-64 shadow-xl">
                  <figure>
                    <Image
                      src="/images/Card/TVC.webp"
                      alt="TVC"
                      width={800}
                      height={533}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Videography & TVC</h2>
                    <p className="pb-1">Capturing Stories with Precision</p>
                    <div className="card-actions justify-center">
                      <button className="btn btn_dark_red">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="card bg-base-100 w-64 shadow-xl">
                  <figure>
                    <Image
                      src="/images/Card/Other-Services-Bubble.webp"
                      alt="TVC"
                      width={800}
                      height={533}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Browse All</h2>
                    <p className="pb-7">Explore All Our Services</p>
                    <div className="card-actions justify-center">
                      <button className="btn btn_dark_red collapse-arrow">
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
