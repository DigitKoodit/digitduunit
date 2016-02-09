MainComponent = React.createClass({
  mixin: [ReactMeteorData],
  getMeteorData(){
    return{
      Jobs: Jobs.find({createdAt: {$lt: new Date()} }, {sort: {createdAt: -1}}).fetch(),
      currentUser: Meteor.user()
    }
  },
  renderJobsList(){
    if(Jobs.length === 0){
      return(<h3> Ei aktiivisia hakuja</h3>);
    }

    return this.data.Jobs.map((job) => {
      return <ListJob key={job.id} job={job}/>
    });

  },
  render(){
    return(
      <div className="jobsContainer">
        <h2>Tarjolla olevia töitä:</h2>
        <ul>
          {this.renderJobsList()}
        </ul>
      </div>
    );
  }
});