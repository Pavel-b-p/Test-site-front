import axios from 'axios';

const src = "http://93.187.181.236:26556";

function App() 
{

  axios.get(src).then(data => 
  {
    console.log(data);
  });

  return (
    <div className="App">
      ПРИВЕТ, КОТЯТА
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=3244ea7879b162250059300b984e87bf-5221713-images-thumbs&n=13"/>
      </div>
    </div>
  );
}

export default App;
