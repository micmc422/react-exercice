import logo from './logo.svg';
import './App.css';
import HeroSection from './components/heroHeader';
import Parent from './components/parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroSection title="Exercice React" description="Présentation des fondamentaux React." />
        <Parent className="bg-black" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
