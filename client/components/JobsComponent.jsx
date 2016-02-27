JobsComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    let date = new Date().getTime();
    console.log(date);
    return{
      jobs: DigitDuunit.Collections.Jobs.find({deadline: {$gte: new Date().getTime()} }, {sort: {deadline: -1}}).fetch(),
      currentUser: Meteor.user()
    }
  },
  renderJobsList(){
    if(this.data.jobs.length === 0){
      console.log("No active jobs.");
      return(<h3> Ei aktiivisia hakuja</h3>);
    }

    return this.data.jobs.map((job, i) => {
      console.log(job);
      return <ListJob key={job._id} job={job} secondary={"Sijainti: "+job.location}/>
    });

  },
  checkUserStatus(){
    if(!Meteor.user()){
      return;
    }
    if(Meteor.user().roles.indexOf('admin') != -1){
      return (<a className="addNew" href="/new">+</a>);
    }
  },
  render(){
    return(
      <div>
        <div className="activeTab jobsTab">Työt</div>
        <div className="inactiveTab projectsTab" onClick={() => this.props.changeList()}><a href="#">Projektit</a></div>
        <div className="mainContainer">
          <h1 className="jobH1">DigitDuunit - Työpaikkailmoitukset {this.checkUserStatus()}</h1>
          <p> Digitin hallitus päivittää tälle sivulle hallitukselle
              sähköpostitse saapuvat työpaikkailmoitukset. Ilmoitukset
              poistuvat automaattisesti viimeisen päivämäärän täytyttyä.
              </p>
          <h2>Tarjolla olevia töitä:</h2>
          <ul>
            {this.renderJobsList()}
          </ul>
        </div>
      </div>
    );
  }
});
