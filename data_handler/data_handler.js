let getGroups = require("./functions/get_groups");

exports.handleData = (data, socket) => {
  try {
    data = JSON.parse(data);
    console.log(data);
    switch (data.data.name) {
      case "getGroups":
        answer(getGroups.get(data.data.args));
      default:
        unHandledRequest(socket);
    }
  } catch (error) {
    console.error(error);
  }
};

const unHandledRequest = socket => {
  console.log("Couldn't handle request");
  //TODO: tell the client that we couldn't handle the request so it can drop the callback on its side
};

const answer = (socket, callbackId, data) => {
  try {
    socket.write(
      JSON.stringify({
        callbackId: callbackId,
        data: data
      })
    );
  } catch (e) {
    console.error(e);
  }
};
