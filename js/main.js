//Grabs quote from API
var quoteMessage;
var quoteAuthor;
generateQuote();
function generateQuote() {
$.ajax({
  url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
  type: 'POST',
  data: {},
  dataType:'json',
  success: function(data) {
    quoteMessage = data.quote;
    quoteAuthor = data.author;
    
    $("#quote").text("\"" + quoteMessage +"\"");
    $("#author").text("- " + quoteAuthor); 
                          },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "hykkgFsSbPmshlipALSomdqLNDfNp1BvUfXjsnJUycdKasNvo5");} // Enter here your Mashape key
    }); }

//Click function for button
var $newQuoteButton = $("#button");
$newQuoteButton.click(function(){
  var randomColors = 'rgb(' + (Math.floor((256-199)*Math.random()) + 100) + ','
                 + (Math.floor((256-199)*Math.random()) + 100) + ','
                 + (Math.floor((256-199)*Math.random()) + 100) + ')';
  $("#quote, #author").fadeOut(500); 
  $("#quote, #author").fadeIn(500);
  $("body").css("background-color", randomColors);
  $("p").css("color", randomColors);
  $("#button, #tweet-quote").css("background-color", randomColors);
});

//Click function for twitter button
$('#tweet-quote').on('click', function() {
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + quoteMessage);
});




