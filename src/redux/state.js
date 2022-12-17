let state = {
  profilePage: {
    posts: [
      { id: 1, message: "What are you doing?", likesCount: 31 },
      { id: 2, message: "Where is our appointment?", likesCount: 102 },
    ],
  },
  messagesPage: {
    dialogues: [
      { id: 1, name: "Vadim" },
      { id: 2, name: "Dinara" },
      { id: 3, name: "Violetta" },
      { id: 4, name: "Igor" },
      { id: 5, name: "Mom" },
    ],
    messages: [
      { id: 1, message: "Hi, how are you?" },
      { id: 2, message: "Are you at home?" },
      { id: 3, message: "When is our appointment?" },
      { id: 4, message: "What's the matter with you, my friend?" },
    ],
  },
  friendsPage: {
    friends: [
      { id: 1, name: "Vadim" },
      { id: 2, name: "Dinara" },
      { id: 3, name: "Violetta" }
    ],
  },
};

export default state;
