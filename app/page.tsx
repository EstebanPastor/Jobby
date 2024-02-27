import Jobs from "@/components/shared/jobs/Jobs";
import Hero from "@/components/ui/hero/Hero";
import Sponsors from "@/components/ui/sponsors/Sponsors";

import { prisma } from "@/lib/prisma";


const Home = async () => {
  const jobs = await prisma.jobPosting.findMany({});
  return (
    <>
      <Hero jobs={jobs}/>
      <Jobs />
      <Sponsors />
    </>
  );
};

export default Home;
