JobPost = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    console.log(this.props.id.jobId)
    return{
      job: Jobs.findOne({_id: this.props.id.jobId})
    }
  },
  rawMarkup(){
    return{ __html: this.data.job.description}
  },
  render(){
    console.log(this.data.job)
    return(
      <div className="mainContainer">
        <div className="descriptionHeader">
        <h1>{this.data.job.name}</h1>
        <ul>
          <li>Tyyppi: {this.data.job.type}</li>
          <li>Hakemuksen deadline: {this.data.job.deadline}</li>
          <li>Työn sijainti: {this.data.job.location}</li>
        </ul>
        </div>
        <div className="descriptionContent">
          <h3>Kuvaus</h3>
          <div className="previewHTML" dangerouslySetInnerHTML={this.rawMarkup()}/>
        </div> 
      </div> 
    );
  }
});