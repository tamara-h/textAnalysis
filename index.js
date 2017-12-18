let natural = require('natural');
let fs = require('fs');
let nlp = require('compromise');
let poem = require('poemify');

// let token = new natural.WordTokenizer();
natural.PorterStemmer.attach();

let finalSentence = "";


//split text up regexp by full stops
//for each sentence work out the structure
//seperate array for each type, maybe with a count?
//get most popular sentence structure, fill it with random words of each type.
//random sentence structure?

let nouns = [];
let verbs = [];
let prepositions = [];
let adjectives = [];
let determiners = [];
let conjunctions = [];
let negatives = [];
let dates = [];
let values = [];
let verbPhrases = [];
let questionWords = [];
let adverbs = [];
let conditions = [];
let expressions = [];
let adjectivePhrases = [];
let contractions = [];
let currency = [];


exports.returnPoem = () => {

    return new Promise((resolve, reject) => {
        fs.readFile('./garlic.txt', 'utf8', function (err, contents) {

            if (contents) {
                let sentences = nlp(contents).sentences().out('array');

                let numberOfSentences = sentences.length;
                let arrayOfStructures = [];

                for (i = 0; i < numberOfSentences; i++) {
                    //sentence length
                    let sentenceLength = nlp(sentences[i]).terms().data().length;

                    let structureArray = [];
                    for (j = 0; j < sentenceLength; j++) {
                        let typeOfWord = nlp(sentences[i]).terms().data()[j].bestTag;
                        let actualWord = nlp(sentences[i]).terms().data()[j].text;
                        structureArray.push(typeOfWord);

                        switch (typeOfWord) {
                            case "Noun":
                                nouns.push(actualWord);
                                break;
                            case "Verb":
                                verbs.push(actualWord);
                                break;
                            case "Preposition":
                                prepositions.push(actualWord);
                                break;
                            case "Adjective":
                                adjectives.push(actualWord);
                                break;
                            case "Determiner":
                                determiners.push(actualWord);
                                break;
                            case "Conjunction":
                                conjunctions.push(actualWord);
                                break;
                            case "Negative":
                                negatives.push(actualWord);
                                break;
                            case "Date":
                                dates.push(actualWord);
                                break;
                            case "Value":
                                values.push(actualWord);
                                break;
                            case "VerbPhrase":
                                verbPhrases.push(actualWord);
                                break;
                            case "QuestionWord":
                                questionWords.push(actualWord);
                                break;
                            case "Adverb":
                                adverbs.push(actualWord);
                                break;
                            case "Condition":
                                conditions.push(actualWord);
                                break;
                            case "Expression":
                                expressions.push(actualWord);
                                break;
                            case "AdjectivePhrase":
                                adjectivePhrases.push(actualWord);
                                break;
                            case "Contraction":
                                contractions.push(actualWord);
                                break;
                            case "Currency":
                                currency.push(actualWord);
                                break;
                            default:
                            //console.log("ERROR!!! UNCAUGHT TYPE: " + typeOfWord);
                        }
                    }

                    arrayOfStructures.push(structureArray);

                }


                for (p = 0; p < 2; p++) {
                    let chosenStructure = randomArrayMember(arrayOfStructures);

                    for (k = 0; k < chosenStructure.length; k++) {
                        switch (chosenStructure[k]) {
                            case "Noun":
                                finalSentence = finalSentence + randomArrayMember(nouns) + " ";
                                break;
                            case "Verb":
                                finalSentence = finalSentence + randomArrayMember(verbs) + " ";
                                break;
                            case "Preposition":
                                finalSentence = finalSentence + randomArrayMember(prepositions) + " ";
                                break;
                            case "Adjective":
                                finalSentence = finalSentence + randomArrayMember(adjectives) + " ";
                                break;
                            case "Determiner":
                                finalSentence = finalSentence + randomArrayMember(determiners) + " ";
                                break;
                            case "Conjunction":
                                finalSentence = finalSentence + randomArrayMember(conjunctions) + " ";
                                break;
                            case "Negative":
                                finalSentence = finalSentence + randomArrayMember(negatives) + " ";
                                break;
                            case "Date":
                                finalSentence = finalSentence + randomArrayMember(dates) + " ";
                                break;
                            case "Value":
                                finalSentence = finalSentence + randomArrayMember(values) + " ";
                                break;
                            case "VerbPhrase":
                                finalSentence = finalSentence + randomArrayMember(verbPhrases) + " ";
                                break;
                            case "QuestionWord":
                                finalSentence = finalSentence + randomArrayMember(questionWords) + " ";
                                break;
                            case "Adverb":
                                finalSentence = finalSentence + randomArrayMember(adverbs) + " ";
                                break;
                            case "Condition":
                                finalSentence = finalSentence + randomArrayMember(conditions) + " ";
                                break;
                            case "Expression":
                                finalSentence = finalSentence + randomArrayMember(expressions) + " ";
                                break;
                            case "AdjectivePhrase":
                                finalSentence = finalSentence + randomArrayMember(adjectivePhrases) + " ";
                                break;
                            case "Contraction":
                                finalSentence = finalSentence + randomArrayMember(contractions) + " ";
                                break;
                            case "Currency":
                                finalSentence = finalSentence + randomArrayMember(currency) + " ";
                                break;
                            default:
                            // console.log("error");
                            // reject("error");
                        }
                    }

                }

                resolve(new poem(finalSentence).generate());
            }
            else {
                console.log(err);
                reject(err);
            }
        });

    })


};

// exports.returnPoem()
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });


function randomArrayMember(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
};