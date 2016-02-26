Template.medicalHistory.helpers({
  records: function(){
    var id = Iron.Location.get().path.substring(17);
    var phone = Prescriptions.findOne({_id: id}).phone;
    return Prescriptions.find({phone : phone, completed:true}).fetch();
  }
})
