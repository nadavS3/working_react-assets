import logo from './logo.svg';
import './App.css';
import { Example } from "@nadavshaham/brave-hackathon-assets-r";
import Button from "./genericButton";
function App() {
  return (
    <div className="App">
        <Example ></Example>
      <header className="App-header">
      <Button text="sadfasdf" size="small" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
