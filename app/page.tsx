import Hero from "@/components/ui/hero/Hero";

import { prisma } from "@/lib/prisma";


const Home = async () => {
  const jobs = await prisma.jobPosting.findMany({});
  return (
    <>
      <Hero jobs={jobs}/>
    </>
  );
};

export default Home;
