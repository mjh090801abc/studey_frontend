import logo from './logo.svg';
import './App.css';
import Controller from './component/Controller';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [text, ] = (value) => {
    setCount(count + value)
  }

  const handleOnChangeText = (e) => {
    setText(e.target.value)
  }

  useEffect(()=>{
    console.log("count 값이 바뀌었어요. ", count, text)
  }, [count, text])

  return (
    <div className='App'>
      <h1>심플 카운터</h1>
      <section>
        <input value={text} onChange = {{handleOnChangeText}} />
      </section>
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
