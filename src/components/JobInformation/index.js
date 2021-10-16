import './index.scss';

export function JobInformation(props) {

  let { info, toHide } = props,
  { companyLogo, estimatedSalary, jobTitle,
    location, skillsets, shortDesc, postedDate } = info || {};

  return ( 
    <div className="job-information" style={{ left: info ? '0' : '100%' }}>
      <div className="cover-hero"/>
      <section className="content">
        <figure>
          <img src={companyLogo} alt=""/>
          <p className="salary">{estimatedSalary}</p>
        </figure>
        <div className="main">
          <p className="job-title">{jobTitle}</p>
          <p className="location-date">{location} &bull; {postedDate}</p>
        </div>
        <div className="skills">
          { skillsets?.map((skill, i) => i < 5 && <p key={i}>{skill}</p>) }
        </div>
        <div className="overview">
          <p>Overview</p>
          <p className="desc">
            {shortDesc}
          </p>
        </div>
      </section>
      <i className="go-back uil uil-arrow-circle-left" onClick={toHide}/>
    </div>
  )

}