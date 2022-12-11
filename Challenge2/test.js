const stack = require("./index");

const  storage = [
  1,
  '{id: 1,value: "obj"}',
  "stringHolder",
  46
];

test("Always returns default storage", () => {
  //arrange
  //act
  const result = stack(); 
  //assert
    expect(result.length).toEqual(4);
    expect(result[0]).toEqual(1);
    expect(result[1]).toEqual('{id: 1,value: "obj"}');
    expect(result[2]).toEqual('stringHolder');
    expect(result[3]).toEqual(46);
 });


test("Always stack calls push operation and returns the storage plus new element", () => {
   //arrange 
   const stackOperation = 'push';
   const stackValue = "newElemet";   
   //act
   const result = stack(stackOperation,stackValue); 
   //assert
    expect(result.length).toEqual(5);
    expect(result[4]).toEqual(stackValue);
  });

  test("Always stack calls pop operation and returns the storage minus last element", () => {
    //arrange 
    const stackOperation = 'pop';    
    //act
    const result = stack(stackOperation); 
    //assert
     expect(result.length).toEqual(3);
 
   });

  //This scenario cannot be tested as Stack always have a default storage
  //  test("Always returns a [] for empty stack", () => {
  //   //arrange 
  //   const stackOperation = 'pop';    
  //   stack(stackOperation); 
  //   stack(stackOperation); 
  //   stack(stackOperation); 
  //   //act
  //   const result = stack(stackOperation); 
  //   //assert
  //    expect(result.length).toEqual(0);
  //    expect(result).toEqual([]); 
  //  });

test("Always stack calls the peek operation", () => {
   //arrange 
   const stackOperation = 'peek'; 
   //act
   const result = stack(stackOperation); 
   console.log("result of the test : ",result) 
   //assert
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(46);
  });

test("Always stack calls swap operation and returns the storage with swapped top two elements", () => {
  //arrange 
  const stackOperation = 'swap';  
  //act
  const result = stack(stackOperation); 
  console.log("in test -swap ->", result) 
  //assert
   expect(result.length).toEqual(4);
   expect(result[3]).toEqual(storage[2]);
   expect(result[2]).toEqual(storage[3]);
 });
