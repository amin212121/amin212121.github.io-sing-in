

$( ".email" ).click(function() {

 $( ".email" ).focus();
 
 $( ".email" ).addClass('focusinput');
 
  
 $( ".email" ).focusout(function() {
   
    $( ".email" ).removeClass('focusinput');
  });
  
  
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
	 
	 i = i+1;
	 
	 $( ".card-body" ).children().eq(i).next().css('display', 'none');
	 $( ".card-body" ).children().eq(i+1).next().css('display', 'block');
	  

	 
if (i===1)
{
	  $(".card-title").text('І на кінець розкажіть трохи про себе:');
	  $("#next").css('display', 'none');
	   $("#ready").css('display', 'block');
} else if (i===0) {
	$(".card-title").text('Представтесь будь ласка:');
};

 $("#back").css('display', 'block');
	 
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
} else if (i===0) {
	$(".card-title").text('Представтесь будь ласка:');
	$("#next").css('display', 'block');
	   $("#ready").css('display', 'none');
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




 


 

  
  


