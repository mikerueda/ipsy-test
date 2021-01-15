import React, { useEffect, useState } from "react";
import "./styles.css";

/**
 * Assesment: consume the candidate list from ramdom user api
 * https://randomuser.me/documentation#pagination
 *
 * - create candidate grid with cards:
 *     mobile: 1 tile
 *     tablet: 2 tiles per row
 *     desktop: 3 tiles per row
 *   mockup: https://www.behance.net/gallery/66677473/Day-590-Users-List-UI-Design
 * - implement pagination
 * - provide the capability to select many candidates show all of them for HR department
 *
 */
export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setUsers(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Ipsy CodeSandbox</h1>
      <h2>HR Candidate list</h2>
      <ul className="box">
        {users.map(({ name, picture, gender, email, phone }, i) => (
          <li className="box-item" key={i}>
            <img src={picture.thumbnail} alt={""} />
            <p>{`${name.first} ${name.last}`}</p>
            <p>{gender}</p>
            <p>{email}</p>
            <p>{phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
