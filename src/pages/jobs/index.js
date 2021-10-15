import { useEffect, useState } from 'react';
import { JobCard } from '../../components/JobCard';
import { get } from '../../services/jobs';
import './index.scss';

export function Jobs() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let resp = await get();
      if (resp) setJobs(resp.jobs);
    };
    fetchData();
  }, []);

  return (
    <div className="jobs-page">
      <div className="hero-text">
        <h2>Zippia Jobs</h2>
        <p>Get the job you really want</p>
      </div>
      <div className="filters">
        <button className="by-company">Search company</button>
        <button>Last week</button>
      </div>
      <div className="jobs-list">
        { jobs.map((job, i) => i < 10 && <JobCard data={job} key={i}/>) }
      </div>
    </div>
  )

}