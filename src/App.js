import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import Main from "./components/Main";


function App() {
  return (
     <Router>
        <Main />
     </Router>
  );
}

export default App;
