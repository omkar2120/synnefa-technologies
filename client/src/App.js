import './App.css';
import MovieList from './component/MovieList';
import  {Route, Router ,Routes} from "react-router-dom"
import MovieDetails from './component/MovieDetails';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<MovieList/>} />
      <Route path="/movie/:id" element={<MovieDetails/>} />

    </Routes>
       
    </div>
  );
}

export default App;
