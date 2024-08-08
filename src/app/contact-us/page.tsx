import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CA Studio | Contact Us",
  description: "Get in touch with CA Studio for inquiries, bookings, or support. We're here to assist you with all your photography needs.",
};


const ContactUs = () => {
  return (
    <section className="relative pb-40 bg-slate-100">
      <div className="relative flex justify-center pt-20 lg:pt-9">
        <div className="container">
          <div className="w-full px-4 lg:m-5 lg:mb-10 lg:mt-28">
            <div className="max-w-full mx-auto text-center mb-3 w-full lg:w-1/2">
              <h4 className="font-bold bg-gradient-to-br mt-10 text-dark1 text-2xl mb-3 max-w-xl md:font-bold lg:text-4xl">Contact Us
              </h4>
            </div>
          </div>
          {/* --team start-- */}
          <form className="m-4">
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base font-bold text-dark1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                required
                className="w-full bg-slate-200 text-dark1 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-3"
              />
              <label htmlFor="Phone" className="text-base font-bold text-dark1">
                Phone
              </label>
              <input
                type="tel"
                id="Phone"
                placeholder="Phone Number"
                required
                className="w-full bg-slate-200 text-dark1 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-3"
              />
              <label htmlFor="email" className="text-base font-bold text-dark1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                required
                className="w-full bg-slate-200 text-dark1 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>

            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base font-bold text-dark1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell us how we can help you with your photography or upcoming project needs..."
                className="w-full bg-slate-200 text-dark1 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="text-base font-semibold text-white btn_dark_red py-3 px-8 rounded-full w-full hover:shadow-lg transition duration-500">
                Sent
              </button>
            </div>
          </div>
        </form>
          {/* --team end-- */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
