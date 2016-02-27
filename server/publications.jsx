Meteor.publish("jobs", function(){
  return DigitDuunit.Collections.Jobs.find();
});

Meteor.publish('projects', function(){
  return DigitDuunit.Collections.Projects.find();
})
//
// // Write your package code here!
