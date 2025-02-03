import logo from './logo.svg';
import './App.css';
import HeroSection from './components/heroHeader';
import Compteur from './components/clickCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroSection title="Exercice React" description="Présentation des fondamentaux React." />
        <Compteur />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
