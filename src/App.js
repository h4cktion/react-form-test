import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomFormContainer from "containers/CustomFormContainer";
import Home from "components/Home";
import DumpFormContainer from "containers/DumpFormContainer";
import DumpFormContext from "context/dumpFormContext";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<CustomFormContainer />} />
        <Route
          path="dumpForm"
          element={
            <DumpFormContext>
              <DumpFormContainer />
            </DumpFormContext>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
