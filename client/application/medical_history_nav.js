Template.medicalHistoryNav.helpers({
  url: function(){
    var id = Iron.Location.get().path.substring(17);
    return '/prescription/' + id;
  }
})
