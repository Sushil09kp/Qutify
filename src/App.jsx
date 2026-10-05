import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import FAQ from "./components/FAQ/FAQ";

function App() {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const [top, news] = await Promise.all([
          axios.get("https://qtify-backend.labs.crio.do/albums/top"),
          axios.get("https://qtify-backend.labs.crio.do/albums/new"),
        ]);
        // dono list jodo, same album do baar na aaye isliye id se dedupe
        const all = [...top.data, ...news.data];
        const unique = all.filter(
          (album, index) => all.findIndex((a) => a.id === album.id) === index
        );
        setSearchData(unique);
      } catch (err) {
        console.error("Search data fetch failed", err);
      }
    };
    fetchSearchData();
  }, []);

  return (
    <>
      <Navbar searchData={searchData} />
      <Hero />
      <Section
        title="Top Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/top"
      />
      <Section
        title="New Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/new"
      />
      <Section
        title="Songs"
        endpoint="https://qtify-backend.labs.crio.do/songs"
        type="song"
      />
      <FAQ />
    </>
  );
}

export default App;