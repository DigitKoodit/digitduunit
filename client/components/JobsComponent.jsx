JobsComponent = React.createClass({
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

    return this.data.jobs.map((job, i) => {
      console.log(job);
      return <ListJob key={job._id} job={job}/>
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
        <div className="activeTab">Työt</div>
        <div className="inactiveTab" onClick={() => this.props.changeList()}><a href="#">Projektit</a></div>
        <div className="mainContainer">
          <h1>DigitDuunit - Työpaikkailmoitukset {this.checkUserStatus()}</h1>
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