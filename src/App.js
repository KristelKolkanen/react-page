import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Maths from './components/Maths';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
