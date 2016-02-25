Template.doctorHome.helpers({
  name: function(){
    return Meteor.user().profile.name;
  },
  patients: function() {
    return Meteor.user().profile.records;
  }
});
