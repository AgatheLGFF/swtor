import Header from "./components/Header";
import CharactersList from "./pages/CharactersList";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import {Routes, Route} from "react-router";
import MoviesList from "./pages/MoviesList";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/homepage" element={<Homepage/>}></Route>
        <Route path="/characters" element={<CharactersList/>}></Route>
        <Route path="/moviedetails/:id" element={<MovieDetails/>}></Route>
      </Routes> 
    </>
  );
} 

export default App;
