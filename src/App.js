import axios from 'axios';

const src = "http://93.187.181.236:26556";

function App() {

  axios.get(src).then(data => 
  {
    console.log(data);
  });

  return (
    <div className="App">
      ПРИВЕТ, КОТЯТА
    </div>
  );
}

export default App;
