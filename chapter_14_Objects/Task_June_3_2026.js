function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    if (str.toLowerCase() === reversed.toLowerCase()) {
        console.log(`${str} is a palindrome: true`);
    } else {
        console.log(`${str} is a palindrome: false`);
    }
}

isPalindrome("Racecar");
isPalindrome("Testing");

function isAnagram(word1, word2) {
    let sorted1 = word1.toLowerCase().split('').sort().join('');
    let sorted2 = word2.toLowerCase().split('').sort().join('');

    if (sorted1 === sorted2) {
        console.log(`${word1} and ${word2} are anagrams: true`);
    } else {
        console.log(`${word1} and ${word2} are anagrams: false`);
    }
}

isAnagram("Listen", "Silent");
isAnagram("House", "Mouse");