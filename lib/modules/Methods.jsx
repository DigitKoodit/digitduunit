if(Meteor.isClient){
  Meteor.subscribe("jobs");
  Meteor.subscribe("projects");
}

Meteor.methods({

  //Method to be called to add items to projects list
  addProject(item){
    if(! Meteor.userId()){
      throw new Meteor.error("User not logged in.")
    }
    console.log("Inserting project: " + item);

    Projects.insert({
      name: item.name,
      createdAt: new Date(),
      owner: Meteor.userId(),
      projectLead: item.projectLead,
      description: item.description
    });
  },

  //Method to be called to add items to jobs list.
  addJob(item){
    if(! Meteor.userId()){
      throw new Meteor.error("User not logged in.");
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