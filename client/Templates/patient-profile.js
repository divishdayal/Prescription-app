Template.patientProfile.helpers({
  isRegistering: function() {
    return (Router.current().route.path() === '/register_patient');
  }
})
