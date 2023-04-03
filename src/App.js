import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const src = "";

function App() {

  axios.get(src).then(data => {
    console.log(data);
  });

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
