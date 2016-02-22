Template.doctorHome.helpers({
  name: function(){
    return Meteor.user().profile.name;
  }
});
