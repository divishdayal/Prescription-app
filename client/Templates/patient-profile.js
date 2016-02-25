Template.patientProfile.helpers({
  isRegistering: function() {
    return (Router.current().route.path() === '/register_patient');
  }
})

Template.patientProfile.events({
 'submit #patient-form': function(e, template) {
   e.preventDefault();

//    var flag = 0;
//    $(".inputR").each(function() {
//   if(flag==0 && $(this).val() === ""){
//    throwError("Empty Fields!");
//    flag=1;
//  }
// });
//    if(flag==1){
//      console.log("error");
//      return;}

     var $regexname=/\d\d\d\d\d\d\d\d\d\d/;
     var first= $(e.target).find('[name=first]').val();
     var last= $(e.target).find('[name=last]').val();
     var username= $(e.target).find('[name=username]').val();
     var email= $(e.target).find('[name=email]').val();
     var password= $(e.target).find('[name=password]').val();
     var mobile= $(e.target).find('[name=mobile]').val();
     var date= $(e.target).find('[name=date]').val();
     var type = $('input:radio[name="group1"]:checked').val() ;


     var options = {
     first_name: first,
     last_name: last,
     mobile_no: mobile,
     dob: date,
     type: type
     }
  //  if (!$(e.target).find('[name=capId]').val().match($regexname))
  //      throwError("wrong id !");
  //  else {








          Router.go('/patient_home');





 }
//}



});
