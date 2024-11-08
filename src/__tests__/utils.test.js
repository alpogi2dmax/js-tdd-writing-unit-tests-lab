// Your tests here
import { isPalindrome } from '../utils'

describe('isPalindrome', () => {
    it('confirms if "mom" is a palindrome', () => {
        const word = 'mom';
        const confirm = isPalindrome(word);
        expect(confirm).toBe(true);
    });

    it('confirms if "RaceCar" is a palindrome regardless of case', () => {
        const word = 'RaceCar';
        const confirm = isPalindrome(word);
        expect(confirm).toBe(true);
    });

    it('returns false for an empty string', () => {
        const word = '';
        const confirm = isPalindrome(word);
        expect(confirm).toBe(false);
    });

    it('throws an error for non-alphabetic characters', () => {
        const word = 'racecar123';
        expect(() => isPalindrome(word)).toThrow('Input must only contain alphabetic characters');
    });

    it('throws an error for non-string inputs', () => {
        const word = 12345;
        expect(() => isPalindrome(word)).toThrow('Input must be a string');
    });
})