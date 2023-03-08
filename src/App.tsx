import "./App.css";
import ChatContainer from "./components/ChatGPTContainer.js";
import Messenger from "./components/Messenger.js";

function App() {
  return (
    <Messenger>
      <ChatContainer />
    </Messenger>
  );
}

export default App;
