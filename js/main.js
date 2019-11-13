

$( ".email" ).click(function() {

 $( ".email" ).focus();
 
 $( "#toast" ).css('display', 'none');
 
 $( ".email" ).addClass('focusinput');
 
  
 $( ".email" ).focusout(function() {
   
    $( ".email" ).removeClass('focusinput');
  });
  
  
});

$( ".closebut" ).click(function() {
 $( "#toast" ).css('display', 'none');
 $( "#toastpass" ).css('display', 'none');
});



$( ".name" ).click(function() {

 $( ".name" ).focus();


 $( ".name" ).addClass('focusinput')
  $( ".name" ).focusout(function() {
   
    $( ".name" ).removeClass('focusinput');
  });
 
 });
 
 
 $( ".pass" ).click(function() {

 $( ".pass" ).focus();
 $( "#toastpass" ).css('display', 'none');

 $( ".pass" ).addClass('focusinput')
  $( ".pass" ).focusout(function() {
   
    $( ".pass" ).removeClass('focusinput');
  });
 
 });
 
 $( ".surname" ).click(function() {

 $( ".surname" ).focus();


 $( ".surname" ).addClass('focusinput')
  $( ".surname" ).focusout(function() {
   
    $( ".surname" ).removeClass('focusinput');
  });
 
 });
 
 $( ".adress" ).click(function() {

 $( ".adress" ).focus();


 $( ".adress" ).addClass('focusinput')
  $( ".adress" ).focusout(function() {
   
    $( ".adress" ).removeClass('focusinput');
  });
 
 });
 
 $( ".telephon" ).click(function() {

 $( ".telephon" ).focus();


 $( ".telephon" ).addClass('focusinput')
  $( ".telephon" ).focusout(function() {
   
    $( ".telephon" ).removeClass('focusinput');
  });
 
 });
 
 $( ".biog" ).click(function() {

 $( ".biog" ).focus();


 $( ".biog" ).addClass('focusinput')
  $( ".biog" ).focusout(function() {
   
    $( ".biog" ).removeClass('focusinput');
  });
 
 });
 
 
let i = -1;
 
 $( "#next" ).click(function() {
	 
	 let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,10})$/;
	let address = $( "#email" ).val();
	let passsym = $( "#pass" ).val().length;
	
	if(reg.test(address) === false) {
      $('#toast').css('display', 'block')
      
   } else if (passsym<6){
	   $('#toastpass').css('display', 'block')
   }
   
   
   else {
 i = i+1;

	 $( ".card-body" ).children().eq(i).next().css('display', 'none');
	 $( ".card-body" ).children().eq(i+1).next().css('display', 'block');
	  

	 
if (i===1)
{
	  $(".card-title").text('І на кінець розкажіть трохи про себе:');
	  $("#next").css('display', 'none');
	   $("#ready").css('display', 'block');
	   $("#first").removeClass('activespan');
	    $("#first2").removeClass('activespan');
	   $("#first3").addClass('activespan');
	    $("#first").css('padding', '0px 0px 2px 0px');
	    $("#first2").css('padding', '0px 0px 2px 0px');
		$("#first3").css('padding', '0px 0px 0px 0px');
	   
} else if (i===0) {
	$(".card-title").text('Представтесь будь ласка:');
	 $("#first").removeClass('activespan');
	  $("#first3").removeClass('activespan');
	  $("#first2").addClass('activespan');
	  	    $("#first3").css('padding', '0px 0px 2px 0px');
	    $("#first").css('padding', '0px 0px 2px 0px');
		$("#first2").css('padding', '0px 0px 0px 0px');
};

 $("#back").css('display', 'block');

 
   }
   

	 
 });
 

 
 
 $( "#back" ).click(function() {
	  $( ".card-body" ).children().eq(i).next().css('display', 'block');
 $( ".card-body" ).children().eq(i+1).next().css('display', 'none');
 
  i = i-1;
  
 if (i===-1)
{
	  $("#back").css('display', 'none');
	  $(".card-title").text('Створіть свій профіль:');
	  $("#next").css('display', 'block');
	   $("#ready").css('display', 'none');
	   $("#first2").removeClass('activespan');
	  $("#first3").removeClass('activespan');
	  $("#first").addClass('activespan');
	  
	    $("#first").css('padding', '0px 0px 0px 0px');
	    $("#first2").css('padding', '0px 0px 2px 0px');
		$("#first3").css('padding', '0px 0px 2px 0px');
	  
} else if (i===0) {
	$(".card-title").text('Представтесь будь ласка:');
	$("#next").css('display', 'block');
	   $("#ready").css('display', 'none');
	   $("#first").removeClass('activespan');
	  $("#first3").removeClass('activespan');
	  $("#first2").addClass('activespan');
	    $("#first").css('padding', '0px 0px 2px 0px');
	    $("#first3").css('padding', '0px 0px 2px 0px');
		$("#first2").css('padding', '0px 0px 0px 0px');
};


 });
 
  function getValue () {
 
 let user = {
	 email: $( "#email" ).val(),
	 pass: $( "#pass" ).val(),
	 name: $( "#name" ).val(),
	 surname: $( "#surname" ).val(),
	 adress: $( "#adress" ).val(),
	 telephon: $( "#telephon" ).val(),
	 biog: $( "#biog" ).val()
	 
 }
 
  
 
let serialObj = JSON.stringify(user); //сериализуем его

 localStorage.setItem('user_inf', serialObj);
 
}



$( "#name" ).keyup(function() {
 let sumvalue = $( "#name" ).val().length;
$( "#countsum" ).text(50-sumvalue);
});
 
 $( "#surname" ).keyup(function() {
 let sumvalue = $( "#surname" ).val().length;
$( "#countsums" ).text(50-sumvalue);
});



$("#telephon").keypress(function(event){
  event = event || window.event;
  if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) || event.charCode === 46 || event.charCode === 47 )
    return false;
});


 $( "#biog" ).keyup(function() {
 let sumvalue = $( "#biog" ).val().length;
$( "#countsumb" ).text(200-sumvalue);
});

$(document).keypress(function(event){
  event = event || window.event;
  if (event.charCode===13) {
    $("#next").click();
	$("#ready").click();
	
  }
});

  
  


