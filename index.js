function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split("").reverse().join("");
  console.log(reverseWord)
  if(word === reverseWord){
    return true;
  } else{
    return false;
  }

}

/* 
  Add your pseudocode here
   Declare a function called isPalindrome 
  isPalindrome takes in a word argument
  Inside the function, declare a variable whose value reverses the letters in the argument
  If reverseWords is same as word return false else t
*/

/*
  Add written explanation of your solution here
  the function takes a variable word representing the string
  To reverse word 
      Separate letters in word into an array via split method
      reverse the order of the words via the array reverse methods
      join the words back together via join 
  Add an if statement returning true if the string reversed 
  is the same as its original form .Else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
