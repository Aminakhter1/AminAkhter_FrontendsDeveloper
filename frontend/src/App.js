
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Explore from './components/Explore';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Header from './components/Header';
import RoadmapPhase from './components/RoadmapPhase';
import Tokenomics from './components/Tokenomics';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <FeatureSection/>
    <About/>
    <Tokenomics/>
    <RoadmapPhase/>
    <Explore/>
    <Footer/>
    </>
  );
}

export default App;
