AppRoot = React.createClass({
  componentWillMount(){
    console.log("Mounting AppRoot.");
  },
  render(){
    return(
      <div className="appContainer">
        <Header />
        {this.props.yield}
        <Copyright />
      </div>
    );
  }
});