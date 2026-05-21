import logo from './logo.svg';
import './App.css';
import Controller from './component/Controller';

function App() {
  return (
    <div className='App'>
      <h1>심플 카운터</h1>
      <section>
        <Viewer />
        <Controller />
      </section>
    </div>
  );
}

export default App;
