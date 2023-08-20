import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CharactersPage from "./Pages/CharactersPage";
import CharacterDetailsPage from "./Pages/CharacterDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={CharactersPage} exact />
        <Route path="/characterDetails/:charactorId" Component={CharacterDetailsPage} />
      </Routes>
    </Router>
  );
}

export default App;
