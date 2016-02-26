// Template.prescription.onRendered(function () {
//   // Use the Packery jQuery plugin
//
//   	$(".button-collapse").sideNav();
//   	$(".dropdown-button").dropdown();
//   	$('.tooltipped').tooltip({delay: 50});
//   	$('.vertical-divider.col.s1').height($('.prescribed-medication').height() + 160);
//
// });

Template.showPrescription.helpers({


});

Template.prescriptionDisabled.helpers({
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
  },
  med1Morning: function(){
    if(this.info.med1_morning)
      return "checked";
  },
  med1Afternoon: function(){
    if(this.info.med1_afternoon)
      return "checked";
  },
  med1Evening: function(){
    if(this.info.med1_evening)
      return "checked";
  },
  med2Morning: function(){
    if(this.info.med2_morning)
      return "checked";
  },
  med2Afternoon: function(){
    if(this.info.med2_afternoon)
      return "checked";
  },
  med2Evening: function(){
    if(this.info.med1_afternoon)
      return "checked";
  },
  med1am: function(){
    if(this.info.med1_am)
      return "checked";
  },
  med1bm: function(){
    if(this.info.med1_bm)
      return "checked";
  },
  med2am: function(){
    if(this.info.med2_am)
      return "checked";
  },
  med2bm: function(){
    if(this.info.med2_bm)
      return "checked";
  },
  med11: function(){
    if(this.info.med1_1)
      return "checked";
  },
  med12: function(){
    if(this.info.med1_2)
      return "checked";
  },
  med13: function(){
    if(this.info.med1_3)
      return "checked";
  },
  med21: function(){
    if(this.info.med2_1)
      return "checked";
  },
  med22: function(){
    if(this.info.med2_2)
      return "checked";
  },
  med23: function(){
    if(this.info.med2_3)
      return "checked";
  }
});
