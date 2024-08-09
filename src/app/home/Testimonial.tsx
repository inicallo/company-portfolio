import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export const metadata: Metadata = {
  title: "Client Testimonials | CA Studio Photography & Video Production",
  description:
    "Read client testimonials from around the world and see why businesses trust CA Studio for exceptional photography and video production services.",
};

const Testimonial = () => {
  return (
    <section className="relative flex justify-center min-h-screen pt-16 bg-slate-400 transition-transform">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-bold text-dark1 text-balance text-2xl mb-4 sm:text-3xl lg:text-4xl">
              What Clients Say About Us
            </h4>
          </div>
          {/* ---Testimoni start--- */}
          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                <h3 className="text-lg font-semibold text-gray-900">
                  Exceptional Food Photography for Our Brand
                </h3>
                <p className="my-4">
                &quot;CAStudio&apos;s food photography was stunning and on-brand. Professional and easy to work with—highly recommended!&quot;
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center">
                <Image
                  className="rounded-badge w-20 h-full"
                  src="/images/Sarah-Thompson.webp"
                  alt="profile picture"
                  width={500}
                  height={500}
                />
                <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                  <div>Sarah Thompson</div>
                  <div className="text-sm text-gray-500 ">
                    Marketing Director <br />
                    <span className="text-[11px]">British American Tobacco</span><br />
                    New York, USA
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  Seamless Corporate Headshots Across Locations
                </h3>
                <p className="my-4">
                &quot;CAStudio made it easy to arrange headshots across multiple
                  locations. The photos were top-notch and aligned perfectly
                  with our company image.&quot;
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center">
                <Image
                  className="rounded-badge w-20 h-full"
                  src="/images/James-Anderson.webp"
                  alt="profile picture"
                  width={500}
                  height={500}
                />
                <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                  <div>James Anderson</div>
                  <div className="text-sm text-gray-500">
                    HR Manager <br />
                    Unilever PLC.
                    <br />
                    London, UK
                  </div>
                </div>
              </figcaption>
            </figure>

            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  Enhanced Product Imagery for Online Success
                </h3>
                <p className="my-4">
                &quot;CAStudio&apos;s product photography greatly improved our online
                  presence. Their consistent quality across locations has been
                  invaluable.&quot;
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center">
                <Image
                  className="rounded-badge w-20 h-full"
                  src="/images/Michael-Lee.webp"
                  alt="profile picture"
                  width={500}
                  height={500}
                />
                <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                  <div>Michael Lee</div>
                  <div className="text-sm text-gray-500">
                    E-commerce Manager <br />
                    GrandLucky <br />
                    Sydney, Australia
                  </div>
                </div>
              </figcaption>
            </figure>

            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  Perfect Property Photos that Stand Out
                </h3>
                <p className="my-4">
                &quot;CAStudio captured our properties beautifully. Their local
                  photographers knew the areas well, adding authenticity to the
                  shots.&quot;
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center">
                <Image
                  className="rounded-badge w-20 h-full"
                  src="/images/Emily-Rodriguez.webp"
                  alt="profile picture"
                  width={500}
                  height={500}
                />
                <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                  <div>Emily Rodriguez</div>
                  <div className="text-sm text-gray-500">
                    General Manager <br />
                    Grand Orchadz Group. <br />
                    Jakarta, Indonesia
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          {/* ---Testimoni End--- */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
