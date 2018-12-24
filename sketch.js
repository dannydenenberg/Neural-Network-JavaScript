function setup() {
  let nn = new NeuralNetwork(2, 2, 10);
  let input = [1, 0];
  let output = nn.feedforward(input);
  console.table(output);
}