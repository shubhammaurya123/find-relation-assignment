import React, { useState } from "react";
import "./addfriend.css";

function Addfriend() {
  let obj = JSON.parse(localStorage.getItem("obj"));
  if (obj == null) obj = {};
  const [person1, setPerson1] = useState("");
  const [person2, setPerson2] = useState("");
  function addFriendShip(e) {
    e.preventDefault();

    if (!obj.hasOwnProperty(person1)) {
      obj[person1] = [];
    }
    if (!obj.hasOwnProperty(person2)) {
      obj[person2] = [];
    }
    obj[person1].push(person2);
    obj[person2].push(person1);

    console.log(obj);
    localStorage.setItem("obj", JSON.stringify(obj));
  }
  return (
    <>
      <form className="form" style={{ "margin-top": "100px" }}>
        <div className="mb-3 horizontal">
          <label for="exampleInputEmail1" className="form-label">
            Person 1
          </label>
          <input
            type="text"
            className="form-control half"
            id="exampleInputEmail1"
            value={person1}
            onChange={(e) => setPerson1(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="Enter first friend name"
          />
        </div>
        <div className="mb-3 horizontal">
          <label for="exampleInputPassword1" className="form-label">
            Person 2
          </label>
          <input
            type="text"
            className="form-control half"
            value={person2}
            onChange={(e) => setPerson2(e.target.value)}
            id="exampleInputPassword1"
            placeholder="Enter second frined name"
          />
        </div>

        <button
          type="submit"
          className="btn btn-success center"
          onClick={(e) => addFriendShip(e)}
        >
          Add FriendShip
        </button>
      </form>
    </>
  );
}

export default Addfriend;
