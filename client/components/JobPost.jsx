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
      <div className="jobDiv">
        <div className="descriptionHeader">
        <h1>{this.data.job.name}</h1>
        <ul>
          <li>{this.data.job.type}</li>
          <li>{this.data.job.deadline}</li>
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