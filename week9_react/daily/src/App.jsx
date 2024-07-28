import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="App">
      <Carousel>
        <div>
          <img src="hongkong.jpg" alt='hongkong'/>
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="macao.webp" alt='macao'/>
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="japan.webp" alt='japan'/>
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="lasvegas.webp" alt='lasvegas'/>
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
