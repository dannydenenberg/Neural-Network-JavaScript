// var m = new Matrix(2,3);

// create a new matrix
function Matrix(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.matrix = [];

  // initialize all of the values to zero
  for (var i = 0; i < this.rows; i++) {
    this.matrix[i] = [];
    for (var j = 0; j < this.cols; j++) {
      this.matrix[i][j] = 0;
    }
  }
}


// scalarly multiply a number by a matrix
// a method of all matrix classes
Matrix.prototype.multiply = function(n) {
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      this.matrix[i][j] *= n;
    }
  }
}

// scale a number by a matrix
Matrix.prototype.add = function(n) {
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      this.matrix[i][j] += n;
    }
  }
}