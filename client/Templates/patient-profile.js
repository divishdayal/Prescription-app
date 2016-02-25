Template.patientProfile.helpers({
  isRegistering: function() {
    return (Router.current().route.path() === '/register_patient');
  },
  isAsthma: function(){
    return Meteor.user().profile.patient.asthma ;
  },
  isDiabetes: function(){
    return Meteor.user().profile.patient.diabetes;
  },
  isHeart: function(){
    return Meteor.user().profile.patient.heartProblems;
  },
  isDizzy: function(){
    return Meteor.user().profile.patient.dizzyness;
  },
  isJoint: function(){
    return Meteor.user().profile.patient.joint;
  },
  isEpilepsy: function(){
    return Meteor.user().profile.patient.epilepsy;
  },
  isChest: function(){
    return Meteor.user().profile.patient.chest;
  },
  isBp: function(){
    return Meteor.user().profile.patient.bp;
  },
  isRegmed: function(){
    return Meteor.user().profile.patient.regmed;
  },
  textArea1: function(){
    var string = Meteor.user().profile.patient.textArea1;
    return string;
  },
  textArea2: function(){
    var string = Meteor.user().profile.patient.textArea2;
    return string;
  }
});


Template.patientProfile.events({
 'submit #patient-form': function(e, template) {
   e.preventDefault();


     var asthma;
     if($('input:radio[name="asthma"]:checked').val() === "yes")
       asthma = true;
      else {
        asthma = false;
      }

      var diabetes;
      if($('input:radio[name="diabetes"]:checked').val() === "yes")
        diabetes = true;
       else {
         diabetes = false;
       }

       var HeartProblems;
       if($('input:radio[name="HeartProblems"]:checked').val() === "yes")
         HeartProblems = true;
        else {
          HeartProblems = false;
        }

        var dizzyness;
        if($('input:radio[name="dizzyness"]:checked').val() === "yes")
          dizzyness = true;
         else {
           dizzyness = false;
         }

         var Joint;
         if($('input:radio[name="Joint"]:checked').val() === "yes")
           Joint = true;
          else {
            Joint = false;
          }

          var Epilepsy;
          if($('input:radio[name="Epilepsy"]:checked').val() === "yes")
            Epilepsy = true;
           else {
             Epilepsy = false;
           }

           var Chest;
           if($('input:radio[name="Chest"]:checked').val() === "yes")
             Chest = true;
            else {
              Chest = false;
            }

            var BP;
            if($('input:radio[name="BP"]:checked').val() === "yes")
              BP = true;
             else {
               BP = false;
             }

             var regmed;
             if($('input:radio[name="regmed"]:checked').val() === "yes")
               regmed = true;
              else {
                regmed = false;
              }

    var textArea1 = $(e.target).find('[name=textArea1]').val();
    //console.log(textArea1);
    var textArea2 = $(e.target).find('[name=textArea2]').val();



     var patient = {
     asthma: asthma,
     diabetes: diabetes,
     heartProblems: HeartProblems,
     dizzyness : dizzyness,
     joint : Joint,
     epilepsy: Epilepsy,
     chest : Chest,
     bp: BP,
     regmed: regmed,
     textArea1: textArea1,
     textArea2: textArea2
     }
     //console.log(patient.textArea1);
     Meteor.users.update( { _id: Meteor.userId() }, {$set: {"profile.patient" : patient}});
   	 Meteor.users.update( { _id: Meteor.userId() }, {$set: {"profile.completed" : true}});


    console.log("updated patient profile");
    Router.go('/patient_home');


 }

});
