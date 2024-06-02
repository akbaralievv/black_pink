import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AudioSection from './components/sections/audioSection/AudioSection';
import GastrolsSection from './components/sections/gastrolsSection/GastrolsSection';
import HomeSection from './components/sections/homeSection/HomeSection';
import TeamSection from './components/sections/teamSection/TeamSection';

function App() {
  return (
    <div className="bg-gray-900 dark flex flex-col min-h-screen">
      <Header />
      <HomeSection />
      <TeamSection />
      <AudioSection />
      <GastrolsSection />
      <Footer />
    </div>
  );
}

export default App;
