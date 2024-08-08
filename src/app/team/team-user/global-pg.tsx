// team-user/global-pg.tsx
import React from "react";
import { User } from "../../../../constants/User";
import Image from "next/image";

interface RandomUserProps {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isTransitioning: boolean;
}

const RandomUser: React.FC<RandomUserProps> = ({
  user,
  isLoading,
  error,
  isTransitioning,
}) => {
  if (isLoading) return null; // Hide loading state here

  return (
    <section className="m-3">
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        style={{ transitionDuration: "0.5s" }}
      >
        <div>
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] flex flex-wrap">
            {error ? (
              <p>{error}</p>
            ) : (
              <div className="card card-side w-full md:w-[500px]  bg-slate-500 shadow-lg hover:animate-pulse hover:shadow-primary">
                <figure className="m-3 lg:ml-5">
                  <Image
                    src={`${user?.picture.large}`}
                    alt={`${user?.name.first} ${user?.name.last}`}
                    className="w-[140px] h-[140px] rounded-2xl"
                    width={300}
                    height={300}
                  />
                </figure>
                <div className="card-body w-[190px] md:w-[250px] lg:w-[250px] h-[100px] -m-6 mt-3.5 lg:mt-4">
                  <h2 className="card-title text-slate-300 font-semibold text-[20px]">{`${user?.name.first} ${user?.name.last}`}</h2>
                  <p className="text-gray-200 text-[12px]">{`${user?.location.city}, ${user?.location.country}`}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomUser;
