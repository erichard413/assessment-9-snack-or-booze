// Part 2: Unroll
// Write a function called unroll, which takes in a square array of arrays (i.e. a grid with n rows and n columns). An input could look like this:

// const square = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];
// unroll should take in such a square array and return a single array containing the values in the square. You should obtain the values by traversing the square in a spiral: from the top-left corner, move all the way to the right, then all the way down, then all the way to the left, then all the way up, and repeat.

// For the above example, unroll should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].

// Here’s another example:

// const smallerSquare = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"]
// ];

// unroll(smallerSquare); // ["a", "b", "c", "f", "i", "h", "g", "d", "e"]
// Write tests for these cases and make sure your code passes these. Feel free to add any other tests you deem necessary.

function unroll(squareArray) {
    if (!(squareArray instanceof Array)) {
      return Error("ERROR! INPUT MUST BE ARRAY")
    }
    if (squareArray.length !== squareArray[0].length) {
       return Error("ERROR! ARRAY IS NOT A SQUARE.")
    }
    for (let i = 0; i < squareArray.length; i++) {
        if (i > 0 && squareArray[i-1].length !== squareArray[i].length) {
        return Error("ERROR! ARRAY ITEMS ARE NOT OF EQUAL LENGTH.")
      }
    }

    let newArr = [];
    let lenIdx = squareArray.length -1;

    const leftToRight = (idx) => {
      for (let x=idx; x <= lenIdx - idx; x++) {
        newArr.push(squareArray[idx][x])
      }
    }

    const topToBottom = (idx) => {
      for (let x=idx+1; x <= lenIdx -idx; x++) {
        newArr.push(squareArray[x][lenIdx-idx]);
      }
    }

    const rightToLeft = (idx) => {
      for (let x=lenIdx -idx -1; x >= 0 + idx; x--) {
        newArr.push(squareArray[lenIdx-idx][x])
      }
    }

    const bottomToTop = (idx) => {
      for (let x=lenIdx -idx -1; x > 0 + idx; x--) {
        newArr.push(squareArray[x][idx])
      }
    }

    for (let i = 0; i < squareArray.length -1; i++) {
      leftToRight(i);
      topToBottom(i);
      rightToLeft(i);
      bottomToTop(i);
    }
    return newArr;
}


module.exports = unroll;
