const transpose = function (matrix) {
    let output = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      let innerArray = [];
  
      for (let j = 0; j < matrix.length; j++) {
        innerArray.push(matrix[j][i]);
      }
  
      output.push(innerArray);
    }
  
    return output;
  };

const diagonalArray1 = (matrix) => {
    let diagonalArrayA = [];
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length;j++) {
          if(diagonalArrayA[j+i]) {
            diagonalArrayA[j+i].push(matrix[i][j]);
          } else {
            diagonalArrayA[j+i] = [];
            diagonalArrayA[j+i].push(matrix[i][j]);
          }
        }
    }
    return diagonalArrayA;
}

const diagonalArray2 = (matrix) => {
    let diagonalArrayB = [];
    for (i = matrix.length - 1; i >= 0; i--) {
        for (j = matrix[i].length - 1; j >= 0 ;j--) {
          
          if(diagonalArrayB[j-i+matrix[i].length]) {
            diagonalArrayB[j-i+matrix[i].length].push(matrix[i][j]);
          } else {
            diagonalArrayB[j-i+matrix[i].length] = [];
            diagonalArrayB[j-i+matrix[i].length].push(matrix[i][j]);
          }
          
        }
      
      }
    return diagonalArrayB;
}



const wordSearch = (letters, word) => { 
    const reversedWord = word.split('').reverse().join('')
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reversedWord)) return true
    }
    
    const transposeLetters = transpose(letters);
    const verticalJoin = transposeLetters.map(ls => ls.join(''))
    for (v of verticalJoin) {
        if (v.includes(word) || v.includes(reversedWord)) return true
    }
    
    const diagonalArray1Join = diagonalArray1(letters).map(ls => ls.join(''))
    const diagonalArray2Join = diagonalArray2(letters).map(ls => ls.join(''))
    for (a of diagonalArray1Join) {
        if (a.includes(word) || a.includes(reversedWord)) return true
    }
    for (b of diagonalArray2Join) {
        if (b.includes(word) || b.includes(reversedWord)) return true
    }



    return false
}

module.exports = wordSearch

