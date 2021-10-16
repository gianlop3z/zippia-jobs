import { useEffect, useState } from 'react';
import { JobCard } from '../../components/JobCard';
import { JobInformation } from '../../components/JobInformation';
import { SearchInput } from '../../components/SearchInput';
import { get } from '../../services/jobs';
import './index.scss';

export function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [initialJobs, setInitialJobs] = useState([]);
  const [completeJob, setCompleteJob] = useState(null);
  const [byCompany, setByCompany] = useState(false);
  const [byWeek, setByWeek] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let resp = await get();
      if (resp) {
        setJobs(resp.jobs);
        setInitialJobs(resp.jobs);
      }
    };
    fetchData();
  }, [])

  const companyFilter = query => {
    if (query) {
      let filter = initialJobs.filter(job => {
        let lCasedQuery = query.toLowerCase(),
        lCasedCompany = job.companyName.toLowerCase();        
        if (lCasedCompany.includes(lCasedQuery)) {
          return job;
        }
      });
      setJobs(filter);
    } else { setJobs(initialJobs) };
  }

  const weekFilter = () => {
    setByCompany(false);
    setByWeek(!byWeek);
    if (!byWeek) {
      let filter = jobs.filter(job => {
        let days = job.postedDate.slice(0, -5);
        if (days <= 7) return job;        
      });
      setJobs(filter);
    } else { setJobs(initialJobs) };
  }

  return (
    <div className="jobs-page">
      <div className="hero-text">
        <h2>Zippia Jobs</h2>
        <p>Get the job you really want</p>
      </div>
      <div className="filters">
        <button className="by-company" onClick={() => setByCompany(!byCompany)}>
          { byCompany ? 'Cancel' : 'Search company' }
        </button>
        <button onClick={weekFilter}>
          { byWeek ? 'Show all' : 'Last week' }
        </button>
        { byCompany &&
          <SearchInput
            onChange={companyFilter}
            placeholder="e.g. Facebook"
          /> }
      </div>
      <section className="jobs-section">
        <div className="jobs-list">
          { jobs.map((job, i) => i < 10 && 
              <JobCard
                key={i}
                index={i}
                data={job}
                onClick={() => setCompleteJob(job)}
              /> )}
        </div>
        <JobInformation
          info={completeJob}
          toHide={() => setCompleteJob(null)}
        />
      </section>
    </div>
  )

}