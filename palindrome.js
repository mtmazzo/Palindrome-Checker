function isPalindrome(inputString) {
    var revString = inputString.split('').reverse().join('');
    return (inputString == revString) ? true : false;
}

  //Return true.
  console.log(isPalindrome("racecar"));

  //Return false.
  console.log(isPalindrome("carrot"));