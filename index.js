let natural = require('natural');
let fs = require('fs');
let nlp = require('compromise');

// let token = new natural.WordTokenizer();
natural.PorterStemmer.attach();
// console.log("tamara is having a pretty good day".tokenizeAndStem());

let text = "Tamara is generally having a pretty good day. Which is pretty decent";

let doc = nlp(text);

// console.log(doc.out('tags'));

//
// fs.readFile('randomText.txt', 'utf8', function(err, contents) {
//
//     let array = nlp(contents).nouns().out('freq');
//     let newArray = [];
//
//     for(i=0;i<array.length;i++){
//         // console.log(array[i]);
//         if(array[i].count > 3){
//             newArray.push(array[i]);
//         }
//     }
//
//     console.log(newArray);
// });


//split text up regexp by full stops
//for each sentence work out the structure
//seperate array for each type, maybe with a count?
//get most popular sentence structure, fill it with random words of each type.


fs.readFile('text.txt', 'utf8', function(err, contents) {

    let sentences = nlp(contents).sentences().out('array');


    for(i=0;i<sentences.length;i++){
        // let arrayOfStuff = nlp(sentences[i]).terms(0).data()[0].tags;
        //for each word in the sentence
        // let words = sentences[i].split(" ");
        // console.log(words);
        console.log(nlp(sentences[i]).out("array"));


        // console.log(words.length);
        // console.log(words[0].bestTag);
        // for(j=0; words.length;j++){
        //     //get the relevent tag
        //
        //     // console.log('here');
        //     console.log(words[j]);
        // }




        // console.log(arrayOfStuff)
    }






});





function ranDom (arr) {
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
};