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
  const [currentPage, setCurrentPage] = useState(1);
  const [tilesToShow, setTilesToShow] = useState(12);
  const [error, setError] = useState("");

  const handleTilesChange = (e) => {
    setTilesToShow(e.target.value);
  };

  const handelTilesNav = (dir) => {
    const nextPage = currentPage + dir;
    nextPage > 0 && setCurrentPage(nextPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?page=${currentPage}&results=${tilesToShow}&seed=abc`
        );
        const data = await response.json();
        setUsers(data.results);
        setError("");
      } catch (e) {
        setError(
          "Ocurrió un error en la carga de datos, por favor vuelva a intentarlo"
        );
      }
    };
    fetchData();
  }, [tilesToShow, currentPage]);

  return (
    <div className="App">
      <h1>Ipsy CodeSandbox</h1>
      <h2>HR Candidate list</h2>
      <div className="box-nav">
        <label>
          <span>Candidates to show: </span>
          <input
            type="number"
            value={tilesToShow}
            onChange={handleTilesChange}
          />
        </label>
        <div>
          <span>Current page:{currentPage} </span>
          <button
            type="button"
            onClick={() => handelTilesNav(-1)}
          >{`<`}</button>
          <button type="button" onClick={() => handelTilesNav(1)}>{`>`}</button>
        </div>
      </div>
      <ul className="box">
        {error ? (
          <div className="error">{error}</div>
        ) : (
          users.map(({ name, picture, gender, email, phone }, i) => (
            <li className="box-item" key={i}>
              <img src={picture.large} alt={""} />
              <h3>{`${name.first} ${name.last}`}</h3>
              <p>{`${phone} ${email}`}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
