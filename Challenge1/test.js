/*
Examples:
Input: [1,2,3,4,5]
Output: 13
Input: [17,19,21]
Output: 9
Input: [5,5,5]
Output: 15
*/
const totalScore = require("./index");

test("Given an array returns total score ", () => {
   //arrange 
   const  arr = [1,2,3,4,5];
   //act
   const result = totalScore(arr);  
   //assert
    expect(result).toEqual(13);
  });

  test("Given an array of multiple odd numbers returns total score ", () => {
   //arrange 
   const  arr = [17,19,21];
   //act
   const result = totalScore(arr);  
   //assert
    expect(result).toEqual(9);
  });

  test("Given an array of multiple 5 returns total score ", () => {
   //arrange 
   const  arr = [5,5,5];
   //act
   const result = totalScore(arr);  
   //assert
    expect(result).toEqual(15);
  });
  