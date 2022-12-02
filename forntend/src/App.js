import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
import Upload from "./component/Upload";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Socket from "./component/Socket";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/message" element={<Socket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
