import './index.scss';

export function JobCard({ data }) {

  let { companyLogo, companyName, jobTitle, postedDate, shortDesc } = data;

  return (
    <div className="job">
      <section className="content">
        <figure>
          <img src={companyLogo} alt=""/>
        </figure>
        <div className="information">
          <p className="title">{ companyName }</p>
          <p className="company">{ jobTitle }</p>
          <p className="date">{ postedDate }</p>
        </div>
      </section>
      <p className="description">
        { shortDesc }
      </p>
    </div>
  )

}