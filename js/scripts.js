$(document).ready(function(){
  $("#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there</li>")
    $("li").css('background-color','green')
  });
$("#goodbye").click(function(){
  $("ul#user").prepend("<li>Goodbye!</li>");
  $('ul#webpage').prepend("<li>Goodbye,dear user</li>")
});
$("#stop").click(function(){
  $('ul#user').prepend("<li>Stop copying me</li>")
  $('ul#webpage').prepend("<li>Pardon me. I meant no offense</li>")
});



});
