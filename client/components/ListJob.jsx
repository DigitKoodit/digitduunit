ListJob = React.createClass({
  render(){
    return(
      <li><a href={"/jobs/"+this.props.job._id}>{this.props.job.name}</a></li>
    );
  }
});