import "./top-rated.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const TopRated = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=f7b832e8d926b0c25411f38a4a8edb63`
      )
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
        <ul className="container TopRated-list">
          {data.length
            ? data.map((e) => (
                <li key={e.title} className="TopRated-item">
                  <img
                    className="TopRated-img"
                    src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                    alt=""
                  />
                  <h3 className="TopRated-title">{e.title}</h3>
                  <time className="TopRated-time">{e.release_date}</time>
                </li>
              ))
            : "Loading"}
        </ul>
      </div>
    </>
  );
};
