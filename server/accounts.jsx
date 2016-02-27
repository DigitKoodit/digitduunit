Accounts.onCreateUser(function(options, user){
  let userCount = Meteor.users.find({}).fetch().length;
  let roles;
  let verified = false;

  switch(userCount){
    case 0:
      roles = ['common', 'admin'];
      console.log("Welcome master.");
      verified = true;
      break;
    default:
      roles = ['common'];
      break;
  }
  user.roles = roles;
  user.verified = verified;

  return user;
});
