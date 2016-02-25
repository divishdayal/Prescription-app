Template.patientHome.helpers({
  name: function(){
    return Meteor.user().profile.first_name;
  },
  records: function(){
    return Meteor.user().profile.records;
  }
})

Template.record.helpers({
  
})
