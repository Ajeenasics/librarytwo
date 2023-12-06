import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRegister from "./Component/UserRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<UserRegister /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
