import './index.scss';

export function JobInformation(props) {

  let { info = {}, toHide } = props;

  return ( 
    <div className="job-information" style={{ left: info ? '0' : '100%' }}>
      <div className="cover-hero"/>
      <section className="content">
        <figure>
          <img src="https://logo.clearbit.com/xerox.com" alt=""/>
          <p className="salary">$79k-115k yearly est.</p>
        </figure>
        <div className="main">
          <p className="job-title">Veterans Preferred - Business Analyst</p>
          <p className="location-date">Palo Alto, CA &bull; 14 days ago</p>
        </div>
        <div className="skills">
          <p>Ethernet</p>
          <p>Business Status</p>
          <p>Financial Models</p>
          <p>Product Data</p>
          <p>GUI</p>
        </div>
        <div className="overview">
          <p>Overview</p>
          <p className="desc">
            Military Veterans are Encouraged to Apply.<br/>
            PARC, a Xerox company, is in the Business of Breakthroughs.<br/>
            Practicing
          </p>
        </div>
      </section>
      <i className="go-back uil uil-arrow-circle-left" onClick={toHide}/>
    </div>
  )

}