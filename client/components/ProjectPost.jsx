ProjectPost = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      job: DigitDuunit.Collections.Jobs.findOne({_id: this.props.id.jobId})
    }
  },
  getInitalState(){
    return {date: new Date(this.data.job.deadline)}
  },
  rawMarkup(){
    return{ __html: this.data.job.description}
  },
  getDate(){
    let date = new Date(this.data.job.deadline);
    return date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear();
  },
  render(){
    return(
      <div className="mainContainer">
        <div className="descriptionHeader">
        <h1>{this.data.job.name}</h1>
        <ul>
          <li>Tyyppi: {this.data.job.type}</li>
          <li>Hakemuksen deadline: {this.getDate()}</li>
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
