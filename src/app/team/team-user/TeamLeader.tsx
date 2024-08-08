import Image from "next/image";
import React from "react";

const TeamLeader = () => {
  return (
    <section className="relative pb-24 bg-slate-100">
      <div className="relative flex justify-center pt-14 lg:pt-5">
        <div className="container">
          <div className="max-h-screen text-center mb-5">
            <div className="mx-auto text-center lg:mt-8 mb-3 w-full lg:w-1/2">
              <h4 className="font-bold bg-gradient-to-br text-dark1 text-4xl mb-3 lg:text-4xl pb-8">
                Meet Our<span className="pb-1 text-primary"> Team</span>
              </h4>
            </div>
            <div className="mt-9">
              <div className="flex flex-wrap justify-center gap-5 mx-6 ">
                <div className="card card-side bg-red-100 shadow-xl hover:shadow-lg hover:shadow-red-400">
                  <figure>
                    <Image
                      src="/team/Calvin.webp"
                      alt="Calvin"
                      width={500}
                      height={500}
                    />
                  </figure>
                  <div className="flex items-center">
                    <div className="card-body w-[150px] lg:w-[200px] h-[100px]">
                      <h2 className="card-title text-left -ml-10 font-semibold text-[18px] lg:text-2xl ">
                        Calvin Angelo
                      </h2>
                      <p className="text-left lg:text-base text-[12px] italic -mt-3 -ml-3">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card card-side bg-red-50 shadow-xl hover:shadow-lg hover:shadow-red-300">
                  <div className="flex items-center">
                    <div className="card-body w-[150px] lg:w-[200px] h-[100px]">
                      <h2 className="card-title text-right ml-4 lg:ml-5 -mr-10 font-semibold text-[18px] lg:text-2xl">
                        Lauren Lau
                      </h2>
                      <p className="text-right lg:text-base text-[12px] italic -mt-3 -mr-5 -ml-8">
                        Managing Director
                      </p>
                    </div>
                  </div>
                  <figure>
                    <Image
                      src="/team/CheeViola.webp"
                      alt="Lauren"
                      width={500}
                      height={500}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamLeader;
