import React, {useState} from "react";
import { Link } from "react-router-dom";

const JoinRoom = () => {
  const [room, setRoom] = useState("");
  const [go, setGo] = useState(false);

  const handleRoomInput = (e) => {
    setRoom(e.target.value);
  };
  socket.on("enter-game", () => {
    setGo(true);
  });
  const handleRoomClick = () => {
    console.log(room);
    socket.emit("new-room", { room, name: user.name });
  };
  return (
    <>
      <label className="label">Enter Room Name:</label>
      <input className="input" type="text" placeholder="Text input" onChange={handleRoomInput} />
      <div className="control">
        <button className="button is-primary" onClick={handleRoomClick}>
          <Link to="/loggedIn">Join Game!</Link>
        </button>
      </div>
    </>
  );
};

export default JoinRoom;
