// Write your package code here!
if(Meteor.isClient){
  Meteor.subscribe("jobs");
  Meteor.subscribe("projects");
}

DigitDuunit.Methods.addProject = (item) => {
  if(! Meteor.userId()){
    throw new Meteor.error('User not logged in.');
  }
  console.log("Inserting project");

  DigitDuunit.Collections.Projects.insert({
    name: item.name,
    createdAt: new Date(),
    owner: Meteor.userId(),
    projectLead: item.projectLead,
    description: item.description
  });
};

DigitDuunit.Methods.addJob = (item) => {
  if(! Meteor.userId()){
    throw new Meteor.error("User not logged in.");
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
