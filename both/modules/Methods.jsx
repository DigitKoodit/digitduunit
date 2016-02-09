if(Meteor.isClient){
  Meteor.subscribe("jobs");
}

Meteor.methods({
  addTask(item){
    if(! Meteor.userId()){
      throw new Meteor.error("User not logged in");
    }

    Jobs.insert({
      name: item.name,
      createdAt: new Date(),
      owner: Meteor.userId(),
      type: item.type,
      deadline: item.deadline,
      description: item.description
    });
  }

});