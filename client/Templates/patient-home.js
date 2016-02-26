Template.patientHome.helpers({
  name: function(){
    return Meteor.user().profile.first_name;
  },
  records: function(){
    var phone = Meteor.user().profile.mobile_no;
    return Prescriptions.find({phone : phone}).fetch();
  }
  //copied records from doctors 'patients' helper in doctor-home.js
  // records: function() {
  //   var pres_ids = Meteor.user().profile.prescriptions;
  //   var prescriptions = pres_ids.map(function(id){
  //     var current = Prescriptions.findOne({_id : id.id});
  //     return current;
  //   } );
  //   return prescriptions;
  // }

})

Template.record.helpers({

})
