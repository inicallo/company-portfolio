// pages/index.tsx
"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../../../../constants/User";
import RandomUser from "./global-pg";

const PGGlobal: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsTransitioning(true);
      const response = await axios.get("https://randomuser.me/api/?results=6");
      const data = response.data.results;
      setUsers(data);
      setError(null);
      setTimeout(() => setIsTransitioning(false), 300); // End transition after 300ms
    } catch (err) {
      setError("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();

    const intervalId = setInterval(() => {
      fetchUsers();
    }, 10000); // Fetch new profile info every 10 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="relative bg-slate-100">
      <div className="relative flex justify-center pt-5 pb-6 lg:pt-7 ">
        <div className="container">
          <div className="max-h-screen text-center mb-1">
            <div className="mx-auto text-center lg:mt-5 mb-3 w-full lg:w-1/2">
              <h4 className="font-bold bg-gradient-to-br text-dark1 text-4xl mb-3 lg:text-4xl pb-8">
                Meet Our Global <br />
                <span className="pb-1 text-primary">Photographers</span>
              </h4>
            </div>
          </div>
          <div className="">
            <div id="User" className="relative w-full" data-carousel="slide">
              {loading ? (
                <div className="flex justify-center animate-pulse m-28 h-28">
                  <p>Looking for your Photographers...</p>
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-center gap-4 mb-28">
                  {users.map((user, index) => (
                    <div key={index} className="flex-grow max-w-[350px] m-5">
                      <RandomUser
                        user={user}
                        isLoading={loading}
                        error={error}
                        isTransitioning={isTransitioning}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PGGlobal;
