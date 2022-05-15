// import { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link,Route} from 'wouter';

function App() {
  // const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        {/* <button onClick={()=>setKeyword('mapache')}>
          Change keyword
        </button> */}
        <h1>App</h1>
        <Link to="/gif/pandas">Gifs de Pandas</Link>
        <Link to="/gif/argentina">Gifs de Argentina</Link>
        <Link to="/gif/España">Gifs de España</Link>
        <Route component={ListOfGifs}
        path="/gif/:keyword"/>

      </section>
    </div>
  );
}

export default App;
