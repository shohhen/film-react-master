import "./upcomming.css";
import { useEffect, useState } from "react";
import axios from 'axios'
import {Loader} from '../../Components/Loader'

export const UpComming = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=f7b832e8d926b0c25411f38a4a8edb63`
      )
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return (
    <>
      <div>
        <ul className="container upocmming-list">
          {data.length
            ? data.map((e) => (
                <li key={e.title} className="upocmming-item">
                  <img
                    className="upocmming-img"
                    src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                    alt=""
                  />
                  <h3 className="upocmming-title">{e.title}</h3>
                  <time className="upocmming-time">{e.release_date}</time>
                </li>
              ))
            : <Loader />}
        </ul>
      </div>
    </>
  );
};
