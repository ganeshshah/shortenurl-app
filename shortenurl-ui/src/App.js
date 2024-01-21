import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './views/Registration/SignIn';
import SignupPage from "./views/Registration/SignUpPage";
import DashBoard from "./views/DashBoard/DashBoard";


function App() {
  return (
  
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/shortenurl" element={<DashBoard/>} />
        </Routes>
      </BrowserRouter>
  
  );
}


export default App;
