import './App.css';
import Navbar from './components/Navbar'
import CarouselPart from './components/Carousel'
import Jumbotron from './components/Jumbotron'
import Guide from './components/Guide'
import Icons from './components/Icons'
import Footer from './components/Footer'
import Promo from './components/PromoMenarik'
import Apartment from './components/Apartment';
import Produk from './components/Produk';
import ProdukBaru from './components/ProdukBaru';
import CookieConsent from 'react-cookie-consent';

function App() {
  return (
    <div className="App">
      <CookieConsent debug={true}>This site uses cookies</CookieConsent>
      <Navbar />
      <Guide />
      <CarouselPart />
      <Icons />
      <Promo />
      <ProdukBaru />
      <Produk />
      <Apartment />
      <Jumbotron />
      <Footer />
    </div>
  );
}

export default App;
