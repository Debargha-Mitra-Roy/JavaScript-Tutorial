/* Explore the includes(), startswith() & endswith() functions of the string */

// includes()
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// startswith()
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));    // expected output: true
console.log(str1.startsWith('Sat', 3)); // expected output: false

// endswith()
const str = 'To be, or not to be, that is the question.';

console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be')); // false
console.log(str.endsWith('to be', 19)); // true