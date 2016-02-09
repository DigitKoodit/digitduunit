FlowRouter.route('/', {
  name: "home",
  action: function(){
    ReactLayout.render(AppRoot, {yield: <MainComponent />});
  }
});

FlowRouter.route('/new', {
  name: "newEvent",
  action: function(){
    Meteor.user() ? ReactLayout.render(AppRoot, {yield: <MainComponent />}) : console.log("Need to log in as admin to create events.");
  }
});

FlowRouter.route('/jobs/:jobId', {
  action: function(params, queryParams){
    console.log("Params:", params);
    console.log("Query Params:", queryParams);
    Meteor.user() ? ReactLayout.render(AppRoot, {yield: <MainComponent />}) : console.log("Need to log in to view events.");

  }
})