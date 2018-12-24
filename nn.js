function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

class NeuralNetwork {
  constructor(input_nodes, hidden_nodes, output_nodes) {
    this.input_nodes = input_nodes;
    this.hidden_nodes = hidden_nodes;
    this.output_nodes = output_nodes;

    // weights between the input and hidden layers (ih)
    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);

    // weights betwee the hidden and output layers
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);

    // randomize the weights. the matrix randomize function generates a number between -1 and 1 (float)
    this.weights_ih.randomize();
    this.weights_ho.randomize();

    // the biases - vectors that will be multiplied by 1 and added
    this.bias_h = new Matrix(this.hidden_nodes, 1);
    this.bias_o = new Matrix(this.output_nodes, 1);
    this.bias_o.randomize();
    this.bias_h.randomize();
  }


  feedforward(input_array) {
    /* --------Generate hidden output --------- */

    // convert input array into matrix
    let input = Matrix.fromArray(input_array);
    // matrix product between hidden and weights
    let hidden = Matrix.multiply(this.weights_ih, input);
    // add in the bias
    hidden.add(this.bias_h);
    // activation function to each hidden node
    hidden.map(sigmoid);


    /* --------Generate output --------- */
    // multiply the weights
    let output = Matrix.multiply(this.weights_ho, hidden);
    // add the bias to each node
    output.add(this.bias_o);
    // each node has to run the activation function
    output.map(sigmoid);

    // convert the output matrix to an array
    return output.toArray();
  }

  train(inputs, answer) {


  }

}