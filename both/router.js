Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'

});

Router.route('/', {name:'home'});
Router.route('/doctor_home', {name:'doctor_home'});
Router.route('/doctor_registration', {name:'doctor_registration'});
Router.route('/patient_home', {name:'patient_home'});
Router.route('/patient_profile', {name:'patient_profile'});
Router.route('/prescription', {name:'prescription'});
Router.route('/show_prescription/:_id', {
  name: 'show_prescription',
  data: function() { return Prescriptions.findOne(this.params._id); }
});
Router.route('/register', {name:'register'});

// var isReady =  function() {
//     if (!this.ready() || Meteor.loggingIn()) {
//        console.log('not ready')
//       this.render('loading');
//     }else{
//       this.next();
//        console.log('ready')
//     }
//   }

	var requireLogin = function() {
		if (!Meteor.user()) {
			if (Meteor.loggingIn()) {
				this.render(this.loadingTemplate);
			} else {

			this.render('accessDenied');
		}
		} else {
			this.next();
		}
	}

	var isDoc = function(){
		if(Meteor.user().profile.type === "doctor")
			this.next();
		else {
			this.render('accessDenied');
		}

	}

	var isPatient = function(){
		if(Meteor.user().profile.type === "patient")
			this.next();
		else {
			this.render('accessDenied');
		}

	}

  //Router.onBeforeAction(isReady);
Router.onBeforeAction(requireLogin, {except: ['home', 'register']});
Router.onBeforeAction(requireLogin, {only: ['doctor_home', 'doctor_registration', 'prescription']});
Router.onBeforeAction(requireLogin, {only: ['patient_home', 'patient_profile']});
