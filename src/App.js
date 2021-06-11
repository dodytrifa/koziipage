import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import CarouselPart from './components/Carousel'
import Jumbotron from './components/Jumbotron'
import Guide from './components/Guide'
import Icons from './components/Icons'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Guide />
      <CarouselPart />
      <Icons />
      <Jumbotron />
      <Footer />
    </div>
    
  );
}

export default App;
