AppRoot = React.createClass({
  render(){
    return(
      <div className="appContainer">
        {this.props.yield}
      </div>
    );
  }
});