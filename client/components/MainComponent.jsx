MainComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    console.log("Fetching mixin");
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
  render(){
    return(
      <div className="mainContainer">
        <h1>DigitDuunit</h1>
        <p> Digitin hallitus päivittää tälle sivulle hallitukselle 
            sähköpostitse saapuvat työpaikkailmoitukset. Ilmoitukset
            poistuvat automaattisesti viimeisen päivämäärän täytyttyä.
            </p>
        <h2>Tarjolla olevia töitä:</h2>
        <ul>
          {this.renderJobsList()}
        </ul>
      </div>
    );
  }
});