import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomFormContainer from "containers/CustomFormContainer";
import Home from "components/Home";
import FormContainer from "containers/FormContainer";
import FormContext from "context/FormContext";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<CustomFormContainer />} />
        <Route
          path="form"
          element={
            <FormContext>
              <FormContainer />
            </FormContext>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
