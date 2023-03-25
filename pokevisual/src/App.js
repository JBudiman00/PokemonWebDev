import Info from './components/pokemoninfo.jsx';
import Team from './components/team.jsx';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <h1>Pokemon Selection</h1>
      </div>
      <div className="playerCards">
        <Team />
      </div>
    <div className="availableCards">
      <Info />
    </div>
    
    </div>
  );
}

export default App;