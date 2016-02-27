ProjectEditor = React.createClass({
  getInitialState(){
    return{
      description: "",
      name: "Työn nimi",
      projectLead: "",
      deadline: ""
    }
  },
  produceDate(){
    let dlDate = this.state.deadline.split('.');
    return new Date(dlDate[2], dlDate[1]-1, dlDate[0]).getTime();
  },
  addToJobs(){
    if(this.state.deadline.length != 10){
      alert("Päivämäärä on väärässä formaatista, oikea formaatti on dd.mm.yyyy");
      return;
    }

    let dlDate = this.produceDate();
    console.log(dlDate);
    let job = {
      name: this.state.name,
      projectLead: this.state.projectLead,
      deadline: dlDate,
      description: this.state.description,
    }

    Meteor.call("addProject", job);
    window.location.href="/";
  },
  onChangeDate(event){
    event.preventDefault();
    this.setState({deadline: event.target.value});
  },
  onChangeText(event){
    event.preventDefault();
    let preview = parseMarkdown(event.target.value);
    this.setState({description: preview});
  },
  onChangeName(event){
    event.preventDefault();
    this.setState({name: event.target.value})
  },
  onChangeOwner(event){
    event.preventDefault();
    this.setState({type: event.target.value})
  },
  rawMarkup(){
    return{ __html: this.state.description}
  },
  render(){
    return(
      <div className="jobEditor">
        <div className="jobForm">
          <form className="formParts">
            <ul>
              <li className="editorFeature">
              <h4>Tehtävän nimi</h4>
              <input onChange={this.onChangeName} type="text" ref="jobName" placeholder="Työn nimi"/>
              </li>
              <li className="editorFeature">
              <h4>Vastuuhenkilö</h4>
              <input onChange={this.onChangeOwner} type="text" ref="jobType" placeholder="Rooli yrityksessä"/>
              </li>
              <li className="editorFeature">
              <h4>DL (dd.kk.yyyy)</h4>
              <input ref="datePicker" type="text" placeholder="dd.kk.yyyy" onChange={this.onChangeDate}/>
              </li>
            </ul>
          </form>
          <div className="markdownEditor">
            <h4>Kuvaus</h4>
            <textarea onChange={this.onChangeText} rows="5" type="text" ref="" placeholder="Tapahtuman nimi"/>
          </div>
          <button onClick={() => this.addToJobs()}>Lisää työ</button>
        </div>

        <div className="previewWindow">
          <div className="preview">
            <h2>{this.state.name}</h2>
            <ul>
              <li className="jobVar">Vastuuhenkilö: {this.state.projectLead}</li>
              <li className="jobVar">Haun deadline: {this.state.deadline}</li>
            </ul>
            <EditorPreviewWindow markup={this.rawMarkup()} />
          </div>
        </div>

      </div>
    );
  }
});
