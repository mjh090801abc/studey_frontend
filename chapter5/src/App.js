import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Body from './component/body';

function App() {
  const name = "문정훈"
  return (
    <div className='App'>
      <Header />
      <Body name = {name} drink = {"참소주"}/>
      <Footer />
    </div>

    // <div></div> === <div />
  );
}

export default App;
