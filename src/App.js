import './App.css';
import Background from './components/Background';
import Maths from './components/Maths';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background/>
        <Welcome name="Kristel"/>
        <Maths/>
        {/* <Hello name="Kristel"/>
        <Hello name="Oliver"/>
        <Hello 
        name="Lola"
        age={20}/> */}
      </header>
    </div>
  );
}

export default App;
