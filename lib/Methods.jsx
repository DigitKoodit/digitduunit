if(Meteor.isClient){
  Meteor.subscribe("jobs");
  Meteor.subscribe("projects");
}
if(Meteor.isServer){
  Meteor.methods({
    addProject(item){
      if(! Meteor.userId()){
        throw new Meteor.error('User not logged in.');
        return;
      }
      console.log("Inserting project");

      DigitDuunit.Collections.Projects.insert({
        name: item.name,
        createdAt: new Date(),
        owner: Meteor.userId(),
        deadline: item.deadline,
        projectLead: item.projectLead,
        description: item.description
      });
    },
    addJob(item){
      if(! Meteor.userId()){
        throw new Meteor.error("User not logged in.");
        return;
      }
      console.log("Inserting: " + item);

      DigitDuunit.Collections.Jobs.insert({
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
}
