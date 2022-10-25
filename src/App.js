import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SetUp from './components';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SetUp/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
