import './App.css';
import {useState} from "react";
import RepExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import NewExercise from "./components/RunningExercise";


function App() {
  let screen;
  let [currentScreen, setCurrentScreen] = useState("menu")
  let [currentExercise, setCurrentExercise] = useState("none")

  if (currentScreen === "menu"){
    screen =
    <>
    <h1>Exercise App</h1>
    <ul>
    <li><button onClick={() => {setCurrentExercise("Repetition Exercise"); setCurrentScreen("reps")}}>Repetition-ups</button></li>
    <li><button onClick={() => {setCurrentExercise("Duration Exercise"); setCurrentScreen("duration")}}>Duration</button></li>
    <li><button onClick={() => {setCurrentExercise("New Exercise"); setCurrentScreen("timer")}}>Running</button></li>

    </ul>
    </>
  }
  else if(currentScreen === "duration"){
    screen = <DurationExercise name={currentExercise}/>
  }
  else if(currentScreen === "reps"){
    screen = <RepExercise name={currentExercise}/>
  }
  else if(currentScreen === "timer"){
    screen = <NewExercise name={currentExercise}/>
  }
  return (
    <div className="App">
      <>{screen}</>
    </div>
  );
}

export default App;