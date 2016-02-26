Template.prescription.onRendered(function () {
  // Use the Packery jQuery plugin

  	$(".button-collapse").sideNav();
  	$(".dropdown-button").dropdown();
  	$('.tooltipped').tooltip({delay: 50});
  	$('.vertical-divider.col.s1').height($('.prescribed-medication').height() + 180);

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
    return Meteor.user().profile.info.clinicAddress;
  },
  url: function(){
    var id = Iron.Location.get().path.substring(14);
    return '/medical_history/' + id;
  }
});

Template.prescription.events({
  'submit #prescription-form': function(e) {
		e.preventDefault();
    var flag = 0;
    $(".inputR").each(function() {
   if(flag==0 && $(this).val() === ""){
    throwError("Empty Fields! ");
    flag=1;
  }
 });
    if(flag==1){
      console.log("error");
      return;}
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
    //var phone = $(e.target).find('[name=phone]').val();
		var info = {
      doc: ("Dr." + Meteor.user().profile.first_name + " " + Meteor.user().profile.last_name),
			fname: $(e.target).find('[name=f_name]').val(),
      lname: $(e.target).find('[name=l_name]').val(),
      date: dateNew,
			age: $(e.target).find('[name=age]').val(),
			weight: $(e.target).find('[name=weight]').val(),
      disease: $(e.target).find('[name=prescribed-disease]').val(),
      lab_tests: $(e.target).find('[name=lab-test]').val(),
      med1_name: $(e.target).find('[name=med1]').val(),
      med1_morning: $("#med-1-morning").is(':checked'),
      med1_afternoon: $("#med-1-afternoon").is(':checked'),
      med1_evening: $("#med-1-evening").is(':checked'),
      med1_group1: $(e.target).find('[name=med1-group1]').val(),
      med1_am : $("#med-1-AM").is(':checked'),
      med1_bm : $("#med-1-BM").is(':checked'),
      med2_am : $("#med2-AM").is(':checked'),
      med2_bm : $("#med2-BM").is(':checked'),
      med1_1 : $("#med-1-dose-1").is(':checked'),
      med1_2 : $("#med-1-dose-2").is(':checked'),
      med1_3 : $("#med-1-dose-3").is(':checked'),
      med2_1 : $("#med2-dose-1").is(':checked'),
      med2_2 : $("#med2-dose-2").is(':checked'),
      med2_3 : $("#med2-dose-3").is(':checked'),
      med1_group2: $(e.target).find('[name=med1-group2]').val(),
      med2_name: $(e.target).find('[name=med2]').val(),
      med2_morning: $("#med2-morning").is(':checked'),
      med2_afternoon: $("#med2-afternoon").is(':checked'),
      med2_evening: $("#med2-evening").is(':checked'),
      med2_group1: $(e.target).find('[name=med2-group1]').val(),
      med2_group2: $(e.target).find('[name=med2-group2]').val(),
      //phone: phone

	};

	// var p_id = Prescriptions.insert(info);
  // console.log(p_id);
  // var p = {id: p_id};
  var id = Iron.Location.get().path.substring(14);
  console.log(id);
  var p = {id: id};
  Prescriptions.update({_id:id}, {$set:{
    "info": info, "completed": true
  }});

  Meteor.users.update({_id: Meteor.userId()},  { $push: { "profile.prescriptions": p } });
  console.log("updated doc");
  // var user = Meteor.users.findOne({"profile.mobile_no" : phone});
  // var array = user.profile.prescriptions;
  // array.push(p);
  // var obj = {array : array};
  // Meteor.users.update({ _id : user._id}, { $set: { "profile.prescriptions": obj }});
  //   console.log("updated patient");



	console.log("done");
	Router.go('/doctor_home');
}
});
