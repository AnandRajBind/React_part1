import logo from './logo.svg';
import './App.css';
// default import 
// import DogCard from './DogCard'
// named import
// import { Image, DogCard} from './DogCard';
// import default and named both
// import DogCard,{ Image } from './DogCard';
import DogCard from './DogCard';

function App() {
  return (
    <div className="App">
 {/* jsx is html like syntex  */}
<button id='btn'>
  <span>
    Submit
  </span>
</button>

 <DogCard/>
 <DogCard/>
 
    </div>
  );
}

export default App;
