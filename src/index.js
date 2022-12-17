import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogues = [
  { id: 1, name: "Vadim" },
  { id: 2, name: "Dinara" },
  { id: 3, name: "Violetta" },
  { id: 4, name: "Igor" },
  { id: 5, name: "Mom" }
];

let messages = [
  { id: 1, message: "Hi, how are you?" },
  { id: 2, message: "Are you at home?" },
  { id: 3, message: "When is our appointment?" },
  { id: 4, message: "What's the matter with you, my friend?" }
];

let posts = [
  {id: 1, message: "What are you doing?", likesCount: 31},
  {id: 2, message: "Where is our appointment?", likesCount: 102}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogues={dialogues} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
