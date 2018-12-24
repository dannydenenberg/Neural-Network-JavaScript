// let m = new Matrix(2,3);
// to see an array in the console use `console.table(my_array)`
function table(mat) {
  console.table(mat.matrix);
}

// create a new matrix
class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];

    // initialize all of the values to zero
    for (let i = 0; i < this.rows; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }


  randomize() {
    // initialize all of the values to random values
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] = Math.floor(Math.random() * 10);
      }
    }
  }


  // multiply: scalar, element-wize, or matrix product (dot product)
  // scale a number by a matrix or multiply matricies element wize
  multiply(n) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] *= n;
      }
    }
  }

  // scale a number by a matrix or add matricies element wize
  add(n) {
    // check if we need to add element wize (if we are adding matricies)
    if (n instanceof Matrix) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.matrix[i][j] += n.matrix[i][j];
        }
      }
      // otherwize
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.matrix[i][j] += n;
        }
      }
    }

  }
}