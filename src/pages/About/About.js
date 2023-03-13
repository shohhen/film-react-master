import "./about.css";
import { useEffect, useState } from "react";

export const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f7b832e8d926b0c25411f38a4a8edb63`
    )
      .then((res) => res.json())
      .then((dataApi) => setData(dataApi.results));
  }, []);

  return (
    <>
      <div>
        <ul className="popular-list container">
          {data.length
            ? data.map((e) => (
                <li key={e.title} className="popular-item">
                  <img
                    className="popular-img"
                    src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                    alt=""
                  />
                  <h3 className="popular-title">{e.title}</h3>
                  <time className="popular-time">{e.release_date}</time>
                </li>
              ))
            : "Loading"}
        </ul>
      </div>
    </>
  );
};
