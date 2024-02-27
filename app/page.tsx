import Jobs from "@/components/shared/jobs/Jobs";
import About from "@/components/ui/about/About";
import Contact from "@/components/ui/contact/Contact";
import Footer from "@/components/ui/footer/Footer";
import Hero from "@/components/ui/hero/Hero";
import Sponsors from "@/components/ui/sponsors/Sponsors";

import { prisma } from "@/lib/prisma";

const Home = async () => {
  const jobs = await prisma.jobPosting.findMany({});
  return (
    <>
      <Hero jobs={jobs} />
      <Jobs />
      <Sponsors />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
