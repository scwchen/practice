
// How to reduce
const howToReduce = () => {
    const reducer = (a, b) => Math.max(a, b);

    let newArray = [2, 4, 212, 453, 2031, 26, 737, 100];

    console.log(newArray.reduce(reducer));

};

// Enqueue and Dequeue
const enqueueDequeue = () => {
    const firstArray = [1, 2, 3, 4, 5];
    const secondArray = [];

    console.log(firstArray);
    console.log(secondArray);
    const dequeue = (firstArray) => {
        while (firstArray.length > 0) {
            const lastFirst = firstArray.pop();
            // not sure why push is working here rather than unshift but it does work
            secondArray.push(lastFirst);
        }
    };

    console.log(firstArray);
    console.log(secondArray);

    // Push - Add to end
    // Pop - Remove from end
    // Unshift - Add to start
    // Shift - Remove from start

}

// Check if integer
const isInteger = (number) => {
    return number % 1 === 0;
};

// How to empty an array

const emptyArray = (array) => {

    // #1 - Does not work if newArray was initialized as constant
    array = [];

    // #2 - Does work if newArray was initialized as constant
    array.length = 0;

    // #3 - Splices the whole array out of the initial array leaving an empty array
    array.splice(0, array.length);
};

// Check if array

const checkIfArray = (object) => {
    if (Array.isArray(object)) {
        return true;
    } else {
        return false;
    };
};


// Reverse Words

const sentenceReverse = (sentence) => {

    const reverseString = (string, separator) => {
        // split the string by separator (this would be by a space for a sentence and a blank string for a word). Then we use the .reverse for the array that we have from the split. After this we can rejoin the array back to a string using the separator. 
        return string.split(separator).reverse().join(separator);
    };
    
    // To first reverse the order of the words
    let reversedSentence = reverseString(sentence, " ");
    
    // This reverses all the characters in the sentence
    // What this does in particular is reverse everything back such that the words are in the original order but all their individual characters are reversed.
    let reversedString = reverseString(reversedSentence, "");
    
    console.log(reversedSentence);
    
    console.log(reversedString);
    
}

