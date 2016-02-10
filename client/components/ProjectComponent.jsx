ProjectComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      jobs: Jobs.find({createdAt: {$lt: new Date()} }, {sort: {createdAt: -1}}).fetch(),
      currentUser: Meteor.user()
    }
  },
  renderJobsList(){
    if(this.data.jobs.length === 0){
      console.log("No active jobs.");
      return(<h3> Ei aktiivisia hakuja</h3>);
    }

    return this.data.jobs.map((job) => {
      console.log(job);
      return <ListJob key={job.id} job={job}/>
    });

  },
  checkUserStatus(){
    if(!Meteor.userId()){
      return;
    }
    if(Meteor.user().roles.indexOf('admin') != -1){
        return <a className="addNew" href="/new">+</a>;
    }  
  },
  render(){
    console.log("Rendering projectlist")
    return(
      <div>
        <div className="inactiveTab" onClick={() => this.props.changeList()}><a href="#">Työt</a></div>
        <div className="activeTab">Projektit</div>
        <div className="mainContainer">
          <h1>DigitDuunit - Yliopiston sisäiset projektit {this.checkUserStatus()}</h1>
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