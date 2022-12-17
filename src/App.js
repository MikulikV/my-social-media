import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <BrowserRouter> 
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile posts={props.posts}/>} />
            <Route path="/messages/*" element={<Messages dialogues={props.dialogues} messages={props.messages} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
