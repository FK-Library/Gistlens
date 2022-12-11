/*
Given an array of integers, keep a total score based on the following:
1.	Add 1 point for every even number in the array
2.	Add 3 points for every odd number in the array
3.	Add 5 points for every time you encounter a 5 in the array
Note that 0 is considered even.
Please write a function to achieve this in javascript.

Examples:
Input: [1,2,3,4,5]
Output: 13
Input: [17,19,21]
Output: 9
Input: [5,5,5]
Output: 15

*/

function totalScore(arr) {

    const evenPoints = 1;
    const oddPoints = 3;
    const has5Points = 5;
    var totalScore = 0;
    var flag=false;

    arr.forEach(element => {
        if(element === 5){
            totalScore += has5Points;
            flag=true;
        }

        if(element % 2 !== 0 && flag === false){
            totalScore += oddPoints;
        }

        if(element % 2 === 0 ){
            totalScore += evenPoints;
        }

        flag = false;
    });

    return totalScore; 
}

module.exports = totalScore;
