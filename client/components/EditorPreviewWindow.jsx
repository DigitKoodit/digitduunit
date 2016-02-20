EditorPreviewWindow = React.createClass({
  render(){
    return(
      <div className="previewWrapper">
        <h3>Kuvaus</h3>
        <div className="previewHTML" dangerouslySetInnerHTML={this.props.markup}/>

      </div>
    );
  }
});
