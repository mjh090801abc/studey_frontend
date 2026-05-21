import logo from './logo.svg';
import './App.css';
import Controller from './component/Controller';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const handleSetCount = (value) => {
    setCount(count + value)
  }
  return (
    <div className='App'>
      <h1>심플 카운터</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
