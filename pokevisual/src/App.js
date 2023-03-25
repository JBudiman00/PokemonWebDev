import Info from './components/pokemoninfo.jsx';
import Team from './components/team.jsx';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <h1>Pokemon Selection</h1>
      </div>
      <h1 className="title">Players Cards</h1>
      <div className="playerCards">
        <Team />
      </div>
      <h1 className="title">Available Cards</h1>
      <div className="availableBackground">
        <Info />
      </div>
    
    </div>
  );
}

export default App;