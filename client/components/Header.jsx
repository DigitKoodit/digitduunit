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
        <h3> DigitDuunit - Töitä teekkarille</h3>
        <LoginView />
      </div>
    );
  }
});