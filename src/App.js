import './App.css';
import { Routes, Route } from "react-router-dom";
import CustomFormContainer from 'containers/CustomFormContainer';
import Home from 'components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<CustomFormContainer />} />
      </Routes>
      
    </div>
  );
}

export default App;
