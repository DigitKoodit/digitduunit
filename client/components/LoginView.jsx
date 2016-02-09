LoginView = React.createClass({
  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  },
  componentWillUnmount(){
    Blaze.remove(this.view);
  },
  render(){
    return (
      <div className="loginButton">
      <span ref="container"/>
      </div>
    );
  }
});