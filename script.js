let sentence = "Le film n'est pas si mal, j'aime bien";
let searchTerm = "n'";
let wordNot=sentence.indexOf(searchTerm);
console.log(wordNot);
let searchTerm1 = "mal";
let wordBad=sentence.indexOf(searchTerm1);
console.log(wordBad);
if(wordBad > wordNot){

console.log(sentence.replace("n'est pas si mal", " est si bon"));

}else{
    console.log(sentence);
}