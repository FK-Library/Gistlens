/*
tribonacci([0, 0, 1], 9) // should == [0, 0, 1, 1, 2, 4, 7, 13, 24]
tribonacci([1, 1, 1], 5) // should == [1, 1, 1, 3, 5]
tribonacci([1, 2, 3], 2) // should == [1, 2]
*/
const tribonacci = require("./index");

test("Given ([0, 0, 1], 9) array returns tribonacci", () => {
   //arrange 
   const  arr = [0, 0, 1];
   const length=9;
   //act
   const result = tribonacci(arr,length);  
   //assert
    expect(result.length).toEqual(length);
    expect(result[0]).toEqual(0);
    expect(result[1]).toEqual(0);
    expect(result[2]).toEqual(1);
    expect(result[3]).toEqual(1);
    expect(result[4]).toEqual(2);
    expect(result[5]).toEqual(4);
    expect(result[6]).toEqual(7);
    expect(result[7]).toEqual(13);
    expect(result[8]).toEqual(24);
  });

  test("Given ([1, 1, 1], 5) array returns tribonacci", () => {
    //arrange 
    const  arr = [1, 1, 1];
    const length = 5;
    //act
    const result = tribonacci(arr,length);  
    //assert
     expect(result.length).toEqual(length);
     expect(result[0]).toEqual(1);
     expect(result[1]).toEqual(1);
     expect(result[2]).toEqual(1);
     expect(result[3]).toEqual(3);
     expect(result[4]).toEqual(5);     
  });

  test("Given ([1, 2, 3], 2) array returns tribonacci", () => {
    //arrange 
    const  arr = [1, 2, 3];
    const length = 2;
    //act
    const result = tribonacci(arr,length);  
    //assert
     expect(result.length).toEqual(length);
     expect(result[0]).toEqual(1);
     expect(result[1]).toEqual(2);
  });
  