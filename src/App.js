import { useState } from 'react';
import './App.css';
import Background from './components/Background';
import Maths from './components/Maths';
import Toggle from './components/Toggle';
import Welcome from './components/Welcome';
import Show from './components/Show';
import MyForm from './components/MyForm';
import Fetching from './components/Fetching';
import PropDrilling from './components/PropDrilling';
import Context from './components/Context';

function App() {

  const [show, setshow] = useState(true)
  const toggleShow = () => setshow(previousShow => !previousShow)
  return (
    <div className="Container">

    <h1>Registration</h1> 
    <Fetching/>
    <PropDrilling/>
    <Context/>
    <MyForm/>
    <Show show = {show}/>
    <Toggle toggleShow={toggleShow}/>
    <Maths/>

      {/*<header className="App-header">*/}
       {/*  <Background/>
        <Welcome name="Kristel"/> */}
        {/* <Hello name="Kristel"/>
        <Hello name="Oliver"/>
        <Hello 
        name="Lola"
        age={20}/> */}
      {/*</header>*/}
    </div>
  );
}

export default App;
