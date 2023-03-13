import "./tvshow.css";
import { useEffect, useState } from "react";
import axios from 'axios'

export const TvShow = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    axios
      .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=f7b832e8d926b0c25411f38a4a8edb63`
      )
      .then(function (response) {
        setDataApi(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <ul className="container tvshow-list">
          {dataApi.length
            ? dataApi.map((e) => (
                <li key={e.title} className="tvshow-item">
                  <img
                    className="tvshow-img"
                    src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                    alt=""
                  />
                  <h3 className="tvshow-title">{e.title}</h3>
                  <time className="tvshow-time">{e.release_date}</time>
                </li>
              ))
            : "Loading"}
        </ul>
      </div>
    </>
  );
};
