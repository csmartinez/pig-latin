var pigLatin = function(sentence) {
    var vowels = ["a", "e", "i", "o", "u", "y"];
    var new_word = [];
    var new_sentence = sentence.split("");
    vowels.forEach(function(letter) {
        if (new_sentence[0] !== letter) {

        } else {
            new_word.push(sentence + "ay");
        }
  });
  return new_word.join();
};
