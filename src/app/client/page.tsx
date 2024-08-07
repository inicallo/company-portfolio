import Link from "next/link";
import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <section>
      <div className="relative flex justify-center pt-10 bg-slate-400 transition-transform">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h4 className="font-bold text-dark1 text-balance text-2xl mb-4 sm:text-3xl lg:text-4xl">
                Our Clients
              </h4>
            </div>
            <div className="w-full px-4 items-center justify-center flex-wrap flex mb-32">
              <div className="flex flex-wrap items-center justify-center">
                <Link
                  href="http://rajawali.orchardzhotel.com/"
                  target="_blank"
                  className="max-w-[250px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 sm:mt-1"
                >
                  <Image
                    src="/clients/grand-orchardz.png"
                    alt="Grand Orchardz"
                    width={500}
                    height={500}
                  />
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center">
                <Link
                  href="https://www.bat.com/"
                  target="_blank"
                  className="max-w-[250px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 sm:mt-1"
                >
                  <Image
                    src="/clients/bat.svg"
                    alt="British American Tobacco"
                    width={500}
                    height={500}
                  />
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center">
                <Link
                  href="https://www.grandlucky.co.id/"
                  target="_blank"
                  className="max-w-[250px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 sm:mt-1"
                >
                  <Image 
                  src="/clients/grandLucky.png" 
                  alt="Grand Lucky" 
                  width={500}
                  height={500}
                  />
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center">
                <Link
                  href="https://www.unilever.com/"
                  target="_blank"
                  className="max-w-[250px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 sm:mt-1"
                >
                  <Image 
                  src="/clients/unilever.png" 
                  alt="Unilever" 
                  width={500}
                  height={500}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
