import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Body from './component/body';

function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
      <Footer />
    </div>

    // <div></div> === <div />
  );
}

export default App;
