import logo from './logo.svg';
import './App.css';
import HelloComponent from './HelloComponent.js';
import MyStatelessComponent from './MyStatelessComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloComponent name="User"/>
        <MyStatelessComponent/>
      </header>
    </div>
  );
}

export default App;
