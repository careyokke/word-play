$(document).ready(function() {
  $("form").submit(function(event) {
    var sentence = $("#inputSentence").val();
    var words = sentence.split(" ");
    //alert(words);
    var selectedWords = [];

    words.forEach(function(word){
      if (word.length >= 3){
        selectedWords.push(word);
      //  alert (selectedWords);
      }
    });

    var reverseWords = selectedWords.reverse();

  //alert(reverseWords);

    var reverseWordsString = reverseWords.join(" ");

    $("#result").text(reverseWordsString);


    event.preventDefault();
  });
});
