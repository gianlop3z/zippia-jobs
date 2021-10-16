import { useEffect, useState } from 'react';
import { JobCard } from '../../components/JobCard';
import { JobInformation } from '../../components/JobInformation';
import { SearchInput } from '../../components/SearchInput';
import { get } from '../../services/jobs';
import './index.scss';

// This is the main page

export function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [initialJobs, setInitialJobs] = useState([]);
  const [completeJob, setCompleteJob] = useState(null);
  const [byCompany, setByCompany] = useState(false);
  const [byWeek, setByWeek] = useState(false);


  // Here's the data fetch through async way
  useEffect(() => {
    async function fetchData() {
      let resp = await get();
      if (resp) {
        let { jobs } = resp;
        setJobs(jobs);
        setInitialJobs(jobs);
        setCompleteJob(jobs[0]);
      }
    };
    fetchData();
  }, [])

  // search input filter handler
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

  // Here i filtered by postedDate(e.g. 19d ago).
  // So i use the splice function, from index 0 to -5.
  // To remove the string part.
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