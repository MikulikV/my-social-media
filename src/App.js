import { Route, Routes } from "react-router-dom";
import "./App.css";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.friendsPage} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={<Profile state={props.state.profilePage} />}
          />
          <Route
            path="/messages/*"
            element={<Messages state={props.state.messagesPage} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
