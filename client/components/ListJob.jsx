ListJob = React.createClass({
  render(){
    return(
      <li className="jobLink"><a href={"/jobs/"+this.props.job._id}>{this.props.job.name} - {this.props.secondary}</a></li>
    );
  }
});
