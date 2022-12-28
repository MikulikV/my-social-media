import { Route, Routes } from "react-router-dom";
import "./App.css";
import MessagesContainer from "./components/Messages/MessagesContainer";
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
            element={<Profile store={props.store} />}
          />
          <Route
            path="/messages/*"
            element={<MessagesContainer store={props.store} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
