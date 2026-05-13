import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Body from './component/body';

function ChildComp() {
  return <div>자식 컴포넌트임</div>
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Body>
        <ChildComp></ChildComp>
      </Body>
      <Footer />
    </div>

    // <div></div> === <div />
  );
}

export default App;
