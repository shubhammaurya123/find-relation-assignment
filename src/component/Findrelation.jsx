import React, { useState } from "react";

import "./Findrelation.css";

let path = [],
  links = [];

function dfs(start, destination, obj, visited = new Set()) {
  console.log(start);
  path.push(start);
  visited.add(start);

  const destinations = obj[start];

  for (const d of destinations) {
    if (d === destination) {
      links.push([...path, destination]);
      return;
    }

    if (!visited.has(d)) {
      dfs(d, destination, obj, visited);
    }
  }
  path.pop();
}

function FindRelation() {
  const [person1, setPerson1] = useState("");
  const [person2, setPerson2] = useState("");

  const [relationPath, setRelationPath] = useState([]);

  function findRelation(e) {
    console.log(person1, person2);
    e.preventDefault();
    let obj = localStorage.getItem("obj");
    obj = JSON.parse(obj);
    dfs(person1, person2, obj);
    console.log({ links });
    setRelationPath(links);
  }
  return (
    <>
      <form className="form" style={{ "margin-top": "140px" }}>
        <div className="mb-3 horizontal">
          <label for="exampleInputEmail1" className="form-label">
            Person 1
          </label>
          <input
            type="text"
            className="form-control half"
            id="exampleInputEmail1"
            lvalue={person1}
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
          className="btn btn-primary center btn btn-dark"
          onClick={(e) => findRelation(e)}
        >
          FindRelaion
        </button>
      </form>

      {relationPath.map((rpath) => (
        <div>
          {rpath.map((r, index) => (
            <span>
              {r}
              {index != rpath.length - 1 && " > "}
            </span>
          ))}
        </div>
      ))}
    </>
  );
}

export default FindRelation;
