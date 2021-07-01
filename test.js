const nestedArray=  [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],]


let diagonalArray1 = [];

for (i = 0; i < nestedArray.length; i++) {
  for (j = 0; j < nestedArray[i].length;j++) {
    if(diagonalArray1[j+i]) {
      diagonalArray1[j+i].push(nestedArray[i][j]);
    } else {
      diagonalArray1[j+i] = [];
      diagonalArray1[j+i].push(nestedArray[i][j]);
    }
  }
}

let diagonalArray2 = [];

for (i = nestedArray.length - 1; i >= 0; i--) {
  for (j = nestedArray[i].length - 1; j >= 0 ;j--) {
    
    if(diagonalArray2[j-i+nestedArray[i].length]) {
      diagonalArray2[j-i+nestedArray[i].length].push(nestedArray[i][j]);
    } else {
      diagonalArray2[j-i+nestedArray[i].length] = [];
      diagonalArray2[j-i+nestedArray[i].length].push(nestedArray[i][j]);
    }
    
  }

}

console.log(diagonalArray1)
console.log(diagonalArray2)

