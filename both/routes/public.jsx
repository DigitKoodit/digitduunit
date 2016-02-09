FlowRouter.route('/', {
  name: "home",
  action: function(){
    ReactLayout.render(AppRoot, {yield: <MainComponent />});
  }
});

FlowRouter.route('/new', {
  name: "new_job",
  action: function(){
    Meteor.userId() ? ReactLayout.render(AppRoot, {yield: <NewPostingComponent/> }) : ReactLayout.render(AppRoot, {yield: <ErrorView error="Kirjaudu sisään lisätäksesi tapahtumia." />}) ;
  }
});

FlowRouter.route('/jobs/:jobId', {
  action: function(params, queryParams){
    console.log("Params:", params);
    console.log("Query Params:", queryParams);
    Meteor.user() ? ReactLayout.render(AppRoot, {yield: <MainComponent />}) : console.log("Need to log in to view events.");

  }
});