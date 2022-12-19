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
            element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />}
          />
          <Route
            path="/messages/*"
            element={<Messages messagesPage={props.state.messagesPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
