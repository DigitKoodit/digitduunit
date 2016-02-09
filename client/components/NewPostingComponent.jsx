NewPostingComponent = React.createClass({
  getInitialState(){
    return{
      description: "Empty",
      name: "",
      deadline: ""
    }
  },
  addToJobs(){
    console.log(this.refs.datePicker.getDate());
  },
  onChangeText(event){
    event.preventDefault();
    this.setState({description: event.target.value});
  },
  render(){
    return(
      <div jobForm>
        <form>
          <h4>Paikan/Työn nimi</h4>
          <input onChange={this.onChangeName} type="text" ref="jobName" placeholder="Työn nimi"/>
          <h4>Paikan Tyyppi</h4>
          <input onChange={this.onChangeType} type="text" ref="jobType" placeholder="Sopimuksen"/>
          <h4>Haun deadlin</h4>
          <DatePicker ref="datePicker"/>
          <h4>Kuvaus</h4>
          <textarea onChange={this.onChangeText} rows="5" type="text" ref="" placeholder="Tapahtuman nimi"/>
        </form>
        <button onClick={() => this.addToJobs()}>Lisää tyyppi</button>
        {this.state.description}
      </div>
    );
  }
});