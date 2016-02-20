Accounts.onCreateUser(function(options, user){
  let userCount = Meteor.users.find({}).fetch().length
  let roles;

  switch(userCount){
    case 0:
      roles = ['common', 'admin'];
      console.log("Welcome master.");
      break;
    default:
      roles = ['common'];
      break;
  }
  user.roles = roles;

  return user;
});
