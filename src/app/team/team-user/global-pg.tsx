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

const RandomUser: React.FC<RandomUserProps> = ({ user, isLoading, error, isTransitioning }) => {
  if (isLoading) return null; // Hide loading state here

  return (
    <div
      className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      style={{ transitionDuration: '0.5s' }}
    >
      <div className="w-full px-4 gap-3 flex flex-wrap items-center justify-center mb-5">
        {error ? (
          <p>{error}</p>
        ) : (
          <div className="card card-side hover:animate-pulse hover:shadow-primary bg-slate-500 shadow-xl">
            <figure>
              <Image
                src={`${user?.picture.large}`}
                alt={`${user?.name.first} ${user?.name.last}`}
                className="ml-3.5 w-36 h-36 rounded-xl"
                width={250}
                height={250}
              />
            </figure>
            <div className="card-body w-[230px] h-[160px]">
              <h2 className="card-title text-slate-300 font-semibold mt-2">{`${user?.name.first} ${user?.name.last}`}</h2>
              <p className="text-gray-200">{`${user?.location.city}, ${user?.location.country}`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomUser;
