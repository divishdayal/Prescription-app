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

Template.doctorHome.onRendered(function(){
  	$(".button-collapse").sideNav();
  	 $('.modal-trigger').leanModal();
  	 $('.tooltipped').tooltip({delay: 50});
  	$('.vertical-divider.col.s1').height($('.prescription-main-body').height() + 160);
  	$('#prescription-trigger').click($('.vertical-divider.col.s1').height($('.prescription-main-body').height()));

});
