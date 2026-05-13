import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Body from './component/body';

const BodyProps = {
  name: "리트리버",
  location: "UK",
  breed: ["골든", "래브라도", "톨러"]
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Body {...BodyProps}/>
      <Footer />
    </div>

    // <div></div> === <div />
  );
}

export default App;
