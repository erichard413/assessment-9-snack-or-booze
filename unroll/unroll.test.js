const unroll = require("./unroll");

const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const evenLargerSquare = [
  [1,2,3,4,5,6,7,8,9,10],
  [11,12,13,14,15,16,17,18,19,20],
  [21,22,23,24,25,26,27,28,29,30],
  [31,32,33,34,35,36,37,38,39,40],
  [41,42,43,44,45,46,47,48,49,50],
  [51,52,53,54,55,56,57,58,59,60],
  [61,62,63,64,65,66,67,68,69,70],
  [71,72,73,74,75,76,77,78,79,80],
  [81,82,83,84,85,86,87,88,89,90],
  [91,92,93,94,95,96,97,98,99,100],
]



describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  it("should error -> input not array", ()=> {
    try {
      unroll('blah')
    } catch (e) {
      expect(e).toContain('INPUT MUST BE ARRAY')
    }
  })
  it("should error -> input not square array", ()=>{
    try {
      unroll([0,1,2], [2,2,2])
    } catch (e) {
      expect(e).toContain('ARRAY IS NOT SQUARE')
    }
  })
  it("should error -> array items do not have equal length", ()=>{
    try {
      unroll([0,1,2], [2,2], [0,2,3])
    } catch (e) {
      expect(e).toContain('ARRAY ITEMS ARE NOT OF EQUAL LENGTH')
    }
  })
  it("should unroll smallerSquare correctly", ()=>{
    expect(unroll(smallerSquare)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"])
  })
  it("should unroll square correctly", ()=>{
    expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
  })
  it('should unroll 100x100 square correctly', ()=>{
    expect(unroll(evenLargerSquare)).toEqual([
      1,2,3,4,5,6,7,8,9,10,
      20,30,40,50,60,70,80,90,100,
      99,98,97,96,95,94,93,92,91,
      81,71,61,51,41,31,21,11,
      12,13,14,15,16,17,18,19,
      29,39,49,59,69,79,89,
      88,87,86,85,84,83,82,
      72,62,52,42,32,22,
      23,24,25,26,27,28,
      38,48,58,68,78,
      77,76,75,74,73,
      63,53,43,33,
      34,35,36,37,
      47,57,67,
      66,65,64,
      54,44,
      45,46,
      56,55
    ])
  })
});
