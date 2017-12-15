let natural = require('natural');
let fs = require('fs');
let nlp = require('compromise');

// let token = new natural.WordTokenizer();
natural.PorterStemmer.attach();
// console.log("tamara is having a pretty good day".tokenizeAndStem());

let text = "Tamara is generally having a pretty good day. Which is pretty decent";

let doc = nlp(text);

// console.log(doc.out('tags'));


fs.readFile('randomText.txt', 'utf8', function(err, contents) {

    let array = nlp(contents).nouns().out('freq');
    let newArray = [];

    for(i=0;i<array.length;i++){
        // console.log(array[i]);
        if(array[i].count > 3){
            newArray.push(array[i]);
        }
    }

    console.log(newArray);
});




function ranDom (arr) {
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
};