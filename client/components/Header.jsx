Header = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return({
      user: Meteor.user()
    });
  },
  render(){
    return(
      <div className="headerBar">
        <h3> <a href="/">DigitDuunit - Töitä teekkarille</a></h3>
        <LoginView />
      </div>
    );
  }
});