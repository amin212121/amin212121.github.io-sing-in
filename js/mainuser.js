
 let user = JSON.parse(localStorage.getItem('user_inf'))


 $("#NameSur").html (user.name + ' ' + user.surname);
 
 $("#Email").html ('<b>Email: </b>' + user.email);
 $("#Phone").html ('<b>Mob: </b>' + user.telephon);
 
 $("#Emailb").html ('<b>Email: </b>' + user.email);
 $("#Phoneb").html ('<b>Mob: </b>' + user.telephon);
 
 $(".morep").html ('<b>Адреса: </b>' + user.adress);
 $(".otherp").html ('<b>Інша інформація про користувача: </b>' + user.biog);
 
 $("#other").click ( function () {
  $("#other").addClass ('active');
    $("#more").removeClass ('active');
	  $("#records").removeClass ('active');
	  $("#contactbot").removeClass ('active');
  
  $(".morep").css('display', 'none');
  $(".recordsp").css ('display', 'none');
  $(".contactbotp").css ('display', 'none');
 $(".otherp").css ('display', 'block');
 
 $(".navmenutittle").text('Інші дані')
 })
 
 $("#contactbot").click ( function () {
  $("#contactbot").addClass ('active');
    $("#more").removeClass ('active');
	  $("#records").removeClass ('active');
	  $("#other").removeClass ('active');
  
  $(".morep").css('display', 'none');
  $(".recordsp").css ('display', 'none');
 $(".otherp").css ('display', 'none');
  $(".contactbotp").css ('display', 'block');
 $(".navmenutittle").text('Контактні дані')
 })
 
 
 
 
  $("#more").click ( function () {
	    $("#other").removeClass ('active');
    $("#more").addClass('active');
	  $("#records").removeClass ('active');
	   $("#contactbot").removeClass ('active');

  $(".morep").css ('display', 'block');
  $(".recordsp").css ('display', 'none');
  $(".contactbotp").css ('display', 'none');
 $(".otherp").css ('display', 'none');
 $(".navmenutittle").text('Додаткова інформація')
 })
 
 
  $("#records").click ( function () {
	   $("#other").removeClass ('active');
    $("#more").removeClass('active');
	    $("#records").addClass('active');
	   $("#contactbot").removeClass ('active');
	  

  $(".morep").css ('display', 'none');
  $(".recordsp").css ('display', 'block');
  $(".contactbotp").css ('display', 'none');
 $(".otherp").css ('display', 'none');
 $(".navmenutittle").text('Записи')
 })
 
 
 
 



 


 

  
  


