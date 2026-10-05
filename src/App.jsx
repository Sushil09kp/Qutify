import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <>
      <Navbar />
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