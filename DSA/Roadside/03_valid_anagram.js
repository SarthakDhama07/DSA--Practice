// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// 1st approach

const isAanagram = function(s, t){
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')

    return s === t;
};
isAanagram(anagram, nagaram);