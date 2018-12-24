// let m = new Matrix(2,3);
// to see an array in the console use `console.table(my_array)`

// create a new matrix
class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    // initialize all of the values to zero
    for (let i = 0; i < this.rows; i++) {
      this.data[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = 0;
      }
    }
  }

  // for console pretty display
  table() {
    console.table(this.data);
  }


  randomize() {
    // initialize all of the values to random values
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.floor(Math.random() * 10);
      }
    }
  }

  // multiply two matricies utility function
  static multiply(a, b) {
    // dot product
    // check if dimentions are OK
    if (a.cols !== b.rows) {
      console.log("Error: Columns of A must match rows of B.")
      return undefined;
    }

    // result has number of rows of A and columns of b
    let result = new Matrix(a.rows, b.cols);


    // for every spot in the result, find the value that is going in that spot
    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {
        // dot product of values in cols

        let sum = 0;
        for (let k = 0; k < a.cols; k++) {
          sum += a.data[i][k] * b.data[k][j];
        }

        result.data[i][j] = sum;
      }
    }

    return result;
  }



  // multiply: scalar or matrix product (dot product)
  // for dot product, columns of A have to be equal to rows of B so that A * B works
  // scale a number by a matrix or multiply matricies element wize
  multiply(n) {
    if (n instanceof Matrix) {
      // dot product
      // check if dimentions are OK
      if (this.cols !== n.rows) {
        console.log("Error: Columns of A must match rows of B.")
        return undefined;
      }

      // for ease of use
      let a = this;
      let b = n;

      // result has number of rows of A and columns of b
      let result = new Matrix(a.rows, b.cols);


      // for every spot in the result, find the value that is going in that spot
      for (let i = 0; i < result.rows; i++) {
        for (let j = 0; j < result.cols; j++) {
          // dot product of values in cols

          let sum = 0;
          for (let k = 0; k < a.cols; k++) {
            sum += a.data[i][k] * b.data[k][j];
          }

          result.data[i][j] = sum;
        }
      }

      return result;

    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] *= n;
        }
      }
    }
  }

  //   rows become columns, columns become rows
  transpose() {
    let result = new Matrix(this.cols, this.rows);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.data[j][i] = this.data[i][j];
      }
    }

    return result;
  }


  // apply a function to every element of matrix
  map(func) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let val = this.data[i][j];
        this.data[i][j] = func(val);
      }
    }
  }

  // scale a number by a matrix or add matricies element wize
  add(n) {
    // check if we need to add element wize (if we are adding matricies)
    if (n instanceof Matrix) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n.data[i][j];
        }
      }
      // otherwize
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n;
        }
      }
    }

  }
}