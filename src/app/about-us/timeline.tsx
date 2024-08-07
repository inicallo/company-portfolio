import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "CA Studio | Timeline",
    description:
      "Explore the journey of CA Studio from its founding in 2019 to becoming a global leader in B2B photography services. Our timeline highlights key milestones, including major achievements, service expansions, and the growth of our global network. Discover how we evolved to offer diverse photography and video solutions and continue to set industry standards with our commitment to quality."
};

const Timeline = () => {
  return (
    <section className="relative flex justify-center pb-5 bg-slate-300">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="max-w-xl mx-auto">
            <div className="px-4">
              <div>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                  <li>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic">2019</time>
                      <div className="text-lg font-black">The Beginning</div>
                      Founding of CAStudio: Born out of a passion for street
                      photography, CAStudio was founded in 2019. The initial
                      focus was on providing photography services for friends&apos;
                      businesses, including food & beverage and product
                      photography.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end mb-10">
                      <time className="font-mono italic">2020</time>
                      <div className="text-lg font-black">
                        Building Momentum
                      </div>
                      <span className="font-bold">First Major Clients: </span>As
                      word spread about the quality and creativity of the work,
                      CAStudio began attracting more clients and expanded its
                      services beyond street photography.
                      <br />
                      <span className="font-bold">Expanding Services: </span>The
                      company started offering additional services in Food &
                      Beverage, Health & Beauty, and Product photography. forms
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic">2021</time>
                      <div className="text-lg font-black">A Turning Point</div>
                      <span className="font-bold">Global Expansion: </span>
                      CAStudio experienced a surge in demand, receiving numerous
                      inquiries and securing partnerships with multinational
                      companies and enterprises. <br />
                      <span className="font-bold">
                        Service Diversification:
                      </span>
                      The company expanded its offerings to include Headshots,
                      Event Coverage, Property photography, and TVC & Video
                      production. <br />
                      <span className="font-bold">Global Network Growth: </span>
                      With increasing demand, CAStudio began building a vast
                      network of partner photographers, setting the foundation
                      for global operations.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end mb-10">
                      <time className="font-mono italic">2022</time>
                      <div className="text-lg font-black">
                        Strengthening the Network
                      </div>
                      <span className="font-bold">
                        Over 10,000 Photographers:{" "}
                      </span>
                      CAStudio&apos;s network grew to include over 10,000 partner
                      photographers worldwide, enabling the company to offer
                      services in more than 500 cities globally. <br />
                      <span className="font-bold">Consistent Quality: </span>
                      Emphasis on delivering consistent, high-quality content
                      with the support of an internal team of skilled photo
                      editors.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic">2024 and Beyond</time>
                      <div className="text-lg font-black">Future Vision</div>
                      <span className="font-bold">Ongoing Growth: </span>
                      CAStudio is committed to further expanding its network and
                      service offerings, with a focus on innovation and
                      maintaining the highest standards of quality. <br />
                      <span className="font-bold">
                        Client-Centered Approach:
                      </span>
                      The company continues to evolve, ensuring that every
                      project reflects the unique vision and brand of its
                      clients.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
