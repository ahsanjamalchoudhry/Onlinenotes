import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Navbar from "./components/Navbar";
import Alert from './components/Alert'


function App() {
  return (
    <>
   
    <NoteState>
      <Router>
      <Navbar/>
      <Alert message={"nice work"}/>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
             <Route path="/about" element={<About/>}>
          </Route>
          </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
