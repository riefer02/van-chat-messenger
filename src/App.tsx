import "./App.css";
import OpenAIContainer from "./components/OpenAIContainer.js";
import Messenger from "./components/Messenger.js";

function App() {
  return (
    <div className="App">
      <Messenger>
        <OpenAIContainer />
      </Messenger>
    </div>
  );
}

export default App;
