Template.prescription.onRendered(function () {
  // Use the Packery jQuery plugin

  	$(".button-collapse").sideNav();
  	$(".dropdown-button").dropdown();
  	$('.tooltipped').tooltip({delay: 50});
  	$('.vertical-divider.col.s1').height($('.prescribed-medication').height() + 160);

});

Template.prescription.helpers({
  name: function(){
    return (Meteor.user().profile.first_name + " " + Meteor.user().profile.last_name);
  },
  qualifications : function(){
    return Meteor.user().profile.info.qualifications;
  },
  specialty: function(){
    return Meteor.user().profile.info.specialty;
  },
  address: function(){
    return Meteor.user().profile.clinicAddress;
  }
});

Template.prescription.events({
  'submit #prescription-form': function(e) {
		e.preventDefault();

		// var flag = 0;
    // 	$(".inputT").each(function() {
   // 			if(flag==0 && $(this).val() === ""){
    // 			throwError("Empty Fields!!");
    // 			flag=1;
  	// 		}
		// });
    // 	if(flag==1){
    // 	console.log("error");
    //   	return;}
    var date = new Date();
    var dateNew = moment(date).format("DD.MM.YYYY");
		var info = {
			fname: $(e.target).find('[name=f_name]').val(),
      lname: $(e.target).find('[name=l_name]').val(),
      date: dateNew,
			age: $(e.target).find('[name=age]').val(),
			weight: $(e.target).find('[name=weight]').val(),
      disease: $(e.target).find('[name=prescribed-disease]').val(),
      lab_tests: $(e.target).find('[name=lab-test]').val(),
      med1_name: $(e.target).find('[name=med1-name]').val(),
      med1_morning: $(e.target).find('[name=med1-morning]').val(),
      med1_afternoon: $(e.target).find('[name=med1-afternoon]').val(),
      med1_evening: $(e.target).find('[name=med1-evening]').val(),
      med1_group1: $(e.target).find('[name=med1-group1]').val(),
      med1_group2: $(e.target).find('[name=med1-group2]').val(),
      med2_name: $(e.target).find('[name=med2-name]').val(),
      med2_morning: $(e.target).find('[name=med2-morning]').val(),
      med2_afternoon: $(e.target).find('[name=med2-afternoon]').val(),
      med2_evening: $(e.target).find('[name=med2-evening]').val(),
      med2_group1: $(e.target).find('[name=med2-group1]').val(),
      med2_group2: $(e.target).find('[name=med2-group2]').val()
	};

	var p_id = Prescriptions.insert(info);
  console.log(p_id);
  var p = {id: p_id};
  Meteor.users.update({_id: Meteor.userId()},  { $push: { "profile.prescriptions": p } });



	console.log("done");
	Router.go('/doctor_home');
}
});
