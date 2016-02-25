Template.doctorRegistration.events({
	'submit #doctor-form': function(e) {
		e.preventDefault();

		var flag = 0;
    	$(".inputT").each(function() {
   			if(flag==0 && $(this).val() === ""){
    			throwError("Empty Fields!!");
    			flag=1;
  			}
		});
    	if(flag==1){
    	console.log("error");
      	return;}

		var info = {
			qualifications: $(e.target).find('[name=qualifications]').val(),
			specialty: $(e.target).find('[name=specialty]').val(),
			clinicAddress: $(e.target).find('[name=clinic-address]').val()
	};

	Meteor.users.update( { _id: Meteor.userId() }, {$set: {"profile.info" : info}});
	Meteor.users.update( { _id: Meteor.userId() }, {$set: {"profile.completed" : true}});
	console.log("done");
	Router.go('/doctor_home');
}
});

Template.doctorRegistration.helpers({
  Quals: function(){
    return Meteor.user().profile.info.qualifications;
  },
  specialty: function(){
   return Meteor.user().profile.info.specialty;
  },
  address: function(){
    return Meteor.user().profile.info.clinicAddress;
  },
	isEdit: function(){
		return (Meteor.user().profile.info.qualifications || Meteor.user().profile.info.specialty
		|| Meteor.user().profile.info.clinicAddress);
	}
});
