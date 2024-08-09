"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Update import to next/navigation

const LoginID: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setIsValid(false);
      return;
    }

    // Proceed with redirect
    router.push("/");
  };

  return (
    <section className="relative pb-24 bg-slate-100">
      <div className="relative flex justify-center pt-10 lg:pt-9">
        <div className="container">
          <div className="w-full px-4 lg:m-5 lg:mb-10 lg:mt-12">
            <div className="max-w-full mx-auto text-center mb-3 lg:pr-9 w-full lg:w-1/2">
              <h4 className="font-bold bg-gradient-to-br mt-10 text-dark1 text-2xl mb-8 md:font-bold lg:text-2xl">
                Log in using your account
              </h4>
            </div>
          </div>
          {/* --start-- */}
          <div className="m-6">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!isValid && !email && (
                  <p className="text-red-500 text-sm">Email is required</p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!isValid && !password && (
                  <p className="text-red-500 text-sm">Password is required</p>
                )}
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-primary hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Log In
              </button>
            </form>
          </div>
          {/* --end-- */}
          <div className="mx-auto text-center lg:pr-9 w-full lg:w-1/2">
            <h5 className="font-normal bg-gradient-to-br mt-6 text-gray-600 text-sm lg:text-sm">
              Don&apos;t have an account ?{" "}
              <Link href={"/users/register"}>
                <span className="text-primary hover:link">Register Here</span>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginID;
