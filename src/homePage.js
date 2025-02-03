import logo from './logo.svg';
import HeroSection from './components/heroHeader';
import Parent from './components/parent';

function HomePage() {
  return (
      <main>
        <HeroSection title="Exercice React" description="Présentation des fondamentaux React." />
        <Parent className="bg-black" />
        <img src={logo} className="App-logo" alt="logo" />
      </main>
  );
}

export default HomePage;
