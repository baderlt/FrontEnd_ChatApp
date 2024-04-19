
const CallUser=(id,pic,me,name,Socket,handleConnectionRef)=>{
  
  let stream;

  // var getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia).bind(navigator);
   
  // getUserMedia({
  //     video: true,
  //     audio: true //optional
  // },  (stream_) =>{    
  // stream=stream_;
  // },(err)=>{console.log(err)});

  
  const peer = new SimplePeer({
    initiator: true,
    trickle: false,
    stream: stream
  })
  peer.on("signal", (data) => {
    Socket.emit("callUser", {
      signalData: data,
      userToCall: id,
      from: me,
      name: name,
      pic:pic
    })
  })
  peer.on("stream", (stream_) => {
    
    //   userVideo.current.srcObject = stream
    console.log("straming");
    console.log(stream);
    
  })
  Socket.on("callAccepted", (signal) => {
   console.log('call accepted');
    peer.signal(signal)
  })

handleConnectionRef(peer)
}
export default CallUser;