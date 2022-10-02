import './css/App.css';
import './css/stamp.css'
import esty from './components/esty.json';
import Listing from './components/Listing';


function App() {
  const data = esty.filter((item) => item.state === 'active');
  return (
    <div className="App">
      <Listing items={data}/>
    </div>
  );
}

export default App;
