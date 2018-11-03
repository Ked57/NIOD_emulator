const data = [
  {
    //red coalition example dataset
  },
  {
    //blue coalition example dataset
  }
];

exports.get = args => {
  if (args && args[0]) {
    return data[args[0]];
  }
};
