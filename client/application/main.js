Meteor.startup(function(){
  $(document).ready(function(){
  	$(".button-collapse").sideNav();
  	 $('.modal-trigger').leanModal();
  	 $('.tooltipped').tooltip({delay: 50});
  	$('.vertical-divider.col.s1').height($('.prescription-main-body').height() + 160);
  	$('#prescription-trigger').click($('.vertical-divider.col.s1').height($('.prescription-main-body').height()));
  });
});
