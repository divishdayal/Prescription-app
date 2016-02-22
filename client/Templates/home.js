Template.home.events({
	'submit #login' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var username = t.find('#username').value
        , password = t.find('#password').value;

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword({username:username}, password, function(err){
        if (err){ throwError("invalid username/password");
                  console.log(err);
                  return;
      }
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed.
        else{ console.log("logged is successful");}          // The user has been logged in.
        if(Meteor.user().profile.type == 'doctor')
          Router.go('/doctor_home');
        else {
          Router.go('/patient_home');
          }
      });
         return false;
      }



});
