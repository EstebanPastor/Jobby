"use client";

import { useState } from "react";

import useJobStore from "@/store/useJobStore";
import JobsCard from "../jobs-cards/JobsCard";

import Button from "@/components/ui/button/Button";

const Jobs = () => {
  const { filteredJobs } = useJobStore();
  const [visibleJobs, setVisibleJobs] = useState(6);
  const jobsIncrement = 4;

  const handleShowMore = () => {
    setVisibleJobs((prev) => prev + jobsIncrement);
  };

  return (
    <div id="jobs" className="py-10 w-full">
      <div className="w-full text-center mb-10 text-2xl font-extrabold uppercase text-purple-600">
        <h2>Job listings</h2>
      </div>
      {filteredJobs.length < 1 ? (
        <div className="w-full text-center">
          <h1 className="text-2xl">No Jobs Found</h1>
          <span className="text-sm">Check back later</span>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-[90%] mx-auto max-w-[1400px]">
          {filteredJobs.slice(0, visibleJobs).map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
          {filteredJobs.length > visibleJobs && (
            <div className="text-center mt-10 text-sm">
              <Button onClick={handleShowMore}>Show More</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Jobs;
