import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import CarouselPart from './components/Carousel'
import Jumbotron from './components/Jumbotron'
import Guide from './components/Guide'
import Icons from './components/Icons'
import Footer from './components/Footer'
import Promo from './components/PromoMenarik'
import Apartment from './components/Apartment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Guide />
      <CarouselPart />
      <Icons />
      <Promo />
      <Apartment />
      <Jumbotron />

      <Footer />
    </div>
    
  );
}

export default App;
