import Board from "./components/board";
import Ships from "./components/ships";


function App() {
  return (
    <div className="App">
      <div className="gameboard">
        <div className="board-div">
          <Board />
        </div>
        <div className="board-div">
          <Board />
        </div>
      </div>
      <Ships />
    </div>
  );
}

export default App;
