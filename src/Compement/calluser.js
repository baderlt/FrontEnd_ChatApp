import Emitter from "../Events/stream_event";

const CallUser = (id, pic, me, name, Socket, handleConnectionRef) => {
  let stream;
  Emitter.emit("caling", {pic,name});
  var getUserMedia = (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia
  ).bind(navigator);

  getUserMedia(
    {
      video: true,
      audio: true, 
    },
    (stream_) => {
      stream = stream_;
    },
    (err) => {
      console.log(err);
    }
  );

  const peer = new SimplePeer({
    initiator: true,
    trickle: false,
    stream: stream,
  });
  peer.on("signal", (data) => {
    Socket.emit("callUser", {
      signalData: data,
      userToCall: id,
      from: me,
      name: name,
      pic: pic,
    });
  });
  peer.on("stream", (stream_) => {
    Emitter.emit("UserStream", stream_);
    console.log("straming");
  });
  Socket.on("callAccepted", (signal) => {
    Emitter.emit("myStream", stream);
    console.log("call accepted");
    peer.signal(signal);
  });

  handleConnectionRef(peer);
};
export default CallUser;
