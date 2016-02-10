MainComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      currentUser: Meteor.user()
    }
  },
  changeListState(){
    this.setState({jobs: !this.state.jobs})

  },
  getInitialState(){
    return { jobs: true }
  },
  renderCorrectList(){
    if(this.state.jobs){
      return <JobsComponent changeList={this.changeListState} />
    }
    return <ProjectComponent changeList={this.changeListState}/>
  },
  render(){
    return(
      <div className="paperContainer">
        {this.renderCorrectList()}
      </div>
    );
  }
});