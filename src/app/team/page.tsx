import React from "react";
import TeamUser from "./team-user/PG-page";
import TeamLeader from "./team-user/TeamLeader";

const Team = () => {
  return (
    <section className="relative pt-20 bg-slate-100">
      <div>
        <TeamLeader />
        <TeamUser />
      </div>
    </section>
  );
};

export default Team;
