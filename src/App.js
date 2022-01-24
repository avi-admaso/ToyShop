import Toy from "./Component/Toy";
import "./App.css";
import MakingProvider from "./Component/ToysContext";

function App() {
  return <MakingProvider theToy={<Toy toyName="barbie" />}></MakingProvider>;
}

export default App;
