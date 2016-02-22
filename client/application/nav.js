Template.nav.helpers({
  isPatient : function(){
    return ( Meteor.user().profile.type === "patient") ;
  }
});


Template.nav.events({
  'submit #logout-form': function(e, t) {
    e.preventDefault();
    Meteor.logout(function(err) {
      if (err) {
        console.log(err);
        // Display the logout error to the user however you want
      }
      else {
        Router.go('/');
      }
    });
}
});

Template.nav.onCreated(function() {
Blaze._allowJavascriptUrls();
});
