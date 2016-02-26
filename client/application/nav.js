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
},
  'click .modal1-new': function(){
    $(".button-collapse").sideNav();
  	 $('.modal-trigger').leanModal();
  	 $('.tooltipped').tooltip({delay: 50});
  	$('.vertical-divider.col.s1').height($('.prescription-main-body').height() + 160);
  	$('#prescription-trigger').click($('.vertical-divider.col.s1').height($('.prescription-main-body').height()));

  }
});

Template.nav.onCreated(function() {
Blaze._allowJavascriptUrls();
});
