Template.prescription.onRendered(function () {
  // Use the Packery jQuery plugin

  	$(".button-collapse").sideNav();
  	$(".dropdown-button").dropdown();
  	$('.tooltipped').tooltip({delay: 50});
  	$('.vertical-divider.col.s1').height($('.prescribed-medication').height() + 160);

});
