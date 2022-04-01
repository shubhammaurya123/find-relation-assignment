import React from "react";

export default function Navbaar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">FriendRelation</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/findrelation">
                FindRelation
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
