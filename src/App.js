import "./App.css";
import Array from "./components/Array";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
function App() {
  const name = "Dung";
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
      <Array />
    </div>
  );
}

export default App;
