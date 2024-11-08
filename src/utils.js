// Your code here
export function isPalindrome(word) {

    if (word === '') {
        return false
    }
    if (typeof word !== 'string') {
        throw new Error('Input must be a string');
    }

    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error('Input must only contain alphabetic characters');
    }
    let reverseWord = word.toLowerCase().split('').reverse().join('');
    return word.toLowerCase() === reverseWord;
}