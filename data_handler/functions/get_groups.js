const data = [
  {
    //red coalition example dataset
    data: {
      coalition: "red"
    }
  },
  {
    //blue coalition example dataset
    data: {
      coalition: "blue"
    }
  }
];

exports.get = args => {
  if (args && args[0]) {
    return data[args[0]];
  }
};
