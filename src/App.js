import './App.css';
import imageOne from './plan.avif';
import imageTwo from './one.avif';
import { Plans } from './Plans';

function App() {
  return (
    <div className="App">
      <div>
        <img src={imageOne} alt='plan' width="250px"/>
      </div>
      
      <Plans/>

      <div>
        <img src={imageTwo} alt="plan" width="250px"/>
      </div>
      
    </div>
  );
}

export default App;
