import './App.css';
import Welcome from './components/Welcome';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <div className="Header">Testing</div>
        <div>
          <h1>GoodFlix</h1>
          <Form/>
          <Welcome/>
        </div>
    </div>
  );
}

export default App;
