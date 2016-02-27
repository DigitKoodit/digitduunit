ProjectComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    let date = new Date().getTime();
    return{
        projects: DigitDuunit.Collections.Projects.find({deadline: {$gte: new Date().getTime()} }, {sort: {deadline: -1}}).fetch(),
        currentUser: Meteor.user()

    }
  },
  renderJobsList(){
    if(this.data.projects.length === 0){
      console.log("No active projects.");
      return(<h3> Ei aktiivisia hakuja</h3>);
    }

    return this.data.projects.map((job) => {
      console.log(job);
      return <ListJob key={job._id} job={job} secondary={"Vastuuhenkilö: "+job.projectLead}/>
    });

  },
  checkUserStatus(){
    if(!Meteor.userId()){
      return;
    }
    if(Meteor.user().roles.indexOf('admin') != -1){
        return <a className="addNew" href="/new_project">+</a>;
    }
  },
  render(){
    console.log("Rendering projectlist")
    return(
      <div>
        <div className="inactiveTab jobsTab" onClick={() => this.props.changeList()}><a href="#">Työt</a></div>
        <div className="activeTab projectsTab">Projektit</div>
        <div className="mainContainer">
          <h1 className="projectH1">DigitDuunit - Yliopiston sisäiset projektit {this.checkUserStatus()}</h1>
          <p> Tälle sivulle on oletettavissa yliopiston sisäisiä projekteja opiskelijavoimin toteutettaviksi.
              Projekteja toteuttaville opiskelijoille on tarjolla opintopisteiden lisäksi rahallista korvausta toteuteusta työstä, projektista riippuen.</p>
          <h2>Tarjolla olevia projekteja:</h2>
          <ul>
            {this.renderJobsList()}
          </ul>
        </div>
      </div>
    );
  }
});
