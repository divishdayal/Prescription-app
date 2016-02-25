Template.doctorHome.helpers({
  name: function(){
    return Meteor.user().profile.name;
  },
  patients: function() {
    var pres_ids = Meteor.user().profile.prescriptions;
    var prescriptions = pres_ids.map(function(id){
      var current = Prescriptions.findOne({_id : id.id});
      return current;
    } );
    return prescriptions;
  }
});
