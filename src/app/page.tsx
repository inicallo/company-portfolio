import Hero from "./home/page";
import ComOverview from "./home/ComOverview";
import Services from "./services/page";
import PGGlobal from "./team/team-user/PG-page";

export default function Home() {
  return (
    <section>
      <Hero />
      <ComOverview />
      <Services />
      <PGGlobal />
    </section>
  );
}
