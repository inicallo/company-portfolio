import React from "react";
import TeamUser from "./team-user/PG-page";
import TeamLeader from "./team-user/TeamLeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CA Studio | Our Team",
  description:
    "Meet the creative minds behind CAStudio. Learn more about our talented team of photographers, editors, and professionals dedicated to delivering high-quality photography services.",
};

const Team = () => {
  return (
    <section className="relative mt-20 bg-slate-100">
      <div>
        <TeamLeader />
        <TeamUser />
      </div>
    </section>
  );
};

export default Team;
