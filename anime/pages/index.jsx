
import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    GetAnime();
  };
  const GetAnime = () => {
    // e.preventDefault()
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${search}`)
      .then((res) => {
        setAnimeList(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetAnime();
  }, [search]);

  return (
    <>


      <div className={styles.header}>
        <h1>
          The <strong>Anime</strong>
        </h1>

        {/* <form className={styles.search} onSubmit={handleSearch}  > */}
        <form className={styles.search} onSubmit={handleSubmit}>
          <input
            type="search"
            required
            placeholder="Search Anime"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      {/* <div className={styles.container}>
        <ul className={styles.row}> */}
  <div className={styles.row}>
  {animeList.map((item, index) => {
        return (
          <div className={styles.container} key={index}>
            <div className={styles.card}>
              <img
                src={item.images.jpg.large_image_url}
                alt={item.images.jpg.large_image_url}
              />


              <h2>{item.title}</h2>

              <p>score: {item.score} /10</p>
              <p>duration: {item.duration} </p>
      {/* <p>studios: {item.studios[0].name} </p> */}

       <button className={styles.btn}>
                <a href={item.url} target="_blank">
                  Read More
                </a>
              </button>
            </div>
          </div>
        );
      })} 
  </div>



     
    </>
  );
}
