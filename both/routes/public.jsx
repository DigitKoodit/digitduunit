FlowRouter.route('/', {
  name: "home",
  action: function(){
    ReactLayout.render(AppRoot, {yield: <MainComponent />});
  }
});

FlowRouter.route('/new', {
  name: "new_job",
  action: function(){
    Meteor.userId() ? ReactLayout.render(AppRoot, {yield: <NewPostingComponent/> }) : ReactLayout.render(AppRoot, {yield: <ErrorView error="Kirjaudu sisään lisätäksesi ilmoituksia." />}) ;
  }
});

FlowRouter.route('/jobs/:jobId', {
  action: function(params, queryParams){
    console.log("Params:", params);
    console.log("Query Params:", queryParams);
    Meteor.user() ? ReactLayout.render(AppRoot, {yield: <JobPost id={params} />}) : ReactLayout.render(AppRoot, {yield: <ErrorView error="Kirjaudu sisään nähdäksesi työpaikkailmoituksen" />}) ;

  }
});