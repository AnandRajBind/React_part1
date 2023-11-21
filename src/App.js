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
    <div>


 <DogCard name='bruno' image='https://thumbs.dreamstime.com/b/dog-love-rose-valentines-jack-russell-looking-staring-you-lying-bed-petal-roses-as-background-holding-77736960.jpg'/>
 <DogCard name='Tiger' image=' https://cdn.shopify.com/s/files/1/0981/1436/files/the-dog-holds-a-bouquet-of-roses-in-his-mouth-2021-09-04-09-21-56-utc_1.jpg?v=1644361141'/>
    </div>
  );
}

export default App;
