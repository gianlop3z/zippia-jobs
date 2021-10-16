import './index.scss';

// The following component is the home job card.
// These props must be:
// {
//    data: this is the job information,
//    onClick: this function get executed to show the complete job information
// }

export function JobCard({ data, onClick }) {

  let { companyLogo, companyName, jobTitle, postedDate, shortDesc } = data;

  return (
    <div className="job" onClick={onClick}>
      <section className="content">
        <figure>
          <img src={companyLogo} alt=""/>
        </figure>
        <div className="information">
          <p className="title">{companyName}</p>
          <p className="company">{jobTitle}</p>
          <p className="date">{postedDate}</p>
        </div>
      </section>
      <p className="description">
        { shortDesc }
      </p>
    </div>
  )

}