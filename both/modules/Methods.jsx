if(Meteor.isClient){
  Meteor.subscribe("jobs");
}

Meteor.methods({
  parseMarkdown(markdown){
    let reader = new CommonMark.Parser();
    let writer = new CommonMark.HtmlRenderer();

    let parsed = reader.parse(markdown);
    return writer.render(parsed);
  },

  addTask(item){
    if(! Meteor.userId()){
      throw new Meteor.error("User not logged in");
    }
    console.log("Inserting: " + item);

    Jobs.insert({
      name: item.name,
      createdAt: new Date(),
      owner: Meteor.userId(),
      location: item.location,
      type: item.type,
      deadline: item.deadline,
      description: item.description
    });
  }

});