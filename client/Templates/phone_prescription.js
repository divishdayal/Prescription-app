Template.phonePrescription.events({
  'submit #phone-form': function(e) {
    e.preventDefault();

      var phone= $(e.target).find('[name=mobile_no]').val();
      var phone1 = {phone : phone};
      var p_id = Prescriptions.insert(phone1);
      console.log("inserted");
      var string = '/prescription/' + p_id;
      Router.go(string);

  }

})
